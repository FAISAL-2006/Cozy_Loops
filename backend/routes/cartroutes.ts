import { Router } from "express";
import Cart from "../models/cart";
import auth from "../middleware/auth";

const router=Router();
//these middlewares are just like function calls (next() calls the next middleware / function)
router.post("/add",auth,async (req,res)=>{
    //check user (who logged in) , check if the product exists in the cart or not , if yes add quantity if no add the product
    try{
        const userId=(req as any).user.userId;
        const {productId}=req.body;
        let cart = await Cart.findOne({user:userId}); 
        //check if cart is present for the user
        if(!cart){
            
            cart = new Cart({
                user:userId,
                items:[]
            });
        }
       
        //check if the product is present or not 
        //checking for productid 
        const existingItem=await cart.items.find(
            (item:any)=>item.product.toString()===productId
        );

        if(existingItem){
            existingItem.quantity++; //if item exists then increment quantity
        }else{
            cart.items.push({
                product:productId,
                quantity:1
            });
        }

        await cart.save();

        res.json({
            success: true,
            message:"Added to cart"
        });
    }catch(error){
        console.log(error);

        res.status(500).json({

            success: false

        });
    }
}
);

router.get("/", auth, async (req, res) => {
    try {
        const userId = (req as any).user.userId;

        const cart = await Cart.findOne({
            user: userId
        }).populate("items.product");

        if (!cart) {
            return res.json({
                items: [],
                total: 0
            });
        }

        // 1. Filter out items whose referenced product no longer exists (product is null)
        const validItems = cart.items.filter((item: any) => item.product != null);

        // Optional: Clean up orphaned items in the database automatically
        if (validItems.length !== cart.items.length) {
            cart.items = validItems as any;
            await cart.save();
        }

        // 2. Safely calculate total
        let total = 0;
        validItems.forEach((item: any) => {
            if (item.product && typeof item.product.price === 'number') {
                total += item.product.price * item.quantity;
            }
        });

        res.json({
            items: validItems,
            total
        });
    } catch (error) {
        console.error("Get Cart Error:", error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch cart"
        });
    }
});

router.patch("/decrease",auth,async (req,res)=>{
    try{
        const userId=(req as any).user.userId;

        const {productId}=req.body;
        const cart=await Cart.findOne({user:userId}) as any;//find cart ,why as any? to avoid typescript issue , remove and check 
        
        if (!cart) {
            return res.status(404).json({
                success: false,
                message: "Cart not found"
            });
        }
        const item = cart.items.find((item: any) => item.product.toString() === productId);

        if(!item){
            return res.status(404).json({
                success:false,
                message:"Product not found in cart"
            });
        }

        item.quantity--;

        if(item.quantity<=0){
            cart.items=cart.items.filter(
                (item:any)=>item.product.toString()!==productId
            );
        }

        await cart.save();

        res.json({
            success: true,
            message: "Quantity Updated"
        });

    }catch(error){
        console.log(error);
        res.status(500).json({

            success: false

        });
    }
    
});

router.patch("/increase", auth, async (req, res) => {
  try {
    const userId = (req as any).user.userId;

    const { productId } = req.body;

    const cart = await Cart.findOne({ user: userId }) as any;

    if (!cart) {
      return res.status(404).json({
        success: false,
      });
    }

    const item = cart.items.find(
      (item: any) => item.product.toString() === productId
    );

    if (!item) {
      return res.status(404).json({
        success: false,
      });
    }

    item.quantity++;

    await cart.save();

    res.json({
      success: true,
    });

  } catch (err) {

    res.status(500).json({
      success: false,
    });

  }
});

export default router;


//frontend sends the productid , backend doesnt know which user requested it- jwt works here
//so when you are logged in the backend generates a jwt , containing userid and role
//so before the cart route runs router.post("/add", auth, ...)-> go to the middleware and come 
//so the cart route has access to: req.user.userId and req.body.productId
//ad when user opens the cart page , execute GET /cart sends the bearer token

//need middleware- only purpose is to identify the user (jwt)
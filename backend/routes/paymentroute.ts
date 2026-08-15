import { Router } from "express";
import Razorpay from "razorpay";
import Cart from "../models/cart";
import auth from "../middleware/auth";
import crypto from "crypto";//for SHA , HMAC 
import Orders from "../models/orders"
const router = Router();


router.post("/place-order", auth, async (req, res) => {
    console.log("KEY inside route:", process.env.RAZORPAY_KEY_ID);

    const { shippingAddress } = (req.body ?? {}) as {
        shippingAddress?: unknown;
    };

    const razorpay = new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID!,
        key_secret: process.env.RAZORPAY_KEY_SECRET!
    });
    try {

        const userId = (req as any).user.userId;

        const cart = await Cart.findOne({
            user: userId
        }).populate("items.product");

        if (!cart || cart.items.length === 0) {
            return res.status(400).json({
                success: false,
                message: "Cart Empty"
            });
        }

        const validItems = cart.items.filter((item: any) => item.product != null);

        if (validItems.length === 0) {
            return res.status(400).json({
                success: false,
                message: "Cart contains invalid products"
            });
        }

        let total = 0;

        validItems.forEach((item: any) => {
            total += item.product.price * item.quantity;
        });
        //create a razorpay order, this how it shows the cost to you
        const order = await razorpay.orders.create({

            amount: total * 100, // paise

            currency: "INR"

        });

        res.json({

            success: true,

            key: process.env.RAZORPAY_KEY_ID,

            orderId: order.id,

            amount: order.amount,

            currency: order.currency

        });

    }

    catch (err) {

        console.log(err);

        res.status(500).json({

            success: false

        });

    }

});

router.post("/verify",auth,async (req,res)=>{
    
    try{
        const userId = (req as any).user.userId;
        
        const {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
            shippingAddress,
        } = (req.body ?? {}) as {
            razorpay_order_id?: string;
            razorpay_payment_id?: string;
            razorpay_signature?: string;
            shippingAddress?: Record<string, unknown>;
        };  //sent from react fronend 
        
        const body =`${razorpay_order_id}|${razorpay_payment_id}`;

        const expectedSignature =crypto.createHmac("sha256",process.env.RAZORPAY_KEY_SECRET!).update(body).digest("hex");
        if(expectedSignature!==razorpay_signature){

            return res.status(400).json({
                success:false,
                message:"Payment Verification Failed"
            });

        }
        const cart = await Cart.findOne({user: userId}).populate("items.product") as any;
        if (!cart || cart.items.length === 0) {

            return res.status(400).json({

                success: false,

                message: "Cart Empty"

            });

        }
        const validItems = cart.items.filter((item: any) => item.product != null);

        if (validItems.length === 0) {
            return res.status(400).json({
                success: false,
                message: "Cart contains invalid products"
            });
        }
        let total = 0;

        validItems.forEach((item: any) => {

            total += item.product.price * item.quantity;

        });

        const order = new Orders({

            user: userId,

            items: validItems.map((item: any) => ({

                product: item.product._id,

                quantity: item.quantity,

                price: item.product.price,

                image: item.product.image

            })),
 
            totalAmount: total,

            shippingAddress,

            paymentStatus: "Paid",

            razorpayOrderId: razorpay_order_id,

            razorpayPaymentId: razorpay_payment_id,

            razorpaySignature: razorpay_signature

        });

        await order.save();

        cart.items = [];

        await cart.save();

        res.json({

            success: true,

            message: "Order Placed Successfully"

        });
    }catch (error) {

    console.error("🔥 VERIFY ERROR:", error);

    return res.status(500).json({
        success: false,
        message: "Internal Server Error",
        error: error instanceof Error ? error.message : String(error)
    });
}

});

export default router;
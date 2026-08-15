
//import product type
import type { Product } from "../types/product";
//import {useEffect} from "react";
type Props = {
  product: Product;
  quantity: number; 
  refreshCart:()=>Promise<void>;//fetch cart will be executed 
};

//problem encountered uneven card size , fixed positioning by using grid layout
//flex for keeping things side by side
//to keep things top to bottom flex-col, use flex box for 1-D layouts like keeping it in a row , keeping it in a col
//grid for 2-D layout , for placing different cards side by side  
export default function CartCard({product,quantity,refreshCart}:Props){
    //outer div to place two sections left-right fashion
    //inner div (child-1 image)-occupies LHS and the details in the RHS, just maintaining the order
    //"-" to delete item from cart 
    const API_URL = import.meta.env.VITE_API_URL;
    async function deletefromCart(productId:string){
        const token=localStorage.getItem("token");
        const response=await fetch(`${API_URL}/cart/decrease`,{
             method:"PATCH",
             headers:{
                "Content-Type":"application/json",
                Authorization:`Bearer ${token}`
             },
             body:JSON.stringify({productId})
        });

        const data=await response.json();
        console.log(data);

        await refreshCart();
    }

    async function increaseQuantity(productId: string) {

  const token = localStorage.getItem("token");

  await fetch(
    `${API_URL}/increase`,
    {
      method: "PATCH",

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },

      body: JSON.stringify({
        productId,
      }),
    }
  );

  await refreshCart();
}

    /*async function Buynow(productId:string){
        const token=localStorage.getItem("token");
        const response=await fetch("http://localhost:5000/Orders/add",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                Authorization:`Bearer ${token}`
            } ,
            body:JSON.stringify({productId})
        });
        const data=await response.json();
        console.log(data);
    }*/
    return (
        <div 
           className="
           w-full
           bg-white
           rounded-2xl
           p-5
           shadow-sm
           border
           border-slate-200
           hover:shadow-lg
           hover:-translate-y-1
           transition-all
           duration-300
           flex
           gap-4"
        >
            <img
  src={product.image}
  alt={product.name}
  className="
  h-28
  w-28
  rounded-2xl
  object-cover
  flex-shrink-0
  "
/>
            <div className="flex-1 flex flex-col justify-between">
                <h3 className="font-bold text-lg text-slate-900 truncate">
                    {product.name}
                </h3>
                <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-emerald-600">
                        ₹{product.price}
                    </span>

                    <div className="flex gap-2">
                      <button className="
                          bg-emerald-500
                          text-white
                          w-10
                          h-10
                          rounded-xl
                          hover:bg-emerald-600
                          transition
                          flex
                          items-center
                          justify-center
                      "
                      onClick={()=>deletefromCart(product._id)}>-</button>
                      <button
  className="
  bg-[#8B5E3C]
  text-white
  w-10
  h-10
  rounded-xl
  hover:bg-[#70492B]
  transition
  "
  onClick={() => increaseQuantity(product._id)}
>
  +
</button>
                      {/* <button className="
                          bg-emerald-500
                          text-white
                          w-10
                          h-10
                          rounded-xl
                          hover:bg-emerald-600
                          transition
                          flex
                          items-center
                          justify-center
                      " 
                      onClick={()=>Buynow(product._id)}>Buy now</button> */}
                      <p>Quantity:{quantity}</p>
                    </div>
                </div> 
            </div>
        </div>
    )
}
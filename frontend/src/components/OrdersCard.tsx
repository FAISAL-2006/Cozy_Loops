
//import product type
import type { Product } from "../types/product";
//import {useEffect} from "react";
type Props = {
  product: Product;
  quantity: number; 
};
 
export default function OrdersCard({product,quantity}:Props){
    //route it to order (GET req)
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

    }
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
            <div 
                className="
                h-24
                w-24
                flex-shrink-0
                rounded-xl
                bg-slate-100
                flex
                items-center
                justify-center
                text-4xl"
            >
              🥬
            </div>
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
                      onClick={()=>deletefromCart(product._id)}>Cancel Order</button>
                      
                      <p>Quantity:{quantity}</p>
                    </div>
                </div> 
            </div>
        </div>
    )
}
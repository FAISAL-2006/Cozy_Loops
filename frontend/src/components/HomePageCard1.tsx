//import products from "../pages/Products"
import { useNavigate } from "react-router-dom";
import type {Discount} from "../types/discount"

type props={
    discount:Discount;
};

//today's offers card, discount+cashback description
export default function homecard1({discount}:props){
    const navigate = useNavigate();
    return(
        <div className="
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
           gap-4">
            <div>
                <h2 className="
                h-24
                w-24
                flex-shrink-0
                rounded-xl
                bg-slate-100
                flex
                items-center
                justify-center
                text-4xl">{discount.percentage}</h2>
            </div>
            <div className="flex-1 flex flex-col justify-between">
                <h3 className="font-bold text-lg text-slate-900 truncate">{discount.bank}</h3>
                <p className="text-slate-500 text-sm mb-4">Available for credit card payments</p>
                <button className="
                          bg-emerald-500
                          text-white
                          rounded-xl
                          hover:bg-emerald-600
                          transition
                          flex
                          items-center
                          justify-center
                      "
                      onClick={()=>navigate("/products")}>Shop Now</button>
            </div>
        </div>
    );
}
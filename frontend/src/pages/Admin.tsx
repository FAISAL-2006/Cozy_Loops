//The admin page is to show add , delete , edit options , or to view prroducts and etc for now this will be the design 
//enable buttons for it (route)

//enable buttons first
//import {useState} from "react";
import {useNavigate} from "react-router-dom"
export default function Admin(){
    const Navigate= useNavigate();
    return(
        //Manage products button is clicked , go to the poducts page , it should show add products option only if the 
        //role is admin
        <div>
            
            <button className="
                          bg-emerald-500
                          text-white
                          w-20
                          h-10
                          rounded-xl
                          hover:bg-emerald-600
                          transition
                          flex
                          items-center
                          justify-center
                      "
                      onClick={()=>Navigate("/products")}>Manage products</button>
        </div>
    );
}
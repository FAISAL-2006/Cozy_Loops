//to define the structure of the products to make it visible as a card in the front end 
//this one will be visible to all the customers viewing the frontend 
//if this particular product is added to cart or it is ordered it must be shown dynamically
import mongoose from "mongoose";

const productSchema=new mongoose.Schema({

   name:{
    type:String,
    required:true
   },
   price:{
    type:Number,
    required:true
   },
   category:{
    type:String,
    required:true
   },
   image: {
      type: String,
      required: true
   },
   inStock:{
    type:Boolean,
    required:true
   }
});

const Product=mongoose.model("Product",productSchema);
export default Product;

/*products
{
    _id,
    name,
    description,
    price,
    image,
    category,
    quantity
}*/
import type { Product } from "../types/product";
import { useNavigate } from "react-router-dom";
import { Heart } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import {colors} from "../theme"
type Props = {
  product: Product;
  isAdmin: boolean;
  
};

function getCategoryColor(category: string) {
  switch (category) {
    case "Fruits":
      return "bg-orange-100 text-orange-700";

    case "Vegetables":
      return "bg-green-100 text-green-700";

    case "Dairy":
      return "bg-blue-100 text-blue-700";

    case "Beverages":
      return "bg-purple-100 text-purple-700";

    default:
      return "bg-slate-100 text-slate-700";
  }
}

export default function ProductCard({ product,isAdmin}: Props) {
  //outer div is for entire card component
  //inner div for image component
  //A card has image,name,description,price and a button to add to cart
  const navigate=useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;
  async function addToCart(productId:string){

    const token = localStorage.getItem("token");

    const response = await fetch(

        `${API_URL}/cart/add`,

        {

            method:"POST",

            headers:{

                "Content-Type":"application/json",

                Authorization:`Bearer ${token}`

            },

            body:JSON.stringify({

                productId

            })

        }

    );

    const data = await response.json();

    console.log(data);

  }
  const deleteProduct = async () => {

    const response = await fetch(

        `${API_URL}/products/${product._id}`,

        {
            method: "DELETE",

            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }

    );

    const data = await response.json();

    alert(data.message);

    navigate("/products")
  }
  return (
  <div
className="
group
relative
overflow-hidden
rounded-3xl
bg-white
border
shadow-sm
transition-all
duration-500
hover:-translate-y-2
hover:shadow-2xl
"
style={{
    borderColor: colors.border,
}}
>
    {/* Image */}
    <div className="relative overflow-hidden">

      {/* Stock Badge */}
      <div
        className={`
          absolute
          left-4
          top-4
          z-20
          rounded-full
          px-3
          py-1
          text-xs
          font-semibold
          shadow-md
          ${
            product.inStock
              ? "bg-emerald-100 text-emerald-700"
              : "bg-red-100 text-red-700"
          }
        `}
      >
        {product.inStock ? "In Stock" : "Out of Stock"}
      </div>

      {/* Wishlist */}
      <button
        className="
          absolute
          right-4
          top-4
          z-20
          rounded-full
          bg-white/90
          p-2
          shadow-md
          backdrop-blur
          transition
          hover:scale-110
        "
      >
        <Heart
    size={18}
    className="transition group-hover:fill-red-500 group-hover:text-red-500"
/>
      </button>

      <img
    src={product.image}
    alt={product.name}
    onClick={() => navigate(`/products/${product._id}`)}
    className="
        cursor-pointer
        h-72
        w-full
        object-cover
        transition-transform
        duration-500
        group-hover:scale-105
    "
/>
      <div
  className="
    absolute
    inset-0
    flex
    items-center
    justify-center
    bg-black/0
    opacity-0
    transition-all
    duration-300
    group-hover:bg-black/20
    group-hover:opacity-100
  "
>
  <button
    className="
      rounded-full
      bg-white
      px-6
      py-3
      text-sm
      font-medium
      shadow-lg
    "
    style={{ color: colors.text }}
  >
    Quick View
  </button>
</div>
    </div>

    {/* Content */}
    <div className="p-6">

      <div
        className={`
          inline-block
          rounded-full
          px-3
          py-1
          text-xs
          font-semibold
          ${getCategoryColor(product.category)}
        `}
      >
        {product.category}
      </div>

      <h3
        onClick={() => navigate(`/products/${product._id}`)}
        className="mt-4 text-2xl text-[#3B2C25]"
        style={{ fontFamily: "Playfair Display" }}
      >
        {product.name}
      </h3>

      <p className="mt-2 text-sm text-gray-500">
        Handmade with love and premium quality yarn.
      </p>

      {/* Fake rating (until backend provides one) */}
      <div className="mt-4 flex items-center gap-2 text-sm">
        ⭐⭐⭐⭐⭐
        <span className="text-gray-500">(128)</span>
      </div>

      {/* Price */}
      <div className="mt-5 flex items-center gap-3">
        <span className="text-2xl font-bold text-[#8B5E3C]">
          ₹{product.price}
        </span>

        <span className="text-gray-400 line-through">
          ₹{product.price + 300}
        </span>
      </div>

      {/* Button */}
      <button
        disabled={!product.inStock}
        onClick={() => addToCart(product._id)}
        className={`
          mt-6
          flex
          w-full
          items-center
          justify-center
          gap-2
          rounded-full
          py-3
          font-medium
          transition-all
          duration-300
          ${
            product.inStock
              ? "bg-[#8B5E3C] text-white hover:bg-[#70492B] hover:-translate-y-1"
              : "cursor-not-allowed bg-gray-300 text-gray-600"
          }
        `}
      >
        <ShoppingBag size={18} />
        {product.inStock ? "Add to Cart" : "Out of Stock"}
      </button>

    {isAdmin && (

    <div className="flex gap-2 mt-3">

        <button
            className="
                bg-blue-500
                text-white
                px-3
                py-1
                rounded
            "
        onClick={() => navigate(`/admin/editproduct/${product._id}`)}>
            Edit
        </button>

        <button
            className="
                bg-red-500
                text-white
                px-3
                py-1
                rounded
            "
        onClick={deleteProduct}>
            Delete
        </button>

    </div>

    )}

    </div>
  </div>
);
}

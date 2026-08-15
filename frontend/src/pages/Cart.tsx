import CartCard from "../components/CartCard";
import OrderSummary from "../components/orderSummary";
import { useEffect, useState } from "react";
import type { Product } from "../types/product";
import { useNavigate } from "react-router-dom";

export type CartItem = {
  product: Product;
  quantity: number;
};

export default function Cart() {
  const Navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartTotal, setCartTotal] = useState<number>(0);
  const API_URL = import.meta.env.VITE_API_URL;
  //purpose of useEffect was studied well ,refer notes if confusion kicks in
  useEffect(() => {
    fetchCart();
  }, []); //empty dependency array-runs only once
  /*
  useEffect(() => {

    searchProducts();

  }, [search]);
  
  Run this effect

  ONLY

  when search changes.
  */
  async function fetchCart() {
    const token = localStorage.getItem("token");

    const response = await fetch(`${API_URL}/cart`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    setCartItems(data.items); //items (from the schema you are getting)
    setCartTotal(data.total);
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <h1
        className="mb-10 text-5xl text-[#3B2C25]"
        style={{ fontFamily: "Playfair Display" }}
      >
        Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24">
          <div className="text-8xl">🧸</div>

          <h2
            className="mt-6 text-3xl"
            style={{ fontFamily: "Playfair Display" }}
          >
            Your basket feels lonely
          </h2>

          <p className="mt-4 text-gray-500">
            Looks like you haven't added any handmade treasures yet.
          </p>

          <button
            className="
          mt-8
          rounded-full
          bg-[#8B5E3C]
          px-8
          py-4
          text-white
          "
            onClick={() => Navigate("/products")}
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            {cartItems.map((item) => (
              <CartCard
                key={item.product._id}
                product={item.product}
                quantity={item.quantity}
                refreshCart={fetchCart}
              />
            ))}
          </div>

          <OrderSummary total={cartTotal} />
        </div>
      )}
    </div>
  );
}

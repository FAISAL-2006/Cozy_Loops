import { useEffect, useState } from "react";

interface CartItem {
  product: {
    _id: string;
    name: string;
    price: number;
    image: string;
  };
  quantity: number;
}

interface Props {
  onPay: () => void;
}

export default function OrderSummary({ onPay }: Props) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [total, setTotal] = useState(0);
  const API_URL = import.meta.env.VITE_API_URL;
  useEffect(() => {
    fetchCart();
  }, []);

  async function fetchCart() {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(`${API_URL}/cart`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      setItems(data.items || []);
      setTotal(data.total || 0);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 sticky top-24">

      <h2 className="text-2xl font-bold mb-6">
        Order Summary
      </h2>

      <div className="space-y-4">

        {items.map((item) => (
          <div
            key={item.product._id}
            className="flex justify-between items-center"
          >
            <div>
              <p className="font-medium">
                {item.product.name}
              </p>

              <p className="text-sm text-gray-500">
                Qty: {item.quantity}
              </p>
            </div>

            <p className="font-semibold">
              ₹{item.product.price * item.quantity}
            </p>
          </div>
        ))}

      </div>

      <hr className="my-6" />

      <div className="space-y-3">

        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹{total}</span>
        </div>

        <div className="flex justify-between">
          <span>Shipping</span>
          <span className="text-green-600">FREE</span>
        </div>

        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>₹{total}</span>
        </div>

      </div>

      <button
        onClick={onPay}
        className="mt-8 w-full rounded-xl bg-emerald-600 py-3 text-white font-semibold transition hover:bg-emerald-700"
      >
        Pay Securely
      </button>

      <p className="mt-4 text-center text-sm text-gray-500">
        🔒 Payments secured by Razorpay
      </p>

    </div>
  );
}
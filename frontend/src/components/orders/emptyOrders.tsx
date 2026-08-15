import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

export default function EmptyOrders() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">

      <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-12 text-center max-w-md w-full">

        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center">
            <ShoppingBag className="w-10 h-10 text-emerald-600" />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-gray-900">
          No Orders Yet
        </h1>

        <p className="text-gray-500 mt-3 leading-relaxed">
          Looks like you haven't purchased any handmade crochet items yet.
        </p>

        <Link
          to="/products"
          className="inline-block mt-8 bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-3 rounded-xl transition"
        >
          Continue Shopping
        </Link>

      </div>

    </div>
  );
}
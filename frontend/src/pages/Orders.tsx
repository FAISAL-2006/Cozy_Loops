import { useEffect, useState } from "react";
import OrderCard from "../components/orders/orderCard";
import EmptyOrders from "../components/orders/emptyOrders";

interface Product {
  _id: string;
  name: string;
  image: string;
  price: number;
}

interface OrderItem {
  product: Product;
  quantity: number;
  price: number;
  image: string;
}

interface Order {
  _id: string;
  items: OrderItem[];
  totalAmount: number;
  status: string;
  paymentStatus: string;
  createdAt: string;
}

export default function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const API_URL = import.meta.env.VITE_API_URL;
  useEffect(() => {
    fetchOrders();
  }, []);

  async function fetchOrders() {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(`${API_URL}/orders`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (data.success) {
        setOrders(data.orders);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading orders...
      </div>
    );
  }

  if (orders.length === 0) {
    return <EmptyOrders />;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10">

      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-4xl font-bold mb-2">
          My Orders
        </h1>

        <p className="text-gray-500 mb-10">
          Track all your crochet purchases.
        </p>

        <div className="space-y-6">
          {orders.map((order) => (
            <OrderCard
              key={order._id}
              order={order}
            />
          ))}
        </div>

      </div>

    </div>
  );
}
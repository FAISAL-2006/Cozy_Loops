import { Link } from "react-router-dom";
import OrderStatusBadge from "./orderStatusBadge";

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

interface Props {
  order: Order;
}

export default function OrderCard({ order }: Props) {
  const formattedDate = new Date(order.createdAt).toLocaleDateString(
    "en-IN",
    {
      day: "numeric",
      month: "short",
      year: "numeric",
    }
  );

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition">

      {/* Header */}
      <div className="flex justify-between items-start mb-6">

        <div>

          <h2 className="font-semibold text-lg">
            Order #{order._id.slice(-6).toUpperCase()}
          </h2>

          <p className="text-gray-500 text-sm mt-1">
            {formattedDate}
          </p>

        </div>

        <OrderStatusBadge status={order.status} />

      </div>

      {/* Products */}
      <div className="space-y-4">

        {order.items.slice(0, 2).map((item) => (
          <div
            key={item.product._id}
            className="flex items-center gap-4"
          >
            <img
                src={item.image}
                alt={item.product?.name || "Product"}
                className="w-16 h-16 rounded-xl object-cover border"
            />

            <div className="flex-1">

              <h3 className="font-medium">
                {item.product.name}
              </h3>

              <p className="text-sm text-gray-500">
                Qty: {item.quantity}
              </p>

            </div>

            <p className="font-semibold">
              ₹{item.price * item.quantity}
            </p>

          </div>
        ))}

      </div>

      {/* More Items */}
      {order.items.length > 2 && (
        <p className="mt-4 text-sm text-gray-500">
          + {order.items.length - 2} more item(s)
        </p>
      )}

      {/* Footer */}
      <div className="mt-6 pt-6 border-t flex justify-between items-center">

        <div>

          <p className="text-gray-500 text-sm">
            Total
          </p>

          <p className="text-xl font-bold">
            ₹{order.totalAmount}
          </p>

        </div>

        <Link
          to={`/orders/${order._id}`}
          className="px-5 py-2 rounded-lg bg-black text-white hover:bg-gray-800 transition"
        >
          View Details
        </Link>

      </div>

    </div>
  );
}
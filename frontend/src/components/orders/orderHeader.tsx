import OrderStatusBadge from "./orderStatusBadge";

interface Props {
  order: any;
}

export default function OrderHeader({ order }: Props) {
  const formattedDate = new Date(order.createdAt).toLocaleDateString(
    "en-IN",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

        <div>

          <p className="text-sm text-gray-500 mb-2">
            Order ID
          </p>

          <h1 className="text-3xl font-bold">
            #{order._id.slice(-8).toUpperCase()}
          </h1>

          <p className="text-gray-500 mt-3">
            Placed on {formattedDate}
          </p>

        </div>

        <div className="text-left md:text-right space-y-3">

          <OrderStatusBadge status={order.status} />

          <div>

            <p className="text-sm text-gray-500">
              Total Amount
            </p>

            <p className="text-3xl font-bold text-emerald-600">
              ₹{order.totalAmount}
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}
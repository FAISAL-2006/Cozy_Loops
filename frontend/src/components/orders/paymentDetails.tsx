import { CheckCircle } from "lucide-react";

interface Props {
  order: any;
}

export default function PaymentDetails({ order }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">

      <h2 className="text-2xl font-bold mb-6">
        Payment Details
      </h2>

      <div className="space-y-5">

        <div className="flex justify-between items-center">

          <span className="text-gray-500">
            Payment Status
          </span>

          <div className="flex items-center gap-2 text-green-600 font-semibold">

            <CheckCircle className="w-5 h-5" />

            {order.paymentStatus}

          </div>

        </div>

        <div className="flex justify-between">

          <span className="text-gray-500">
            Payment Method
          </span>

          <span className="font-medium">
            {order.paymentMethod}
          </span>

        </div>

        <div className="flex justify-between">

          <span className="text-gray-500">
            Razorpay Payment ID
          </span>

          <span className="font-medium text-sm break-all">
            {order.razorpayPaymentId}
          </span>

        </div>

        <hr />

        <div className="flex justify-between text-xl font-bold">

          <span>Total Paid</span>

          <span className="text-emerald-600">
            ₹{order.totalAmount}
          </span>

        </div>

      </div>

    </div>
  );
}
import { MapPin, Phone, Mail } from "lucide-react";

interface ShippingAddress {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
}

interface Props {
  order: {
    shippingAddress: ShippingAddress;
  };
}

export default function ShippingDetails({ order }: Props) {
  const shipping = order.shippingAddress || {};

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">

      <h2 className="text-2xl font-bold mb-6">
        Shipping Address
      </h2>

      <div className="space-y-4">

        <div>

          <h3 className="text-lg font-semibold">
            {shipping.name || "-"}
          </h3>

          <p className="text-gray-500">
            Order Recipient
          </p>

        </div>

        <div className="flex items-center gap-3">

          <Phone className="w-5 h-5 text-emerald-600" />

          <span>{shipping.phone || "-"}</span>

        </div>

        <div className="flex items-center gap-3">

          <Mail className="w-5 h-5 text-emerald-600" />

          <span>{shipping.email || "-"}</span>

        </div>

        <div className="flex items-start gap-3">

          <MapPin className="w-5 h-5 text-emerald-600 mt-1" />

          <div>

            <p>{shipping.address || "-"}</p>

            <p>
              {shipping.city || "-"}, {shipping.state || "-"}
            </p>

            <p>{shipping.pincode || "-"}</p>

          </div>

        </div>

      </div>

    </div>
  );
}
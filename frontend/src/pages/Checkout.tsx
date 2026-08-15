import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ShippingForm from "../components/checkout/shippingForm";
import type { ShippingData } from "../components/checkout/shippingForm";

import OrderSummary from "../components/checkout/orderSummary";

export default function Checkout() {
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;
  const [shippingData, setShippingData] = useState<ShippingData>({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  async function PayNow() {
    // Basic validation
    if (
      !shippingData.name ||
      !shippingData.phone ||
      !shippingData.address ||
      !shippingData.city ||
      !shippingData.state ||
      !shippingData.pincode
    ) {
      alert("Please fill all shipping details");
      return;
    }

    const token = localStorage.getItem("token");

    const response = await fetch(`${API_URL}/payment/place-order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        shippingAddress: shippingData,
      }),
    });
    const data = await response.json();

    if (!data.success) {
      alert("Unable to create order");
      return;
    }

    const options = {
      key: data.key,

      amount: data.amount,

      currency: data.currency,

      order_id: data.orderId,

      name: "Cozy Loops",

      description: "Handmade Crochet Order",

      handler: async function (response: any) {
        const verifyResponse = await fetch(
          `${API_URL}/payment/verify`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              ...response,
              shippingAddress: shippingData,
            }),
          },
        );

        const verifyData = await verifyResponse.json();

        if (!verifyData.success) {
          alert(verifyData.message || "Payment verification failed");
          return;
        }

        navigate("/orders");
      },
    };

    const razorpay = new (window as any).Razorpay(options);

    razorpay.open();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-2">Checkout</h1>

        <p className="text-gray-500 mb-8">Complete your handmade purchase</p>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ShippingForm data={shippingData} setData={setShippingData} />
          </div>

          <OrderSummary onPay={PayNow} />
        </div>
      </div>
    </div>
  );
}

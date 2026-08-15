import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import OrderHeader from "../components/orders/orderHeader";
import OrderProducts from "../components/orders/orderProducts";
import ShippingDetails from "../components/orders/shippingDetails";
import PaymentDetails from "../components/orders/paymentDetails";

export default function OrderDetails() {

    const { id } = useParams();

    const [order, setOrder] = useState<any>(null);

    const [loading, setLoading] = useState(true);
    const API_URL = import.meta.env.VITE_API_URL;
    useEffect(() => {
        fetchOrder();
    }, []);

    async function fetchOrder() {

        const token = localStorage.getItem("token");

        const response = await fetch(
            `${API_URL}/orders/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        const data = await response.json();

        if (data.success) {
            setOrder(data.order);
        }

        setLoading(false);
    }

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                Loading...
            </div>
        );
    }

    if (!order) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                Order not found
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-10">

            <div className="max-w-6xl mx-auto space-y-8 px-6">

                <OrderHeader order={order} />

<div className="grid lg:grid-cols-3 gap-8">

  <div className="lg:col-span-2">
    <OrderProducts order={order} />
  </div>

  <div className="space-y-8">
    <ShippingDetails order={order} />
    <PaymentDetails order={order} />
  </div>

</div>

            </div>

        </div>
    );
}
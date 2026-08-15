// import { useState } from "react";

export interface ShippingData {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
}

interface ShippingFormProps {
  data: ShippingData;
  setData: React.Dispatch<React.SetStateAction<ShippingData>>;
}

export default function ShippingForm({
  data,
  setData,
}: ShippingFormProps) {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const inputStyle =
    "w-full rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500";

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">
        Shipping Details
      </h2>

      <div className="space-y-4">

        <input
          name="name"
          placeholder="Full Name"
          value={data.name}
          onChange={handleChange}
          className={inputStyle}
        />

        <input
          name="email"
          placeholder="Email"
          value={data.email}
          onChange={handleChange}
          className={inputStyle}
        />

        <input
          name="phone"
          placeholder="Phone Number"
          value={data.phone}
          onChange={handleChange}
          className={inputStyle}
        />

        <textarea
          name="address"
          placeholder="Address"
          rows={3}
          value={data.address}
          onChange={handleChange}
          className={inputStyle}
        />

        <div className="grid md:grid-cols-2 gap-4">

          <input
            name="city"
            placeholder="City"
            value={data.city}
            onChange={handleChange}
            className={inputStyle}
          />

          <input
            name="state"
            placeholder="State"
            value={data.state}
            onChange={handleChange}
            className={inputStyle}
          />

        </div>

        <input
          name="pincode"
          placeholder="Pincode"
          value={data.pincode}
          onChange={handleChange}
          className={inputStyle}
        />

      </div>
    </div>
  );
}
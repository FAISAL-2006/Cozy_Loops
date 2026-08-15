import { useState } from "react";

const tabs = [
  "Description",
  "Care",
  "Shipping",
  "Reviews",
];

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState("Description");

  return (
    <section className="mt-24">

      <div className="flex flex-wrap gap-3 border-b pb-4">

        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`
              rounded-full
              px-6
              py-3
              transition-all
              ${
                activeTab === tab
                  ? "bg-amber-700 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }
            `}
          >
            {tab}
          </button>
        ))}

      </div>

      <div className="mt-8 leading-8 text-gray-600">

        {activeTab === "Description" && (
          <>
            <h3 className="mb-4 text-2xl font-semibold">
              Product Description
            </h3>

            <p>
              Every Cozy Loops creation is handcrafted using
              premium cotton yarn. Every stitch is made carefully
              to ensure softness, durability, and a beautiful
              handmade finish.
            </p>
          </>
        )}

        {activeTab === "Care" && (
          <>
            <h3 className="mb-4 text-2xl font-semibold">
              Care Instructions
            </h3>

            <ul className="list-disc pl-6 space-y-2">
              <li>Hand wash only</li>
              <li>Do not bleach</li>
              <li>Dry in shade</li>
              <li>Avoid machine drying</li>
            </ul>
          </>
        )}

        {activeTab === "Shipping" && (
          <>
            <h3 className="mb-4 text-2xl font-semibold">
              Shipping Information
            </h3>

            <p>
              Orders are processed within 24 hours and shipped
              within 2–3 business days. Delivery usually takes
              5–7 business days depending on your location.
            </p>
          </>
        )}

        {activeTab === "Reviews" && (
          <>
            <h3 className="mb-4 text-2xl font-semibold">
              Customer Reviews
            </h3>

            <p>
              ⭐⭐⭐⭐⭐ 4.9 / 5 based on 128 happy customers.
            </p>
          </>
        )}

      </div>

    </section>
  );
}
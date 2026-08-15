import { useNavigate } from "react-router-dom";

type Props = {
  total: number;
};

export default function OrderSummary({ total }: Props) {
  const Navigate=useNavigate();
  return (
    <div
      className="
      sticky
      top-24
      rounded-3xl
      bg-white
      border
      border-[#E6DED6]
      shadow-md
      p-8
      "
    >
      <h2
        className="text-3xl text-[#3B2C25]"
        style={{ fontFamily: "Playfair Display" }}
      >
        Order Summary
      </h2>

      <div className="mt-8 space-y-5">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹{total}</span>
        </div>

        <div className="flex justify-between">
          <span>Shipping</span>
          <span className="text-green-600">FREE</span>
        </div>

        <div className="border-t pt-5 flex justify-between text-xl font-bold">
          <span>Total</span>
          <span>₹{total}</span>
        </div>
      </div>

      <button
        className="
        mt-8
        w-full
        rounded-full
        bg-[#8B5E3C]
        py-4
        text-white
        font-semibold
        hover:bg-[#70492B]
        transition
        "
      onClick={()=>Navigate("/checkout")}>
        Proceed to Checkout
      </button>
    </div>
  );
}
import type { Product } from "../../types/product";
import { useState } from "react";
import {
    Minus,
    Plus,
    Star,
    Truck,
    ShieldCheck
} from "lucide-react";

type Props = {
  product: Product;
};

export default function ProductInfo({ product }: Props) {
    const [quantity, setQuantity] = useState(1);
  return (
    <div className="space-y-6">

      <p className="text-sm uppercase tracking-[0.3em] text-amber-700">
        Handmade Collection
      </p>

      <h1
        className="text-5xl font-semibold"
        style={{
          fontFamily: "Playfair Display",
        }}
      >
        {product.name}
      </h1>

      <div className="flex items-center gap-3">
        <div className="space-y-2">

    <div className="flex items-center gap-2">

        <Star
            size={18}
            fill="#FBBF24"
            color="#FBBF24"
        />

        <span className="font-semibold">
            4.9
        </span>

        <span className="text-gray-500">
            (128 Reviews)
        </span>

    </div>

    <div className="flex items-end gap-4">

        <span className="text-4xl font-bold">
            ₹{product.price}
        </span>

        <span className="text-xl text-gray-400 line-through">
            ₹{Math.round(product.price * 1.25)}
        </span>

        <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
            Save 20%
        </span>

    </div>

</div>

        <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
          In Stock
        </span>
      </div>

      <p className="leading-8 text-gray-600">
        Handmade with premium cotton yarn, carefully crafted
        with love. Soft, durable and perfect for gifting.
      </p>

      <div className="space-y-4">

    <div className="flex items-center gap-3">

        <ShieldCheck
            size={20}
            className="text-green-600"
        />

        Handmade with premium cotton yarn

    </div>

    <div className="flex items-center gap-3">

        <Truck
            size={20}
            className="text-green-600"
        />

        Ships within 2–3 business days

    </div>

</div>

<div className="space-y-3">

    <h3 className="font-semibold">
        Quantity
    </h3>

    <div
        className="
            flex
            w-fit
            items-center
            rounded-full
            border
            overflow-hidden
        "
    >

        <button
            onClick={() =>
                setQuantity(Math.max(1, quantity - 1))
            }
            className="p-4 hover:bg-gray-100"
        >
            <Minus size={18} />
        </button>

        <div className="w-16 text-center font-semibold">
            {quantity}
        </div>

        <button
            onClick={() =>
                setQuantity(quantity + 1)
            }
            className="p-4 hover:bg-gray-100"
        >
            <Plus size={18} />
        </button>

    </div>

</div>

      <div className="space-y-4">

    <button
        className="
            w-full
            rounded-full
            bg-amber-700
            py-4
            font-semibold
            text-white
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-amber-800
            hover:shadow-xl
        "
    >
        Add {quantity} to Cart
    </button>

    <button
        className="
            w-full
            rounded-full
            border
            py-4
            font-semibold
            transition-all
            hover:bg-white
        "
    >
        Buy Now
    </button>

</div>

    </div>
  );
}
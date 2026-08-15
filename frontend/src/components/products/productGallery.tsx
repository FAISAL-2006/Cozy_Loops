import type { Product } from "../../types/product";

type Props = {
  product: Product;
};

export default function ProductGallery({ product }: Props) {
  return (
    <div className="flex flex-col gap-4">
      <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
        <img
          src={product.image}
          alt={product.name}
          className="h-[550px] w-full object-cover"
        />
      </div>
    </div>
  );
}
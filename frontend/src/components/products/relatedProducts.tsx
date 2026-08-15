import { useEffect, useMemo, useState } from "react";

import type { Product } from "../../types/product";
import ProductCard from "../ProductCard";

type Props = {
  currentProduct: Product;
};

export default function RelatedProducts({
  currentProduct,
}: Props) {
  const [products, setProducts] = useState<Product[]>([]);
  const API_URL = import.meta.env.VITE_API_URL;
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(
          `${API_URL}/products`
        );

        const data = await response.json();

        setProducts(data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchProducts();
  }, []);

const relatedProducts = useMemo(() => {
  const sameCategory = products.filter(
    (product) =>
      product._id !== currentProduct._id &&
      product.category === currentProduct.category
  );

  if (sameCategory.length >= 4) {
    return sameCategory.slice(0, 4);
  }

  const remaining = products.filter(
    (product) =>
      product._id !== currentProduct._id &&
      product.category !== currentProduct.category
  );

  return [...sameCategory, ...remaining].slice(0, 4);
}, [products, currentProduct]);

  if (relatedProducts.length === 0) return null;

  return (
    <section className="mt-24">

      <h2
        className="mb-10 text-4xl"
        style={{
          fontFamily: "Playfair Display",
        }}
      >
        You May Also Like
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

        {relatedProducts.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            isAdmin={false}
          />
        ))}

      </div>

    </section>
  );
}
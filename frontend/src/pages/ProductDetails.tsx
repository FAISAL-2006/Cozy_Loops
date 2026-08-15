import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import type { Product } from "../types/product";

import { colors } from "../theme";

import ProductGallery from "../components/products/productGallery";
import ProductInfo from "../components/products/productInfo";
import ProductTabs from "../components/products/productTabs";
import RelatedProducts from "../components/products/relatedProducts";

export default function ProductDetails() {

    const { id } = useParams();

    const [product, setProduct] =
        useState<Product | null>(null);

    const [loading, setLoading] =
        useState(true);
    const API_URL = import.meta.env.VITE_API_URL;
    useEffect(() => {

        async function fetchProduct() {

            try {

                const response =
                    await fetch(
                        `${API_URL}/products/${id}`
                    );

                const data =
                    await response.json();

                setProduct(data);

            } catch (err) {

                console.log(err);

            } finally {

                setLoading(false);

            }

        }

        fetchProduct();

    }, [id]);

    if (loading)
        return <div>Loading...</div>;

    if (!product)
        return <div>Product not found.</div>;

    return (
  <div
    className="min-h-screen py-16"
    style={{
      background: colors.background,
    }}
  >
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2">

      <ProductGallery product={product} />

      <ProductInfo product={product} />
      <div className="mx-auto max-w-7xl px-6">
    <ProductTabs />
    
</div>
<RelatedProducts currentProduct={product} />

    </div>
  </div>
);

}
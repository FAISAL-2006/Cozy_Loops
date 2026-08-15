//import { PRODUCTS } from "../data/products";
import { useEffect, useMemo, useState } from "react";
import { useOutletContext } from "react-router-dom";

import type { Product } from "../types/product";

import ProductCard from "../components/ProductCard";
import ProductsHero from "../components/products/productHero";
import ProductsToolbar from "../components/products/productsToolBar";

import { colors } from "../theme";

type OutletContextType = {
  searchTerm: string;
};


export default function Products() {
  const { searchTerm } = useOutletContext<OutletContextType>();

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("name-asc");

  const role = localStorage.getItem("role");

  const API_URL = import.meta.env.VITE_API_URL;
  useEffect(() => {

    setLoading(true);

  async function fetchProducts() {

        try {


            const response = await fetch(`${API_URL}/products`);

            const data = await response.json();

            
            setProducts(data);
            setLoading(false);

        } catch (error) {
            setLoading(false);
            console.log(error);

        }

    }

    fetchProducts();

  }, []);

 const normalizedSearch = searchTerm.toLowerCase();

const categories = useMemo(() => {
  return [...new Set(products.map((p) => p.category))];
}, [products]);

const filterCategories = ["All", ...categories];

const filteredProducts = useMemo(() => {
  let data = [...products];

  if (selectedCategory !== "All") {
    data = data.filter(
      (product) => product.category === selectedCategory
    );
  }

  data = data.filter((product) =>
    product.name.toLowerCase().includes(normalizedSearch)
  );

  switch (sortOption) {
    case "name-asc":
      data.sort((a, b) => a.name.localeCompare(b.name));
      break;

    case "name-desc":
      data.sort((a, b) => b.name.localeCompare(a.name));
      break;

    case "price-asc":
      data.sort((a, b) => a.price - b.price);
      break;

    case "price-desc":
      data.sort((a, b) => b.price - a.price);
      break;
  }

  return data;
}, [
  products,
  selectedCategory,
  normalizedSearch,
  sortOption,
]);
  return (
    <div
    className="min-h-screen pb-20"
    style={{
      background: colors.background,
    }}
  >
      <ProductsHero totalProducts={products.length} />
      <div className="mx-auto mt-12 max-w-7xl px-6 space-y-12">
      
      <ProductsToolbar
  categories={filterCategories}
  selectedCategory={selectedCategory}
  onSelect={setSelectedCategory}
  sortOption={sortOption}
  setSortOption={setSortOption}
  productCount={products.length}
  isAdmin={role === "admin"}
/>

      
      {loading ? (
  <div className="py-24 text-center">
    Loading products...
  </div>
) : filteredProducts.length === 0 ? (
  <div className="py-24 text-center">
    <h2
      className="text-3xl"
      style={{
        fontFamily: "Playfair Display",
        color: colors.text,
      }}
    >
      No products found
    </h2>

    <p
      className="mt-3"
      style={{ color: colors.textSecondary }}
    >
      Try changing your search or category.
    </p>
  </div>
) : (
  <section>

    <div className="mb-10">

      <p
        className="uppercase tracking-[0.3em] text-xs"
        style={{ color: colors.primary }}
      >
        COLLECTION
      </p>

      <h2
        className="mt-2 text-4xl"
        style={{
          fontFamily: "Playfair Display",
          color: colors.text,
        }}
      >
        {selectedCategory === "All"
          ? "All Products"
          : selectedCategory}
      </h2>

    </div>

    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
        gap-10
      "
    >
      {filteredProducts.map((product) => (
        <ProductCard
          key={product._id}
          product={product}
          isAdmin={role === "admin"}
        />
      ))}
    </div>

  </section>
)}
    </div>
    </div>
  );
}

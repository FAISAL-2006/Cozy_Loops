import ProductCard from "../ProductCard";
import SectionTitle from "../ui/sectionTile";
import { products } from "../../data/products";

const FeaturedProducts = () => {
  return (
    <section className="bg-[#FAF7F3] py-24">

      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          title="Featured Collection"
          subtitle="Handpicked crochet treasures loved by our customers."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {products.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              isAdmin={false}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default FeaturedProducts;
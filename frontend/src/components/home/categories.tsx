import CategoryCard from "./categoryCard";
import { categories } from "../../data/categories";
import SectionTitle from "../ui/sectionTile";

const Categories = () => {
  return (
    <section className="bg-[#FAF7F3] py-24">

      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
  title="Shop by Category"
  subtitle="Find the perfect handmade treasure for every occasion."
/>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default Categories;
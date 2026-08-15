import type { Category } from "../../data/categories";
import { useNavigate } from "react-router-dom";

interface Props {
  category: Category;
}

const CategoryCard = ({ category }: Props) => {
  const navigate=useNavigate();
  return (
    <div
      className="
      group
      overflow-hidden
      rounded-3xl
      bg-white
      shadow-md
      transition-all
      duration-300
      hover:-translate-y-2
      hover:shadow-xl
      cursor-pointer
      "
    >
      <div className="overflow-hidden">
        <img
          src={category.image}
          alt={category.title}
          className="
          h-52
          w-full
          object-cover
          transition-transform
          duration-500
          group-hover:scale-110
          "
        />
      </div>

      <div className="p-5 text-center">

        <h3 className="text-2xl font-semibold text-[#3B2C25]">
          {category.title}
        </h3>

        <button
          className="
          mt-4
          rounded-full
          bg-[#8B5E3C]
          px-6
          py-2
          text-white
          transition
          hover:bg-[#70492B]
          "
        onClick={()=>navigate("\products")}>
          Explore
        </button>

      </div>
    </div>
  );
};

export default CategoryCard;
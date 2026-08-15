import CategoryChips from "../categoryChips";
import SortDropdown from "../dropdownpro";
import { useNavigate } from "react-router-dom";
import { colors } from "../../theme";
import type { Dispatch, SetStateAction } from "react";

type Props = {
  categories: string[];
  selectedCategory: string;
  onSelect: (category: string) => void;

  sortOption: string;
  setSortOption: Dispatch<SetStateAction<string>>;

  productCount: number;
  isAdmin: boolean;
};

export default function ProductsToolbar({
  categories,
  selectedCategory,
  onSelect,
  sortOption,
  setSortOption,
  productCount,
  isAdmin,
}: Props) {
  const navigate = useNavigate();

  return (
    <div
      className="
rounded-[32px]
border
p-7
shadow-sm
top-24
z-20
"
      style={{
        background: colors.white,
        borderColor: colors.border,
      }}
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        
        {/* Categories */}
        <CategoryChips
          categories={categories}
          selectedCategory={selectedCategory}
          onSelect={onSelect}
        />

        {/* Right Side */}
        <div className="flex flex-wrap items-center gap-5">

          <span
    className="font-semibold"
    style={{
        color: colors.primary
    }}
>
    Showing {productCount} handmade products
</span>

          <SortDropdown
            sortOption={sortOption}
            setSortOption={setSortOption}
          />

          {isAdmin && (
            <button
              onClick={() => navigate("/admin/addproducts")}
              className="rounded-full px-5 py-3 text-white transition hover:scale-105"
              style={{
                background: colors.primary,
              }}
            >
              + Add Product
            </button>
          )}

        </div>
      </div>
    </div>
  );
}

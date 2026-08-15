import { colors } from "../theme";

type Props = {
  categories: string[];
  selectedCategory: string;
  onSelect: (category: string) => void;
};

export default function CategoryChips({
  categories,
  selectedCategory,
  onSelect,
}: Props) {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => {
        const isSelected = selectedCategory === category;

        return (
          <button
            key={category}
            onClick={() => onSelect(category)}
            className="
              rounded-full
              px-5
              py-2.5
              text-sm
              font-medium
              transition-all
              duration-300
              hover:-translate-y-0.5
            "
            style={{
              backgroundColor: isSelected
                ? colors.primary
                : colors.background,
              color: isSelected
                ? colors.white
                : colors.text,
              border: `1px solid ${
                isSelected
                  ? colors.primary
                  : colors.border
              }`,
            }}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
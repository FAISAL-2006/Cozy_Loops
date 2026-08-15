import { colors } from "../theme";

type Props = {
  sortOption: string;
  setSortOption: (value: string) => void;
};

export default function SortDropdown({ sortOption, setSortOption }: Props) {
  return (
    <div className="relative">
      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        className="
          appearance-none
          rounded-full
          px-5
          pr-12
          py-3
          font-medium
          cursor-pointer
          outline-none
          transition-all
          duration-200
          hover:shadow-sm
          focus:ring-2
        "
        style={{
          background: colors.white,
          color: colors.text,
          border: `1px solid ${colors.border}`,
        }}
      >
        <option value="name-asc">A → Z</option>
        <option value="name-desc">Z → A</option>
        <option value="price-asc">Price ↑</option>
        <option value="price-desc">Price ↓</option>
      </select>

      <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-gray-500">
        ▼
      </span>
    </div>
  );
}

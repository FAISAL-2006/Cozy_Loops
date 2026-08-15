import { colors } from "../../theme";

type Props = {
  totalProducts: number;
};

export default function ProductsHero({ totalProducts }: Props) {
  return (
    <section
      className="rounded-[40px] px-8 py-20 text-center"
      style={{
        background:
          "linear-gradient(135deg,#FAF7F2 0%,#FFFDFB 100%)",
      }}
    >
      <p
        className="text-sm uppercase tracking-[0.35em]"
        style={{ color: colors.primary }}
      >
        SHOP COLLECTION
      </p>

      <h1
        className="mt-5 text-6xl font-semibold"
        style={{
          fontFamily: "Playfair Display",
          color: colors.text,
        }}
      >
        Find Handmade Treasures
      </h1>

      <p
        className="mx-auto mt-6 max-w-2xl text-lg leading-8"
        style={{ color: colors.textSecondary }}
      >
        Explore our handcrafted crochet collection,
        lovingly created to bring warmth, comfort,
        and joy into your everyday life.
      </p>

      <div
        className="mx-auto mt-10 inline-flex rounded-full px-6 py-3"
        style={{
          background: colors.white,
          border: `1px solid ${colors.border}`,
        }}
      >
        <span
          className="font-medium"
          style={{ color: colors.primary }}
        >
          {totalProducts} Handmade Products
        </span>
      </div>
    </section>
  );
}
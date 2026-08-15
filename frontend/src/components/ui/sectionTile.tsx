interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <div className="mb-14 text-center">
      <p className="mb-3 text-[#8B5E3C] tracking-[0.3em] uppercase text-sm">
        ✿ Cozy Loops
      </p>

      <h2
        className="text-5xl text-[#3B2C25]"
        style={{ fontFamily: "Playfair Display" }}
      >
        {title}
      </h2>

      {subtitle && (
        <p className="mx-auto mt-4 max-w-xl text-gray-600">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
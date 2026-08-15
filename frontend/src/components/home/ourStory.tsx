import story from "../../assets/story/crochet-story.jpg";
import { colors } from "../../theme";
import { Link } from "react-router-dom";

export default function OurStory() {
  return (
    <section
      className="py-24"
      style={{ background: colors.background }}
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* Image */}

        <div>
          <img
            src={story}
            alt="Crochet Story"
            className="
              h-[500px]
              w-full
              rounded-[36px]
              object-cover
              shadow-xl
            "
          />
        </div>

        {/* Content */}

        <div>

          <p
            className="text-sm uppercase tracking-[0.35em]"
            style={{ color: colors.primary }}
          >
            OUR STORY
          </p>

          <h2
            className="mt-5 text-5xl leading-tight"
            style={{
              color: colors.text,
              fontFamily: "Playfair Display",
            }}
          >
            Behind Every Stitch
          </h2>

          <p
            className="mt-8 text-lg leading-8"
            style={{ color: colors.textSecondary }}
          >
            Every Cozy Loops creation begins with a single strand
            of yarn and a lot of patience. Every plushie, flower,
            and bag is handmade with attention to detail, making
            each piece truly one of a kind.
          </p>

          <p
            className="mt-6 text-lg leading-8"
            style={{ color: colors.textSecondary }}
          >
            We believe handmade gifts carry emotions that
            factory-made products never can.
          </p>

          <Link
  to="/our-story"
  className="
    inline-block
    mt-10
    rounded-full
    bg-[#8B5E3C]
    px-10
    py-4
    font-semibold
    text-white
    transition-all
    duration-300
    hover:-translate-y-1
    hover:bg-[#70492B]
    hover:shadow-xl
  "
>
  Read Our Story
</Link>
        </div>

      </div>
    </section>
  );
}
import custom from "../../assets/custom/custom-order.png";
import { Link } from "react-router-dom";

export default function CustomOrder() {
  return (
    <section className="bg-[#FAF7F3] py-24">
      <div
        className="
        relative
        mx-auto
        max-w-7xl
        overflow-hidden
        rounded-[48px]
        bg-[#F3E6DA]
        px-8
        py-16
        shadow-xl
        lg:px-16
        "
      >
        {/* Decorative Background Blobs */}

        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/20 blur-3xl" />

        <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-[#E9D5C3] blur-3xl" />

        <div className="relative grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <p className="text-sm uppercase tracking-[0.35em] text-[#8B5E3C]">
              ✿ Custom Crochet
            </p>

            <h2
              className="mt-5 text-5xl leading-tight text-[#3B2C25] lg:text-6xl"
              style={{ fontFamily: "Playfair Display" }}
            >
              Every Stitch,
              <br />
              Made Just
              <br />
              For You.
            </h2>

            <p className="mt-8 max-w-lg leading-8 text-gray-600">
              Share your idea, choose your colors, and let us
              handcraft a crochet creation that's uniquely yours.
              Perfect for birthdays, anniversaries, baby showers,
              or meaningful gifts.
            </p>

            {/* Feature Pills */}

            <div className="mt-8 flex flex-wrap gap-3">

              <div className="rounded-full bg-white px-4 py-2 shadow-sm">
                🎨 Choose Colors
              </div>

              <div className="rounded-full bg-white px-4 py-2 shadow-sm">
                📸 Upload Reference
              </div>

              <div className="rounded-full bg-white px-4 py-2 shadow-sm">
                🧶 Handmade
              </div>

            </div>

            <Link
  to="/custom-order"
  className="
    inline-block
    mt-10
    rounded-full
    bg-[#8B5E3C]
    px-10
    py-4
    text-lg
    font-semibold
    text-white
    shadow-lg
    transition-all
    duration-300
    hover:-translate-y-1
    hover:bg-[#70492B]
    hover:shadow-xl
  "
>
  Start Custom Order
</Link>

          </div>

          {/* RIGHT */}

          <div className="flex justify-center">

            <img
              src={custom}
              alt="Custom Crochet"
              className="
              w-[450px]
              rounded-3xl
              object-cover
              shadow-2xl
              "
            />

          </div>

        </div>

        {/* Stats */}

        <div className="mt-16 grid grid-cols-2 gap-5 md:grid-cols-4">

          <div className="rounded-2xl bg-white/70 p-6 text-center shadow-sm backdrop-blur">

            <h3 className="text-3xl font-bold text-[#8B5E3C]">
              500+
            </h3>

            <p className="mt-2 text-gray-600">
              Happy Customers
            </p>

          </div>

          <div className="rounded-2xl bg-white/70 p-6 text-center shadow-sm backdrop-blur">

            <h3 className="text-3xl font-bold text-[#8B5E3C]">
              1200+
            </h3>

            <p className="mt-2 text-gray-600">
              Handmade Products
            </p>

          </div>

          <div className="rounded-2xl bg-white/70 p-6 text-center shadow-sm backdrop-blur">

            <h3 className="text-3xl font-bold text-[#8B5E3C]">
              4.9★
            </h3>

            <p className="mt-2 text-gray-600">
              Customer Rating
            </p>

          </div>

          <div className="rounded-2xl bg-white/70 p-6 text-center shadow-sm backdrop-blur">

            <h3 className="text-3xl font-bold text-[#8B5E3C]">
              48h
            </h3>

            <p className="mt-2 text-gray-600">
              Response Time
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
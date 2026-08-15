import {
  Heart,
  Leaf,
  Package,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "100% Handmade",
    description:
      "Every crochet piece is carefully handcrafted with attention to every stitch.",
  },
  {
    icon: Heart,
    title: "Made with Love",
    description:
      "Every order is created with passion to make your moments even more special.",
  },
  {
    icon: Package,
    title: "Fast & Secure Delivery",
    description:
      "Beautifully packed and delivered safely right to your doorstep.",
  },
  {
    icon: Leaf,
    title: "Eco Friendly",
    description:
      "We use premium quality yarns that are durable and environmentally friendly.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-[#FAF7F3] py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="uppercase tracking-[0.3em] text-[#8B5E3C] text-sm">
            WHY CHOOSE US
          </p>

          <h2
            className="mt-4 text-5xl text-[#3B2C25]"
            style={{ fontFamily: "Playfair Display" }}
          >
            Why Choose Cozy Loops?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
            We don't just crochet products.
            We create handmade memories you'll cherish forever.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => {

            const Icon = feature.icon;

            return (

              <div
                key={feature.title}
                className="
                rounded-3xl
                bg-white
                p-8
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
                "
              >

                <div
                  className="
                  mb-6
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[#F7EFE8]
                  "
                >
                  <Icon
                    size={32}
                    className="text-[#8B5E3C]"
                  />
                </div>

                <h3 className="text-2xl font-semibold text-[#3B2C25]">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {feature.description}
                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}
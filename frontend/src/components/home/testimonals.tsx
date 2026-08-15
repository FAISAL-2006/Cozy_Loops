import { testimonials } from "../../data/testimonals";
import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="bg-[#FAF7F2] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="uppercase tracking-[0.3em] text-[#8B5E3C]">
            TESTIMONIALS
          </p>

          <h2
            className="mt-4 text-5xl text-[#3B2C25]"
            style={{ fontFamily: "Playfair Display" }}
          >
            What Our Customers Say
          </h2>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {testimonials.map((item) => (

            <div
              key={item.id}
              className="
              rounded-3xl
              bg-white
              p-8
              shadow-sm
              hover:shadow-xl
              transition-all
              hover:-translate-y-2
              "
            >

              <div className="flex gap-1 text-yellow-400">

                <Star fill="currentColor" size={18}/>
                <Star fill="currentColor" size={18}/>
                <Star fill="currentColor" size={18}/>
                <Star fill="currentColor" size={18}/>
                <Star fill="currentColor" size={18}/>

              </div>

              <p className="mt-6 leading-8 text-gray-600">
                "{item.review}"
              </p>

              <div className="mt-8 flex items-center gap-4">

                <img
                  src={item.image}
                  className="h-14 w-14 rounded-full object-cover"
                />

                <div>

                  <h3 className="font-semibold">
                    {item.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    Verified Buyer
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}
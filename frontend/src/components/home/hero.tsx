import { Heart, Leaf, ShieldCheck, Truck } from "lucide-react";
import { Link } from "react-router-dom"; // Imported Link for navigation

import teddy from "../../assets/hero/hero.webp";

const Hero = () => {
  return (
    <section
      className="bg-[#FAF7F3] rounded-t-[48px] overflow-hidden"
      style={{
        background: "radial-gradient(circle at top right,#fff,#faf7f3,#f7efe8)",
      }}
      
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[88vh]">
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 shadow-md">
              <span>🧶</span>
              <span className="text-sm font-medium text-[#8B5E3C]">
                Handmade Since 2025
              </span>
            </div>

            <h1
              className="mt-6 text-5xl lg:text-7xl leading-tight text-[#3B2C25] font-semibold tracking-tight"
              style={{ fontFamily: "Playfair Display" }}
            >
              Handcrafted
              <br />
              Crochet
              <br />
              Made with Love
            </h1>

            <p className="mt-8 max-w-md text-lg text-gray-600 leading-8">
              Handcrafted crochet treasures designed to bring warmth, joy, and
              personality into your everyday life. From adorable plushies to
              elegant bags, every stitch is made with love.
            </p>

            <div className="flex gap-4 mt-10">
              {/* Shop Collection Button */}
              <Link
                to="/products"
                className="
px-8
py-4
rounded-full
bg-[#8B5E3C]
text-white
font-semibold
shadow-lg
transition-all
duration-300
hover:bg-[#70492B]
hover:-translate-y-1
hover:shadow-xl
"
              >
                Shop Collection
              </Link>

              {/* Custom Order Button */}
              <Link
                to="/custom-order"
                className="
px-8
py-4
rounded-full
border-2
border-[#8B5E3C]
text-[#8B5E3C]
font-semibold
transition-all
duration-300
hover:bg-[#8B5E3C]
hover:text-white
hover:-translate-y-1
"
              >
                Custom Order
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-14">
              <div className="flex items-center gap-3">
                <Leaf size={20} className="text-[#8B5E3C]" />
                <span>Eco Friendly</span>
              </div>
              <div className="flex items-center gap-3">
                <Heart size={20} className="text-[#8B5E3C]" />
                <span>Made with Love</span>
              </div>
              <div className="flex items-center gap-3">
                <Truck size={20} className="text-[#8B5E3C]" />
                <span>Fast Delivery</span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck size={20} className="text-[#8B5E3C]" />
                <span>Secure Checkout</span>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center">
            <div
              className="
absolute
w-[520px]
h-[520px]
bg-[#F2E7DE]
rounded-[45%]
blur-3xl
"
            />
            <img
              src={teddy}
              alt="Crochet Teddy"
              className="relative w-[500px] object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

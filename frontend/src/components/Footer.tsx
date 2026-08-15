import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { FaFacebook, FaInstagram } from 'react-icons/fa';

import { Link } from "react-router-dom";

export default function Footer() {
  return (
<footer className="bg-[#4A342A] text-[#F8F5F2] rounded-b-[48px] overflow-hidden">
        <div className="mx-auto max-w-4xl px-6 pt-20 pb-16 text-center">

  <h2
    className="text-5xl text-[#FFF7F1]"
    style={{ fontFamily: "Playfair Display" }}
  >
    Crafted with Love
  </h2>

  <p className="mt-6 text-lg leading-8 text-[#DCCFC7]">
    Every handmade crochet piece is carefully crafted
    to bring warmth, comfort and happiness into your home.
  </p>

  <Link
  to="/products"
  className="
    inline-block
    mt-10
    rounded-full
    bg-[#C08457]
    px-8
    py-4
    font-semibold
    text-white
    transition
    hover:scale-105
    hover:bg-[#A86E46]
  "
>
  Shop Collection
</Link>

</div>

      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-4">

          {/* Brand */}

          <div>

            <h2
              className="text-5xl tracking-wide"
  style={{ fontFamily: "Playfair Display" }}
            >
              Cozy Loops 🧶
            </h2>

            <p className="mt-4 leading-7 text-[#D7CCC8]">
              Handmade crochet creations crafted with
              love, bringing warmth and happiness into
              every home.
            </p>

            <div className="mt-8 flex gap-4">

  {[
    {
      icon: FaInstagram,
      link: "https://www.instagram.com/vm_yarncarfts",
    },
    {
      icon: FaFacebook,
      link: "https://www.facebook.com/your_username",
    },
  ].map(({ icon: Icon, link }, index) => (

    <a
      key={index}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-full
        border
        border-[#6C564A]
        transition-all
        duration-300
        hover:bg-[#C08457]
        hover:-translate-y-1
      "
    >
      <Icon size={18} />
    </a>

  ))}

</div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="mb-5 text-xl font-semibold">
              Quick Links
            </h3>

            <div className="space-y-3 text-[#D7CCC8]">

              <Link to="/">Home</Link><br />

              <Link to="/products">Products</Link><br />

              <Link to="/cart">Cart</Link><br />

              <Link to="/orders">Orders</Link>

            </div>

          </div>

          {/* Categories */}

          <div>

            <h3 className="mb-5 text-xl font-semibold">
              Categories
            </h3>

            <div className="space-y-3 text-[#D7CCC8]">

              <p>Plushies</p>

              <p>Flowers</p>

              <p>Bags</p>

              <p>Keychains</p>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-5 text-xl font-semibold">
              Contact
            </h3>

            <div className="space-y-4 text-[#D7CCC8]">

              <div className="flex items-center gap-3">

                <Mail size={18} />

                <span>hello@cozyloops.com</span>

              </div>

              <div className="flex items-center gap-3">

                <Phone size={18} />

                <span>+91 XXXXX XXXXX</span>

              </div>

              <div className="flex items-center gap-3">

                <MapPin size={18} />

                <span>India</span>

              </div>

            </div>

          </div>

        </div>

        <div className="mt-16 border-t border-[#6C564A] pt-8 flex flex-col items-center justify-between gap-4 md:flex-row">

  <p className="text-[#DCCFC7]">
    © 2026 Cozy Loops. Handmade with care.
  </p>

  <p className="text-[#DCCFC7]">
    Made with ❤️ in India
  </p>

</div>

      </div>

    </footer>
  );
}
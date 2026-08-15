// import DiscountCard from "../components/HomePageCard1"
// import {DISCOUNTS} from "../data/discounts"
// import SpecialCard from "../components/HomePageCard2"
// import {HomeProducts} from "../data/HomeProducts"
//display discounts, whats special today , new brands , fresh fruits and veggies
//23/06/2026-testing discount card layout 
// export default function Home() {
 
//   return (
//     <div className="h-screen bg-cover bg-center">
//       <h1 className="text-white text-5xl">
//         Handmade with Love, Crafted for You.
//       </h1>
//       {/* <div className="
//               grid
//               grid-cols-1
//               md:grid-cols-2
//               lg:grid-cols-3
//               xl:grid-cols-4
//               gap-8
//             ">
//         {DISCOUNTS.map((discounts) => (
//           <DiscountCard key={discounts.id} discount={discounts} />
//         ))}
//       </div> */}
//       {/* <div className="
//               grid
//               grid-cols-1
//               md:grid-cols-2
//               lg:grid-cols-3
//               xl:grid-cols-4
//               gap-8
//             ">
//         {HomeProducts.map((products) => (
//           <SpecialCard key={products.id} Products={products} />
//         ))}
//       </div> */}
//     </div>
//   )
// }


import Hero from "../components/home/hero";
import Categories from "../components/home/categories";
import FeaturedProducts from "../components/home/featuredProducts";
import CustomOrder from "../components/home/customOrders";
import WhyChoose from "../components/home/whyChoose";
import Testimonials from "../components/home/testimonals";
import OurStory from "../components/home/ourStory";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <CustomOrder />
      <WhyChoose />
      <Testimonials />
      <OurStory />
      <Footer />
    </>
  );
};

export default Home;
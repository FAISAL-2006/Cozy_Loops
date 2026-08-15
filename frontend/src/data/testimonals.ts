export interface Testimonial {
  id: number;
  name: string;
  image: string;
  review: string;
}

import person1 from "../assets/testimonals/person1.png";
import person2 from "../assets/testimonals/person2.png";
import person3 from "../assets/testimonals/person3.png";

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Priya Sharma",
    image: person1,
    review:
      "Absolutely loved the crochet teddy. The quality exceeded my expectations!",
  },
  {
    id: 2,
    name: "Ananya",
    image: person2,
    review:
      "Beautiful handmade products. Every stitch feels premium.",
  },
  {
    id: 3,
    name: "Rahul",
    image: person3,
    review:
      "Ordered a custom gift for my girlfriend. She loved it!",
  },
];
import plushie from "../assets/categories/plushie.jpg";
import flowers from "../assets/categories/flower.jpg";
import bags from "../assets/categories/bag.webp";
import gifts from "../assets/categories/gift.jpg";

export interface Category {
  id: number;
  title: string;
  image: string;
}

export const categories: Category[] = [
  {
    id: 1,
    title: "Plushies",
    image: plushie,
  },
  {
    id: 2,
    title: "Flowers",
    image: flowers,
  },
  {
    id: 3,
    title: "Bags",
    image: bags,
  },
  {
    id: 4,
    title: "Gifts",
    image: gifts,
  },
];
import teddy from "../assets/products/teddy.webp";
import bunny from "../assets/products/bunny.jpg";
import flower from "../assets/products/flower.jpg";
import bag from "../assets/products/bag.webp";

export interface Product {
  _id: string;
  name: string;
  category: string;
  quantity: number;
  inStock: boolean;
  image: string;
  price: number;
}

export const products: Product[] = [
  {
    _id: "1",
    name: "Crochet Teddy",
    category: "Plushies",
    quantity: 20,
    inStock: true,
    image: teddy,
    price: 899,
  },
  {
    _id: "2",
    name: "Cute Bunny",
    category: "Plushies",
    quantity: 15,
    inStock: true,
    image: bunny,
    price: 799,
  },
  {
    _id: "3",
    name: "Sunflower Pot",
    category: "Decor",
    quantity: 25,
    inStock: true,
    image: flower,
    price: 699,
  },
  {
    _id: "4",
    name: "Granny Square Bag",
    category: "Accessories",
    quantity: 10,
    inStock: true,
    image: bag,
    price: 1299,
  },
];

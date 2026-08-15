import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import Orders from "../pages/Orders";
import Category from "../pages/Category";
import ProductDetails from "../pages/ProductDetails";
import Checkout from "../pages/Checkout";
import AddProduct from "../pages/Addproducts";
import EditProduct from "../pages/Editproducts";
import OrderDetails from "../pages/orderDetails";
import CustomOrder from "../pages/customOrder";
import OurStory from "../pages/ourStory";

export default function AppRoutes() {
  return (
    //just like function calling (good wiring of routes)
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="admin/addproducts" element={<AddProduct/>}/>
        <Route path="/admin/editproduct/:id" element={<EditProduct />}/>
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/categories/:categoryName" element={<Category />} />

      <Route path="/orders" element={<Orders />} />
      <Route path="/checkout" element={<Checkout/>}/>
      
     
      <Route path="/products/:productId" element={<ProductDetails />} />
      <Route path="/orders/:id" element={<OrderDetails />} />
      <Route path="/custom-order" element={<CustomOrder />} />
      <Route path="/our-story" element={<OurStory />} />
    </Routes>
  );
}

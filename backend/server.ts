//to handle post put patch etc req
import express from "express";
import cors from "cors";
//import env 
import dotenv from "dotenv";
//conncection to our db
import connectDB from "./config/db";
import loginauth from "./routes/loginauth";
import registerauth from "./routes/registerauth"
import productRoutes from "./routes/prodroute";
import cartroutes from "./routes/cartroutes";
import orderroutes from "./routes/orderroutes";
import paymentroute from "./routes/paymentroute";
import addproduct from "./routes/addproduct"
dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/auth", loginauth);
app.use("/auth", registerauth);

app.use("/products", productRoutes);
app.use("/products", addproduct);

app.use("/cart", cartroutes);
app.use("/orders", orderroutes);
app.use("/payment", paymentroute);

app.get("/", (req, res) => {
    res.send("Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
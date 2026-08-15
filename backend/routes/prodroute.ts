import { Router } from "express";
import Product from "../models/products";
import { PRODUCTS } from "../data/products";
import auth from "../middleware/auth";
import admin from "../middleware/admin";

const router = Router();

router.post("/seed", async (req, res) => {
    try {

        // Optional: clear old products
       // await Product.deleteMany({});

        for (const product of PRODUCTS) {

            const { id, image, ...rest } = product; // Ignore frontend id, this will take everything except id,image

            await new Product(rest).save();
        }

        res.status(201).json({
            success: true,
            message: "Products added successfully"
        });

    } catch (error) {

       console.log(error);

    }
});

router.get("/", async (req, res) => {

    try {

        const products = await Product.find();

        res.status(200).json(products);

    } catch (error) {

        res.status(500).json({
            success: false,
            message: "Couldn't fetch products"
        });

    }


});

router.get("/:id", async (req, res) => {
    try {

        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }

        res.status(200).json(product);

    } catch (error) {

        res.status(500).json({
            success: false,
            message: "Server Error"
        });

    }
});


router.patch("/:id", auth, admin, async (req, res) => {

    try {

        const { name, price, category, inStock } = req.body;

        const updatedProduct = await Product.findByIdAndUpdate(

            req.params.id,

            {
                name,
                price,
                category,
                inStock
            },

            {
                new: true
            }

        );

        if (!updatedProduct) {

            return res.status(404).json({
                success: false,
                message: "Product not found"
            });

        }

        res.status(200).json({

            success: true,
            message: "Product Updated Successfully",
            product: updatedProduct

        });

    } catch (error) {

        res.status(500).json({

            success: false,
            message: "Server Error"

        });

    }

});

router.delete("/:id", auth, admin, async (req, res) => {

    try {

        const deletedProduct = await Product.findByIdAndDelete(req.params.id);

        if (!deletedProduct) {

            return res.status(404).json({
                success: false,
                message: "Product not found"
            });

        }

        res.status(200).json({

            success: true,
            message: "Product deleted successfully"

        });

    } catch (error) {

        res.status(500).json({

            success: false,
            message: "Server Error"

        });

    }

});

export default router;
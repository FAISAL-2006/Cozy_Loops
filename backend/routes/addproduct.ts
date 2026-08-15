import { Router } from "express";
import multer from "multer";

import auth from "../middleware/auth";
import admin from "../middleware/admin";
import Product from "../models/products";
import cloudinary from "../config/cloudinary";

const router = Router();

// Multer temporarily keeps uploaded image in memory
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post(
    "/",
    auth,
    admin,

    // Frontend sends formData.append("image", image)
    // Multer puts that file into req.file
    upload.single("image"),

    async (req, res) => {
        try {
           
            const { name, price, category, inStock } = req.body;

            if (!req.file) {
                return res.status(400).json({
                    success: false,
                    message: "Product image is required"
                });
            }

            // Upload req.file to Cloudinary
            const result = await new Promise<any>((resolve, reject) => {

                const uploadStream = cloudinary.uploader.upload_stream(
                    {
                        folder: "supermarket-products"
                    },
                    (error, result) => {
                        if (error) {
                            reject(error);
                        } else {
                            resolve(result);
                        }
                    }
                );

                uploadStream.end(req.file!.buffer);
            });

            // Cloudinary gives us the public URL
            const imageUrl = result.secure_url;

            // Store ONLY the URL in MongoDB
            const product = new Product({
                name,
                price: Number(price),
                category,
                image: imageUrl,
                inStock: inStock === "true"
            });

            await product.save();

            console.log("Product:", product);
            console.log("Image URL:", imageUrl);

            return res.status(201).json({
                success: true,
                message: "Product Added",
                product
            });

        } catch (error) {

            console.error("Add product error:", error);

            return res.status(500).json({
                success: false,
                message: "Something went wrong"
            });
        }
    }
);

export default router;
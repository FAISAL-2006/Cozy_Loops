import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [price, setPrice] = useState<number>(0);
    const [category, setCategory] = useState("");
    const [image, setImage] = useState<File | null>(null);
    const [inStock, setInStock] = useState(true);
    const API_URL = import.meta.env.VITE_API_URL;
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {

        e.preventDefault();

        const token = localStorage.getItem("token");
        const formData = new FormData();

        formData.append("name", name);
        formData.append("price", price.toString());
        formData.append("category", category);
        formData.append("inStock", inStock.toString());

        // Add actual image file
        if (image) {
          formData.append("image", image);
        }

        const response = await fetch(
            `${API_URL}/products`,
            {
                method: "POST",
                headers: {
                    //"Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: formData
            }
        );


        const data = await response.json();

        console.log("STATUS:", response.status);
        console.log("BACKEND RESPONSE:", data);
        
        if (data.success) {

            alert("Product Added Successfully");

            navigate("/admin/products");

        }
        else {

            alert(data.message);

        }

    }

    return (

        <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto mt-10 space-y-5"
        >

            <h1 className="text-3xl font-bold">
                Add Product
            </h1>

            <input
                type="text"
                placeholder="Product Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border p-2 w-full rounded"
                required
            />

            <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="border p-2 w-full rounded"
                required
            />

            <input
                type="text"
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="border p-2 w-full rounded"
                required
            />

            <label className="flex items-center gap-2">

                <input
                    type="checkbox"
                    checked={inStock}
                    onChange={(e) => setInStock(e.target.checked)}
                />

                In Stock

            </label>

            <div>
                <label className="block mb-2 font-medium">
                   Product Image
                </label>

                <input
                   type="file"
                   accept="image/*"
                   onChange={(e) => {
                   const file = e.target.files?.[0];

                if (file) {
                   setImage(file);
                }
             }}
              required
              />
            </div>

            <button
                type="submit"
                className="
                    bg-emerald-500
                    text-white
                    px-4
                    py-2
                    rounded
                    hover:bg-emerald-600
                "
            >
                Add Product
            </button>

        </form>

    );

}
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState<number>(0);
  const [category, setCategory] = useState("");
  const [inStock, setInStock] = useState(true);
  const API_URL = import.meta.env.VITE_API_URL;
  // Fetch the existing product details
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `${API_URL}/products/${id}`
        );

        const data = await response.json();

        setName(data.name);
        setPrice(data.price);
        setCategory(data.category);
        setInStock(data.inStock);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProduct();
  }, [id]);

  // Update product
  const updateProduct = async () => {
    try {
      const response = await fetch(
        `${API_URL}/products/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            name,
            price,
            category,
            inStock,
          }),
        }
      );

      const data = await response.json();

      alert(data.message);

      if (data.success) {
        navigate("/products");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-[400px]">
        <h2 className="text-2xl font-bold text-center mb-6">
          Edit Product
        </h2>

        <input
          type="text"
          placeholder="Product Name"
          className="border w-full p-2 rounded mb-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Price"
          className="border w-full p-2 rounded mb-4"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />

        <input
          type="text"
          placeholder="Category"
          className="border w-full p-2 rounded mb-4"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <div className="flex items-center gap-2 mb-5">
          <input
            type="checkbox"
            checked={inStock}
            onChange={(e) => setInStock(e.target.checked)}
          />
          <label>In Stock</label>
        </div>

        <button
          onClick={updateProduct}
          className="bg-blue-600 hover:bg-blue-700 text-white w-full py-2 rounded"
        >
          Update Product
        </button>
      </div>
    </div>
  );
};

export default EditProduct;
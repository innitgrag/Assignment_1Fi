import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://assignment-1fi-ojot.onrender.com/api/products")
      .then(res => setProducts(res.data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-semibold mb-6">Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <Link
            key={p.slug}
            to={`/products/${p.slug}`}
            className="bg-white border rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col items-center"
          >
            <div className="w-full h-56 flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={p.imageUrl}
                alt={p.name}
                className="w-full h-full object-contain"
              />
            </div>

            <h4 className="text-lg font-medium mt-4">{p.name}</h4>
            <p className="text-green-600 font-semibold text-lg">
              ₹{p.price}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductList;

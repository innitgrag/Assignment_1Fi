import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductPage() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);

  useEffect(() => {
    axios.get(`https://assignment-1fi-ojot.onrender.com/api/products/${slug}`)
      .then(res => {
        setProduct(res.data);
        setSelectedVariant(res.data.variants[0]);
      });
  }, [slug]);

  if (!product) return <p className="p-6">Loading...</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      
      {/* PRODUCT SECTION */}
      <div className="flex flex-col md:flex-row gap-10">
        
        {/* IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-full max-w-sm h-96 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* INFO */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-semibold">{product.name}</h2>

          <p className="text-gray-500 mt-2">
            MRP: <span className="line-through">₹{product.mrp}</span>
          </p>

          <p className="mt-1 text-2xl font-bold text-green-600">
            ₹{product.price + (selectedVariant?.extraPrice || 0)}
          </p>

          {/* VARIANTS */}
          <h3 className="text-xl font-medium mt-6 mb-2">Variants</h3>
          <div className="flex flex-wrap gap-3">
            {product.variants.map((v) => (
              <button
                key={v.name}
                className={`px-4 py-2 rounded-lg border text-sm ${
                  selectedVariant?.name === v.name
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
                onClick={() => {
                  setSelectedVariant(v);
                  setSelectedPlan(null);
                }}
              >
                {v.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* EMI PLANS */}
      <h3 className="text-xl font-semibold mt-10 mb-4">EMI Plans</h3>

      <div className="space-y-3">
        {selectedVariant.emiPlans.map((plan, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedPlan(plan)}
            className={`p-4 rounded-xl border shadow-sm cursor-pointer transition ${
              selectedPlan === plan
                ? "bg-blue-50 border-blue-400"
                : "bg-white"
            }`}
          >
            <p className="text-lg font-bold">₹{plan.monthly}/month</p>
            <p>Tenure: {plan.tenureMonths} months</p>
            <p>Interest: {plan.interestRate}%</p>
            {plan.cashback && (
              <p className="text-green-600 font-semibold">
                Cashback: ₹{plan.cashback}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* PROCEED BUTTON */}
      {selectedPlan && (
        <button
          className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
          onClick={() => alert("Proceeding...")}
        >
          Proceed
        </button>
      )}

    </div>
  );
}

export default ProductPage;

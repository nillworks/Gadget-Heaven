import { X } from "lucide-react";
import Image from "next/image";

const ProductCards = () => {
  const products = [
    {
      id: 1,
      name: "Samsung Galaxy S23 Ultra",
      description:
        "Ultra-slim, high-performance laptop with 13.4-inch Infinity Edge display.",
      price: "999.99",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen space-y-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex items-center justify-between bg-white p-6 rounded-2xl shadow-sm border border-gray-100 max-w-4xl mx-auto relative group"
        >
          <div className="flex items-center gap-6">
            <div className="w-32 h-20 bg-gray-200 rounded-lg shrink-0">
              {/* <Image
                width={30}
                height={30}
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover rounded-lg"
              /> */}
            </div>

            <div className="space-y-1">
              <h3 className="text-xl font-bold text-gray-900">
                {product.name}
              </h3>
              <p className="text-gray-500 text-sm max-w-md">
                {product.description}
              </p>
              <p className="text-gray-900 font-semibold pt-1">
                Price: $ {product.price}
              </p>
            </div>
          </div>

          <button className="text-red-400 hover:text-red-600 transition-colors p-2">
            <X size={28} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;

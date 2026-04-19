import Image from 'next/image';

const ExploreCard = ({ product }) => {
  const { product_title, price, product_image } = product || {};

  return (
    <div className="w-full max-w-xs bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition">
      {/* Image */}
      <div className="relative bg-[#D9D9D9] rounded-xl h-36 overflow-hidden">
        {product_image ? (
          <Image
            src={product_image}
            alt="product"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover rounded-xl"
          />
        ) : (
          <span className="text-gray-500 text-sm flex items-center justify-center h-full">
            No Image
          </span>
        )}
      </div>

      {/* Content */}
      <div className="mt-4 space-y-1">
        <h2 className="text-lg font-semibold text-gray-800">
          {product_title || 'Product Name'}
        </h2>
        <p className="text-gray-500">Price: ${price || '00.00k'}</p>
      </div>

      {/* Button */}
      <button className="mt-4 border border-purple-500 text-purple-600 px-4 py-2 rounded-full hover:bg-purple-500 hover:text-white duration-300 transition w-full cursor-pointer">
        View Details
      </button>
    </div>
  );
};

export default ExploreCard;

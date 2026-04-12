import Image from 'next/image';

const ExploreCard = ({ product }) => {
  const { name, price, image } = product || {};

  return (
    <div className="w-full max-w-xs bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition">
      {/* Image */}
      <div className="bg-[#D9D9D9] rounded-xl h-36 flex items-center justify-center overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={name}
            width={200}
            height={150}
            className="object-cover"
          />
        ) : (
          <span className="text-gray-500 text-sm">No Image</span>
        )}
      </div>

      {/* Content */}
      <div className="mt-4 space-y-1">
        <h2 className="text-lg font-semibold text-gray-800">
          {name || 'Product Name'}
        </h2>
        <p className="text-gray-500">Price: {price || '00.00k'}</p>
      </div>

      {/* Button */}
      <button className="mt-4 border border-purple-500 text-purple-600 px-4 py-2 rounded-full hover:bg-purple-500 hover:text-white duration-300 transition w-full cursor-pointer">
        View Details
      </button>
    </div>
  );
};

export default ExploreCard;

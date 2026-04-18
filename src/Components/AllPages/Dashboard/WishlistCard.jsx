const WishlistCard = () => {
  return (
    <div className="w-full p-3 sm:p-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition relative">
        {/* Image */}
        <div className="w-full sm:w-28 h-40 sm:h-20 bg-gray-200 rounded-md flex-shrink-0"></div>

        {/* Content */}
        <div className="flex flex-col gap-2 flex-1 w-full">
          <h2 className="text-base sm:text-lg font-semibold text-gray-800">
            Dell XPS 13
          </h2>

          <p className="text-xs sm:text-sm text-gray-500">
            Ultra-slim, high-performance laptop with 13.4-inch InfinityEdge
            display.
          </p>

          <p className="text-sm font-medium text-gray-700">
            Price: <span className="font-semibold">$999.99</span>
          </p>

          {/* Button */}
          <button className="w-full cursor-pointer sm:w-fit px-4 py-2 text-xs sm:text-sm text-white bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full hover:opacity-90 transition">
            Add to Cart
          </button>
        </div>

        {/* Close Button */}
        <button className="absolute cursor-pointer top-2 right-2 sm:top-3 sm:right-3 w-6 h-6 flex items-center justify-center rounded-full border border-red-400 text-red-500 hover:bg-red-50 transition text-xs sm:text-sm">
          ✕
        </button>
      </div>
    </div>
  );
};

export default WishlistCard;

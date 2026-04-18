'use client';

const ExploreCuttingNavBar = ({
  category,
  isActive,
  onClick,
  handleFilterCategory,
}) => {
  return (
    <button
      onClick={() => {
        onClick();
        handleFilterCategory(category.category);
      }}
      className={`font-bold mx-auto ${
        isActive ? 'bg-primaryColor text-white' : 'text-black'
      } px-4 py-2 rounded-full max-w-max hover:bg-primaryColor hover:text-white transition duration-300 cursor-pointer`}
    >
      {category.category}
    </button>
  );
};

export default ExploreCuttingNavBar;

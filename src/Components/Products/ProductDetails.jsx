import { LucideHeart, LucideShoppingCart, LucideStar } from "lucide-react";
import React from "react";

const ProductDetails = () => {
  return (
    <div className="bg-[#ECECEC] h-screen">
      <div className="bg-[#9538E2] h-[463]">
        <div className="container mx-auto ">
          <div className="text-center pt-8 pb-8">
            <h1 className="font-bold text-white text-3xl">Product Details</h1>
            <p className="text-base text-white">
              Explore the latest gadgets that will take your experience to{" "}
              <br />
              the next level. From smart devices to the coolest accessories, we
              have it all!
            </p>
          </div>
          <div className="card lg:card-side bg-base-100 shadow-sm rounded-xl">
            <figure className="border-l-32 border-t-32 border-b-32 border-r-0 border-white rounded-2xl">
              <img
                className="w-[373px] bg-[#ECECEC] rounded-2xl"
                src="https://i.ibb.co.com/C3cvQXGp/image.png"
                alt="Album"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-[28px] text-semibold">
                Samsung Galaxy S23 Ultra
              </h2>
              <h4 className="text-xl text-semibold">Price: $999.99</h4>
              <div className="badge badge-soft badge-success">In Stock</div>
              <p className="text-base text-neutral-600 flex-none">
                Ultra-slim, high-performance laptop with 13.4-inch Infinity Edge
                display.
              </p>
              <h5 className="font-bold text-lg">Specification:</h5>
              <ul className="list-decimal ml-4 text-neutral-500">
                <li>Intel i7 11th Gen</li>
                <li>16GB RAM</li>
                <li>512GB SSD</li>
                <li>Touchscreen</li>
              </ul>
              <h5 className="font-bold text-lg mt-3 mb-3">Rating ⭐ </h5>
              <div className="flex gap-2 mb-3">
                <div className="flex">
                  <LucideStar className="fill-[#F9C004] text-[#F9C004]" />
                  <LucideStar className="fill-[#F9C004] text-[#F9C004]" />
                  <LucideStar className="fill-[#F9C004] text-[#F9C004]" />
                  <LucideStar className="fill-[#F9C004] text-[#F9C004]" />
                  <LucideStar className="text-[#F9C004]" />
                </div>
                <div>
                  <span className="badge p-2 rounded-2xl bg-neutral-200">
                    4.8
                  </span>
                </div>
              </div>
              <div className="card-actions items-center gap-2">
                <button className="btn bg-[#9538E2] text-white rounded-full">
                  Add To Cart <LucideShoppingCart />
                </button>
                <button className="btn p-2 border-2 border-neutral-200 rounded-full justify-center items-center">
                  <LucideHeart className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

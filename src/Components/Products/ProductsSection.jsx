import Link from "next/link";
import React from "react";

const ProductSection = () => {
  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold text-center">
        Explore Cutting-Edge Gadgets
      </h1>
      <div className="flex flex-col lg:flex-row mt-10 gap-6">
        <aside className="w-full lg:w-1/4 flex flex-row lg:flex-col bg-white p-5 rounded-2xl shadow gap-3 h-fit overflow-x-auto lg:overflow-visible">
          <Link href="/" className="flex-shrink-0 lg:w-full">
            <button className="btn w-full rounded-full bg-[#9538E2] text-white">
              All Products
            </button>
          </Link>
          <Link href="/" className="flex-shrink-0 lg:w-full">
            <button className="btn w-full rounded-full hover:bg-neutral-200">
              Smartphones
            </button>
          </Link>
          <Link href="/" className="flex-shrink-0 lg:w-full">
            <button className="btn w-full rounded-full hover:bg-neutral-200">
              Laptops
            </button>
          </Link>
          <Link href="/" className="flex-shrink-0 lg:w-full">
            <button className="btn w-full rounded-full hover:bg-neutral-200">
              Headphones
            </button>
          </Link>
          <Link href="/" className="flex-shrink-0 lg:w-full">
            <button className="btn w-full rounded-full hover:bg-neutral-200">
              Accessories
            </button>
          </Link>
          <Link href="/" className="flex-shrink-0 lg:w-full">
            <button className="btn w-full rounded-full hover:bg-neutral-200">
              Smartwatch
            </button>
          </Link>
        </aside>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5 bg-white rounded-2xl shadow">
          <div className="card bg-base-100 shadow-sm">
            <figure>
              <img src="https://placehold.co/600x400/png" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Card Title</h2>
              <p className="text-base text-neutral-500">Price: 99.58k</p>
              <div className="card-actions ">
                <button className="btn btn-outline border-2 border-[#9538E2] rounded-full text-[#9538E2]">
                  View Details
                </button>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 shadow-sm">
            <figure>
              <img src="https://placehold.co/600x400/png" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Card Title</h2>
              <p className="text-base text-neutral-500">Price: 99.58k</p>
              <div className="card-actions ">
                <button className="btn btn-outline border-2 border-[#9538E2] rounded-full text-[#9538E2]">
                  View Details
                </button>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 shadow-sm">
            <figure>
              <img src="https://placehold.co/600x400/png" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Card Title</h2>
              <p className="text-base text-neutral-500">Price: 99.58k</p>
              <div className="card-actions ">
                <button className="btn btn-outline border-2 border-[#9538E2] rounded-full text-[#9538E2]">
                  View Details
                </button>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 shadow-sm">
            <figure>
              <img src="https://placehold.co/600x400/png" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Card Title</h2>
              <p className="text-base text-neutral-500">Price: 99.58k</p>
              <div className="card-actions ">
                <button className="btn btn-outline border-2 border-[#9538E2] rounded-full text-[#9538E2]">
                  View Details
                </button>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 shadow-sm">
            <figure>
              <img src="https://placehold.co/600x400/png" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Card Title</h2>
              <p className="text-base text-neutral-500">Price: 99.58k</p>
              <div className="card-actions ">
                <button className="btn btn-outline border-2 border-[#9538E2] rounded-full text-[#9538E2]">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;

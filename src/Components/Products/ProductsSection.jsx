import Link from "next/link";
import React from "react";

const ProductSection = () => {
  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold text-center">
        Explore Cutting-Edge Gadgets
      </h1>
      <div className="flex mt-10 gap-4 ">
        <aside className="w-1/4 flex flex-col bg-white p-5 rounded-2xl shadow space-y-2 h-fit">
          <Link href="/">
            <button className="btn w-full rounded-full bg-[#9538E2] text-white">
              All Products
            </button>
          </Link>
          <Link href="/">
            <button className="btn w-full rounded-full">Smartphones</button>
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

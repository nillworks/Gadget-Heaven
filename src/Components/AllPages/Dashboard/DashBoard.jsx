"use client";
import React, { useState } from "react";
import ProductCards from "./ProductCard";

const DashBoard = () => {
  const [active, setActive] = useState("cart");

  // ""

  return (
    <section>
      <div className="bg-primaryColor text-white flex flex-col items-center justify-center h-80 text-center space-y-4">
        <h2 className="text-4xl font-bold">Dashboard</h2>
        <p>
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br className="hidden sm:block" /> the
          coolest accessories, we have it all!
        </p>
        <div className="flex items-center gap-5">
          <button
            onClick={() => setActive("cart")}
            className={`px-10 py-3 rounded-full font-semibold transition-all duration-300 ${
              active === "cart"
                ? "bg-white text-primaryColor shadow-lg scale-105"
                : "border-2 border-white text-white hover:bg-white/10"
            }`}
          >
            Cart
          </button>
          <button
            onClick={() => setActive("wishlist")}
            className={`px-10 py-3 rounded-full font-semibold transition-all duration-300 ${
              active === "wishlist"
                ? "bg-white text-primaryColor shadow-lg scale-105"
                : "border-2 border-white text-white hover:bg-white/10"
            }`}
          >
            Wishlist
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10">
        {active === "cart" ? (
          <div>
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold mb-4">Cart</h3>
              <div className="flex items-center gap-5">
                <h2 className="text-xl font-semibold">Total cost:{999.99}</h2>
                <div className="dropdown dropdown-center">
                  <div tabIndex={0} role="button" className="btn m-1">
                    Sort by Price ⬇
                  </div>
                  <ul
                    tabIndex="-1"
                    className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                  >
                    <li>
                      <a>Item 1</a>
                    </li>
                    <li>
                      <a>Item 2</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <ProductCards />
          </div>
        ) : (
          <div>
            <h3 className="text-2xl font-bold mb-4">Wishlist</h3>
            <div>
              <ProductCards />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DashBoard;

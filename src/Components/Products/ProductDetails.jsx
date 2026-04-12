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
            <figure className="bg-[#ECECEC]">
              <img
                className="w-[373px] p-4"
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
              <p>Click the button to listen on Spotiwhy app.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Listen</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

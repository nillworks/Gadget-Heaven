'use client';

import { useState } from 'react';
import AsideNav from './AsideNav';
import ExploreCard from './ExploreCard';

const ExploreCuttingEdgeGadgets = ({ productData }) => {
  const [data, setData] = useState(productData);

  const handleFilterCategory = value => {
    const filterProduct = productData.filter(item =>
      item.category.toLowerCase().includes(value.toLowerCase()),
    );
    setData(filterProduct);
  };

  return (
    <section className="containers">
      {/* Title */}
      <div className="text-center pb-15">
        <h2 className="text-4xl font-semibold">Explore Cutting-Edge Gadgets</h2>
      </div>

      <div className="flex flex-co sm:flex-row items-center sm:items-start justify-between gap-2">
        {/* Left aside menu */}
        <aside className="basis-0 sm:basis-[25%] space-y-4 bg-white py-2 rounded-lg border border-[#ddd] flex  mx-auto flex-col">
          <AsideNav
            category={productData}
            handleFilterCategory={handleFilterCategory}
          />
        </aside>

        {/* Card Data */}
        <div className="sm:basis-[73%] grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3">
          {data.map(item => (
            <ExploreCard key={item.product_id} product={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreCuttingEdgeGadgets;

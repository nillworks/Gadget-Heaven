'use client';

import { useState } from 'react';
import ExploreCuttingNavBar from './ExploreCuttingNavBar';

const AsideNav = ({ category, handleFilterCategory }) => {
  const [selectIndex, setSelectIndex] = useState(0);
  return (
    <div className="flex flex-col text-left gap-2">
      {category.map((item, index) => (
        <ExploreCuttingNavBar
          key={index}
          isActive={selectIndex === index}
          onClick={() => setSelectIndex(index)}
          category={item}
          handleFilterCategory={handleFilterCategory}
        />
      ))}
    </div>
  );
};

export default AsideNav;

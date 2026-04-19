import ExploreCuttingNavBar from './ExploreCuttingNavBar';

const AsideNav = ({ handleFilterCategory }) => {
  return (
    <div className="flex items-center text-left gap-2">
      <ExploreCuttingNavBar handleFilterCategory={handleFilterCategory} />
    </div>
  );
};

export default AsideNav;

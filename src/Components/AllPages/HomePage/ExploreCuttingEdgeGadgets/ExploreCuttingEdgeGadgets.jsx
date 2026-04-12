import ExploreCard from './ExploreCard';
import ExploreCuttingNavBar from './ExploreCuttingNavBar';

const ExploreCuttingEdgeGadgets = () => {
  return (
    <section className="containers">
      {/* Title */}
      <div className="text-center pb-15">
        <h2 className="text-4xl font-semibold">Explore Cutting-Edge Gadgets</h2>
      </div>

      <div className="flex flex-co sm:flex-row items-center sm:items-start justify-between gap-2">
        {/* Left aside menu */}
        <aside className="basis-0 sm:basis-[25%] space-y-4 bg-white py-2 rounded-lg border border-[#ddd] flex items-center justify-center flex-col">
          <ExploreCuttingNavBar />
        </aside>

        {/* Card Data */}
        <div className="sm:basis-[73%] grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3">
          <ExploreCard />
          <ExploreCard />
          <ExploreCard />
          <ExploreCard />
          <ExploreCard />
          <ExploreCard />
          <ExploreCard />
          <ExploreCard />
          <ExploreCard />
        </div>
      </div>
    </section>
  );
};

export default ExploreCuttingEdgeGadgets;

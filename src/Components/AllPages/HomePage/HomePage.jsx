import ExploreCuttingEdgeGadgets from './ExploreCuttingEdgeGadgets/ExploreCuttingEdgeGadgets';
import HeroSection from './HeroSection';

const HomePage = () => {
  return (
    <>
      <header>
        <HeroSection />
      </header>

      <main className="containers mx-auto px-3 py-20">
        <ExploreCuttingEdgeGadgets />
      </main>
    </>
  );
};

export default HomePage;

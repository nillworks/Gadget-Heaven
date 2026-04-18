import getShopData from '@/lib/getShopData';
import ExploreCuttingEdgeGadgets from './ExploreCuttingEdgeGadgets/ExploreCuttingEdgeGadgets';
import HeroSection from './HeroSection';

const HomePage = async () => {
  const productData = await getShopData();

  return (
    <>
      <header>
        <HeroSection />
      </header>

      <main className="containers mx-auto px-3 py-20">
        <ExploreCuttingEdgeGadgets productData={productData} />
      </main>
    </>
  );
};

export default HomePage;

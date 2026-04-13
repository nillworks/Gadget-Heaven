import ProductSection from "@/Components/Products/ProductsSection";
import ExploreCuttingEdgeGadgets from "./ExploreCuttingEdgeGadgets/ExploreCuttingEdgeGadgets";
import HeroSection from "./HeroSection";

const HomePage = () => {
  return (
    <>
      <header>
        <HeroSection />
      </header>

      <main className="containers mx-auto px-3 py-20">
        <ProductSection />
      </main>
    </>
  );
};

export default HomePage;

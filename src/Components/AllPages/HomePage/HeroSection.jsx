import HeroImage from './HeroImage';

const HeroSection = () => {
  return (
    <section className="">
      <div className="containers px-2 mx-auto  py-15 pb-36 bg-primaryColor">
        {/* Title and SubTitle */}
        <div className="text-center flex items-center justify-center flex-col gap-5">
          <h1 className="text-2xl sm:text-3xl text-white font-bold">
            Upgrade Your Tech Accessorize with{' '}
            <br className="hidden sm:block" /> Gadget Heaven Accessories
          </h1>

          <p className="text-white">
            Explore the latest gadgets that will take your experience to{' '}
            <br className="hidden sm:block" /> the next level. From smart
            devices to the coolest accessories, we have it all!
          </p>
          <button className="bg-white px-4 cursor-pointer py-1 rounded-full text-primaryColor font-bold">
            Shop Now
          </button>
        </div>
      </div>

      {/* Images */}
      <div>
        <HeroImage />
      </div>
    </section>
  );
};

export default HeroSection;

import Image from 'next/image';
import heroImage from '../../../../public/assets/banner.jpg';

const HeroImage = () => {
  return (
    <div className="flex justify-center px-4 -mt-12 sm:-mt-28 md:-mt-22 lg:-mt-30">
      <div
        className="bg-white/20 backdrop-blur-md p-2 sm:p-3 md:p-4 
      rounded-2xl sm:rounded-3xl 
      border border-white/30 shadow-xl 
      w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl"
      >
        <div className="rounded-xl sm:rounded-2xl overflow-hidden">
          <Image
            src={heroImage}
            alt="Hero Image"
            width={400}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default HeroImage;

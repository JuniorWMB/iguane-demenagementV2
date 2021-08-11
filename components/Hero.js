import Image from "next/image";
import HeroImage from "../public/box2.jpg";
const HeroBanner = () => {
  return (
    <div className="flex border h-screen overflow-hidden relative mx-10">
      <div className="object-contain object-center z-0 absolute">
        <Image src={HeroImage} alt="3 men with a box" />
      </div>
      <div className="flex justify-center z-10 absolute border border-green-700 w-96 h-96 top-60 left-20">
        <h1>Hello Text</h1>
      </div>
    </div>
  );
};

export default HeroBanner;

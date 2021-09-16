import Image from "next/image";
import HeroImage from "../public/box2.jpg";
const HeroBanner = () => {
  return (
    <div className="w-full h-96  overflow-hidden relative z-0 top-0 pb-10">
      <div className="w-full h-full absolute">
        <Image
          src={HeroImage}
          alt={"hero image"}
          width={1000}
          height={1050}
          priority
        />
      </div>
      <div className="relative ml-5   h-full flex flex-col justify-end">
        <h1 className="text-3xl font-sans text-white uppercase">Votre</h1>
        <h1 className="text-3xl font-sans text-white uppercase">spécialiste</h1>
        <h1 className="text-3xl font-sans text-white uppercase">
          déménagement.
        </h1>
        <div className="">
          <button className="text-green-700 mr-3  hover:text-white">
            Nous contacter
          </button>
          <button className="bg-green-500 hover:bg-white-700 text-white font-bold py-2 px-4 rounded">
            Votre devis
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default HeroBanner;

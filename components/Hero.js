import Image from "next/image";
import HeroImage from "../public/box2.jpg";
const HeroBanner = () => {
  return (
    <div className="flex border h-screen overflow-hidden relative">
      <div className="object-contain object-center z-0 absolute">
        <Image src={HeroImage} alt="3 men with a box" />
      </div>
      <div className="flex flex-col items-center relative w-96 h-96 top-60 left-10 p-5">
        <div className="relative z-20">
          <h1 className="text-6xl font-sans text-white z-20">Votre</h1>
          <h1 className="text-6xl font-sans text-white z-0">Spécialiste</h1>
          <h1 className="text-6xl font-sans text-white ">déménagement</h1>
        </div>

        <p>
          Déménagement pour particuliers, solutions logistiques pour les
          professionels et vente de carton et fourniture de déménagement.
        </p>
        <button className="font-space-grotesk bg-green-50 w-60 ">DEVIS</button>
      </div>
      <div className="absolute z-10  border-8 border-green-700 w-96 h-96 top-60 left-10 p-5"></div>
    </div>
  );
};

export default HeroBanner;

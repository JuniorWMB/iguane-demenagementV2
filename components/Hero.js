import Image from "next/image";
import HeroImage from "../public/box2.jpg";
const HeroBanner = () => {
  return (
    <div className="flex border h-screen overflow-hidden relative ">
      <div className="object-contain object-center z-0 absolute border-b-2 border-red-600 h-5/6 mt-10">
        <Image
          src={HeroImage}
          alt="3 men with a box"
          objectFit="cover"
          height="9700"
        />
      </div>
      <div className="flex flex-col items-center relative w-56 h-56 top-40 left-10 p-5">
        <div className="relative z-20 ">
          <h1 className="text-3xl font-sans text-white z-20">Votre</h1>
          <h1 className="text-3xl font-sans text-white z-0">Spécialiste</h1>
          <h1 className="text-3xl font-sans text-white ">déménagement</h1>
        </div>

        <p className="mb-5 text-base">
          Déménagement pour particuliers, solutions logistiques pour les
          professionels et vente de carton et fourniture de déménagement.
        </p>
        <button className="font-space-grotesk bg-green-50 w-40 ">DEVIS</button>
      </div>
      <div className="absolute z-10  border-8 border-green-700 w-56 top-40 left-10 p-5 h-96"></div>
    </div>
  );
};

export default HeroBanner;

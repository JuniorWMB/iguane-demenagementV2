import ItemsBlock from "./ItemsBlock";
import Box0 from "../public/box0.jpg";
import Box1 from "../public/box1.jpg";
import Box2 from "../public/box4.jpg";
import Box3 from "../public/box5.jpg";
import { GiShop } from "react-icons/gi";
import { ImTruck } from "react-icons/im";
import { FaBox } from "react-icons/fa";
import { SiCodesandbox } from "react-icons/si";
// import Link from "next/link";
const ChoiceBlockPageOne = () => {
  return (
    <div className="flex justify-center flex-wrap flex-col overflow-x-scroll w-full h-96  px-5 scrollbar-hide">
      {/* <div className="overflow-x-scroll flex-row justify-between flex-wrap items-center h-96 w-full bg-gray-600"> */}
      <ItemsBlock
        title="Devis"
        Icon={FaBox}
        texte=" Déménagement de particuliers ou proféssionnels, débarras, monte meuble."
        link="/devis/"
        picture={Box0}
      />
      <ItemsBlock
        title="Stockage"
        Icon={SiCodesandbox}
        texte="En rack ou au sol dans un entrepôt chauffer et sécuriser. Réception, préparation et expédition de vos marchandises."
        link="/stockage/"
        picture={Box2}
      />
      <ItemsBlock
        title="Transport"
        Icon={ImTruck}
        texte="Course urgentes, organisateur de transport, tournées régulières, affrètement."
        link="/transport/"
        picture={Box3}
      />
      <ItemsBlock
        title="Shop"
        Icon={GiShop}
        texte="Nous proposon une large sélection de produits indispensable pour votre déménagement (cartons,adhesifs,housse etc...)."
        link="/Shop/"
        picture={Box0}
      />
    </div>
  );
};

export default ChoiceBlockPageOne;

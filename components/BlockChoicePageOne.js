import socialLink from "../containlink/BlockLinkList";
import ItemsBlock from "./ItemsBlock";
import Box0 from "../public/box0.jpg";
import Box1 from "../public/box1.jpg";
import Box2 from "../public/box3.jpg";
import { ImTruck, GiShop } from "react-icons/gi";
import { FaBox } from "react-icons/fa";
import { SiCodesandbox } from "react-icons/si";
// import Link from "next/link";
const ChoiceBlockPageOne = () => {
  return (
    <>
      <div className="cursor-pointer flex justify-between items-center h-96 w-full">
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
          title="Shop"
          Icon={GiShop}
          texte="Nous proposon une large sélection de produits indispensable pour votre déménagement (cartons,adhesifs,housse etc...)."
          link="/Shop/"
          picture={Box0}
        />
      </div>
    </>
  );
};

export default ChoiceBlockPageOne;

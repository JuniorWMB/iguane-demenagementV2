// import { FaBox } from "@react-icons/all-files/fa/FaBox";
// import { SiCodesandbox } from "@react-icons/all-files/si/SiCodesandbox";
// import { GiShop } from "@react-icons/all-files/gi/GiShop";
// import { ImTruck } from "@react-icons/all-files/gi/GiShop";
import { ImTruck, GiShop } from "react-icons/gi";
import { FaBox } from "react-icons/fa";
import { SiCodesandbox } from "react-icons/si";
import Box0 from "../public/box0.jpg";
import Box1 from "../public/box1.jpg";
import Box2 from "../public/box3.jpg";
// import HeroImage from "../public/box2.jpg";

const data = [
  {
    id: 1,
    icon: <FaBox></FaBox>,
    title: "Devis",
    text: "Déménagement de particuliers ou proféssionnels, débarras, monte meuble.",
    link: "/devis/",
    picture: { Box0 },
  },
  {
    id: 2,
    icon: <ImTruck></ImTruck>,
    title: "Transport",
    text: "Course urgentes, organisateur de transport, tournées régulières, affrètement.",
    link: "/transport/",
    picture: { Box1 },
  },
  {
    id: 3,
    icon: <SiCodesandbox></SiCodesandbox>,
    title: "Stockage",
    text: "En rack ou au sol dans un entrepôt chauffer et sécuriser. Réception, préparation et expédition de vos marchandises.",
    link: "/stockage/",
    picture: { Box2 },
  },
  {
    id: 4,
    icon: <GiShop></GiShop>,
    title: "Shop",
    text: "Nous proposon une large sélection de produits indispensable pour votre déménagement (cartons,adhesifs,housse etc...).",
    link: "/shop/",
    picture: { Box0 },
  },
];

export default data;

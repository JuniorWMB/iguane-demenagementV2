import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo-iguane.png";
import {
  HomeIcon,
  PencilAltIcon,
  PhoneIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

import ItemsNav from "./ItemsNavBar";

const Navbar = () => {
  return (
    <nav
      className=" flex flex-col-reverse justify-evenly items-center
     p-5 border-b-2 shadow-md w-full"
    >
      <div className="flex items-center ">
        <Image
          src={logo}
          alt="logo iguane vert"
          width={30}
          height={40}
          quality="100"
        />
      </div>
      <div className="flex justify-evenly">
        <ItemsNav title="ACCUEIL" Icon={HomeIcon} />
        <ItemsNav title="DEVIS" Icon={PencilAltIcon} />
        <ItemsNav title="CONTACT" Icon={PhoneIcon} />
        <ItemsNav title="SHOP" Icon={ShoppingCartIcon} />
      </div>
    </nav>
  );
};

export default Navbar;

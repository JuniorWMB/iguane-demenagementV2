import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import logo from "../public/logo-iguane.png";
import {
  HomeIcon,
  PencilAltIcon,
  PhoneIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

import ItemsNav from "./ItemsNavBar";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 80) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
      // console.log("scrollY", window.scrollY);
    };
    window.addEventListener("scroll", changeBackground);
  }, []);
  return (
    // flex flex-col-reverse justify-evenly items-center
    //  p-2  w-full
    //  fixed top-0 z-20 bg-transparent
    <nav
      className={
        !navbar
          ? "transition duration-150 ease-in-out flex flex-col justify-evenly items-center p-2 w-full fixed top-0 z-20 bg-transparent"
          : "transition duration-150 ease-in-out bg-white flex flex-col justify-evenly items-center p-2 w-full fixed top-0 z-20"
      }
    >
      <div className="flex items-center ">
        <Image
          src={logo}
          alt="logo iguane vert"
          width={30}
          height={40}
          quality="100"
          priority
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

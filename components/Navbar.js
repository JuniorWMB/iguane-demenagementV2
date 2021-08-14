import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo-iguane.png";

const Navbar = () => {
  return (
    <nav className="flex justify-between  px-10   bg-white-200 border border-gray-200 h-20 ">
      <div className="flex items-center ">
        <Image
          src={logo}
          alt="logo iguane vert"
          width={50}
          height={70}
          quality="100"
          placeholder="blur"
        />
      </div>
      <div className="flex justify-between items-end w-96">
        <Link href="">
          <a>Home</a>
        </Link>
        <Link href="">
          <a>Devis</a>
        </Link>
        <Link href="">
          <a>Contact</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

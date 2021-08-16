// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";

import ChoiceBlockPageOne from "../components/BlockChoicePageOne";
import FormDem from "../components/Form";
import HeroBanner from "../components/Hero";

export default function Home() {
  return (
    <div className="p-10">
      <HeroBanner />
      <ChoiceBlockPageOne />
      <FormDem />
    </div>
  );
}

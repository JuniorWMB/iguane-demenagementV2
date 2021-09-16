import Head from "next/head";
import ChoiceBlockPageOne from "../components/BlockChoicePageOne";
import FormDem from "../components/Form";
import HeroBanner from "../components/Hero";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Accueil | Iguane Démenagement</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <HeroBanner />
      <ChoiceBlockPageOne />
      <FormDem />
    </div>
  );
}

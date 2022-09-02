import type { NextPage } from "next";
import Head from "next/head";
import LandingPage from "../components/index-page/LandingPage";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Navigation from "../components/layout/Navigation";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>NextJS Blog with Butter CMS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
        <Navigation />
        <LandingPage />
        <Footer />
      </div>
    </>
  );
};

export default Home;

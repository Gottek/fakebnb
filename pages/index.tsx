import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/layout/Header";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <div>
        <Head>
          <title>NextJS Blog with Butter CMS</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1> NextJS Blog with Butter CMS</h1>
      </div>
    </>
  );
};

export default Home;

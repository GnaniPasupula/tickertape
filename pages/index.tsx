import Header from "../components/Header";
import Topscroller from "../components/Topscroller";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Stock Analysis & Best Financial Tools for Indian Stock Market
          Evaluation | Tickertape
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Topscroller />
      <Header />
      <div className="px-20">
        <h1 className="text-white text-4xl font-semibold">
          Guide your portfolio to the stars
        </h1>
      </div>
    </div>
  );
}

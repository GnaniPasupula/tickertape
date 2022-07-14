import Header from "../components/Header";
import Topscroller from "../components/Topscroller";
import Head from "next/head";
import Banner from "../components/Banner";
import TabHeader from "../components/TabHeader";

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
      <div className="px-28">
        <p className="text-white text-5xl font-semibold pt-60">
          Guide your portfolio to the stars
        </p>
        <p className="text-deep-blue text-2xl font-semibold pt-5 pr-80">
          All the tools you need to make wise investment decisions. Join 1
          million+ smart investors
        </p>
        <Banner />
      </div>
      <TabHeader />
    </div>
  );
}

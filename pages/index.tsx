import React, { useEffect } from "react";
import Header from "../components/Header";
import Topscroller from "../components/Topscroller";
import Head from "next/head";
import Banner from "../components/Banner";
import TabHeader from "../components/TabHeader";
import {
  FilterIcon,
  SelectorIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/solid";
import Card from "../components/Card";
import { getStockData } from "./api/finnhub";
import {
  fiftyTwoWeekHigh,
  fiftyTwoWeekLow,
  dividendYield,
  peRatio,
  beta,
  yearlyReturn,
  weeklyReturn,
  companyName,
  symbol,
  industry,
  webURL,
  logo,
} from "./api/finnhub";

const renderData = async (stockName: any) => {
  await getStockData(stockName);
};

export default function Home() {
  const [stockName, setStockName] = React.useState("");

  if (stockName.length > 0) {
    renderData(stockName);
    // getStockData(stockName);
  }

  console.log("From indexpage company is " + companyName);

  return (
    <div>
      <Head>
        <title>
          Stock Analysis & Best Financial Tools for Indian Stock Market
          Evaluation | Tickertape
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Topscroller
        fiftyTwoWeekHigh={fiftyTwoWeekHigh}
        fiftyTwoWeekLow={fiftyTwoWeekLow}
        dividendYield={dividendYield}
        peRatio={peRatio}
        beta={beta}
        yearlyReturn={yearlyReturn}
        weeklyReturn={weeklyReturn}
        companyName={companyName}
        symbol={symbol}
        industry={industry}
        webURL={webURL}
        logo={logo}
      />
      <Header setStockName={setStockName} />
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
      <div className="mt-10 flex justify-center">
        <p className="text-deep-blue font-semibold text-base m-auto">
          PRODUCTS
        </p>
      </div>
      <TabHeader />
      <section className="pl-28 mt-24 flex justify-between pr-36" id="screener">
        <div>
          <p className="text-white text-4xl font-semibold pt-5">
            Futuristic Stock Screener
          </p>
          <p className="text-deep-blue text-lg pt-5 pr-1/2">
            With 130+ filters including liquidity, profitability, debt and
            market ratios, create your own screen in seconds
          </p>
          <div className="mt-5 space-y-5">
            <div className="cursor-pointer text-white text-2xl font-semibold mt-12 hover:bg-neutral-600 rounded-full w-1/2 h-14 flex items-center">
              <FilterIcon className="bg-yellow-400 rounded-full ml-2 mr-7 h-10 w-10 p-2 text-white cursor-pointer" />
              <p>Scan stocks</p>
            </div>
            <div className="cursor-pointer text-white text-2xl font-semibold mt-12 hover:bg-neutral-600 rounded-full w-1/2 h-14 flex items-center">
              <SelectorIcon className="bg-yellow-400 rounded-full ml-2 mr-7 h-10 w-10 p-2 text-white cursor-pointer" />
              <p>Universe selection</p>
            </div>
            <div className="cursor-pointer text-white text-2xl font-semibold mt-12 hover:bg-neutral-600 rounded-full w-1/2 h-14 flex items-center">
              <DocumentDuplicateIcon className="bg-yellow-400 rounded-full ml-2 mr-7 h-10 w-10 p-2 text-white cursor-pointer" />
              <p>Prebuilt screens</p>
            </div>
          </div>
          <button className="mt-8 rounded bg-yellow-400 w-1/2 h-12 text-white text-2xl font-semibold">
            Start Screening
          </button>
        </div>
        <Card />
      </section>
      <section id="mmi">
        <div className="mt-36 flex justify-center">
          <button className="bg-white h-16 w-44 shadow-2xl rounded">
            <p className="text-yellow-400 text-4xl font-bold">64.87</p>
            <p className="text-deep-blue font-semibold text-sm">
              updated 5 mins ago
            </p>
          </button>
        </div>
        <p className="text-grey-blue flex justify-center mt-12">
          Track the market sentiment with
        </p>
        <p className="text-white text-3xl flex justify-center font-semibold pt-3">
          Market Mood Index
        </p>
        <p className="text-deep-blue text-lg pt-5 flex justify-center mx-1/2">
          MMI is a sentiment tool that describes the current mood in the market
          as emotions, ranging from extreme fear to extreme greed
        </p>
        <div className="flex justify-center">
          <button className="rounded bg-yellow-400 w-72 h-10 text-white text-xl font-semibold mt-8">
            More about MMI
          </button>
        </div>
      </section>
      <section className="ml-36 mt-24 flex justify-between" id="stocks">
        <Card />
        <div className="pl-48">
          <p className="text-white text-4xl font-semibold pt-5">
            Crisp Stock Analysis
          </p>
          <p className="text-deep-blue text-lg pt-5 mr-4">
            Stay updated - get collated news, dividends, corporate actions and
            announcements in one place
          </p>
          <div className="cursor-pointer text-white text-2xl font-semibold mt-12 hover:bg-neutral-600 rounded-full w-1/2 h-14 flex items-center">
            <FilterIcon className="bg-yellow-400 rounded-full ml-2 mr-7 h-10 w-10 p-2 text-white cursor-pointer" />
            <p>Performance forecast</p>
          </div>
          <div className="cursor-pointer text-white text-2xl font-semibold mt-5 hover:bg-neutral-600 rounded-full w-1/2 h-14 flex items-center">
            <FilterIcon className="bg-yellow-400 rounded-full ml-2 mr-7 h-10 w-10 p-2 text-white cursor-pointer" />
            <p>Holding analysis</p>
          </div>
          <div className="cursor-pointer text-white text-2xl font-semibold mt-5 hover:bg-neutral-600 rounded-full w-1/2 h-14 flex items-center">
            <FilterIcon className="bg-yellow-400 rounded-full ml-2 mr-7 h-10 w-10 p-2 text-white cursor-pointer" />
            <p>News & events</p>
          </div>
          <button className="mt-8 rounded bg-yellow-400 w-1/2 h-12 text-white text-2xl font-semibold">
            Search Stocks
          </button>
        </div>
      </section>
    </div>
  );
}

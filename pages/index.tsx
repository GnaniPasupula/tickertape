import React, { useState } from "react";
import Header from "../components/Header";
import Topscroller from "../components/Topscroller";
import Head from "next/head";
import Banner from "../components/Banner";
import TabHeader from "../components/TabHeader";
import {
  FilterIcon,
  SelectorIcon,
  DocumentDuplicateIcon,
  DocumentDownloadIcon,
  ColorSwatchIcon,
  GlobeAltIcon,
  MapIcon,
  ClockIcon,
  ChartSquareBarIcon,
  NewspaperIcon,
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
import CardTwo from "../components/CardTwo";
import { ChevronRightIcon } from "@heroicons/react/outline";
import Footer from "../components/Footer";

export default function Home() {
  const [stockName, setStockName] = useState("");
  const [companyNames, setCompanyName] = useState("Bajaj Finance Ltd");

  const renderData = async (stockName: any) => {
    await getStockData(stockName).then(function (data) {
      console.log("From api " + data.companyName);
      setCompanyName(data.companyName ? data.companyName : "Bajaj Finance Ltd");
    });
    // try {
    //   var data = await getStockData(stockName);
    //   console.log("From API " + data);
    // } catch (err) {
    //   console.log("Error from API " + err);
    // }
  };

  if (stockName.length > 0) {
    renderData(stockName);
    setStockName("");
  }

  // console.log("From indexpage company is " + companyName);

  return (
    <div className="bg-primary-blue">
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
      <section className="pl-28 mt-36 flex justify-between pr-36" id="screener">
        <div>
          <p className="text-white text-4xl font-semibold pt-5">
            Futuristic Stock Screener
          </p>
          <p className="text-deep-blue text-lg pt-5 pr-1/2">
            With 130+ filters including liquidity, profitability, debt and
            market ratios, create your own screen in seconds
          </p>
          <div className="mt-5 space-y-5">
            <div className="cursor-pointer text-white text-2xl font-semibold mt-12 hover:bg-neutral-600 rounded-full w-pw h-14 flex items-center">
              <FilterIcon className="bg-yellow-400 rounded-full ml-2 mr-7 h-10 w-10 p-1 text-white cursor-pointer" />
              <p>Scan stocks</p>
            </div>
            <div className="cursor-pointer text-white text-2xl font-semibold mt-12 hover:bg-neutral-600 rounded-full w-pw h-14 flex items-center">
              <SelectorIcon className="bg-yellow-400 rounded-full ml-2 mr-7 h-10 w-10 p-1 text-white cursor-pointer" />
              <p>Universe selection</p>
            </div>
            <div className="cursor-pointer text-white text-2xl font-semibold mt-12 hover:bg-neutral-600 rounded-full w-pw h-14 flex items-center">
              <DocumentDuplicateIcon className="bg-yellow-400 rounded-full ml-2 mr-7 h-10 w-10 p-1 text-white cursor-pointer" />
              <p>Prebuilt screens</p>
            </div>
          </div>
          <button className="mt-8 rounded bg-yellow-400 w-pw h-12 text-white text-1.5xl font-semibold">
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
        <p className="text-white text-4xl flex justify-center font-semibold pt-3">
          Market Mood Index
        </p>
        <p className="text-deep-blue text-lg pt-5 text-center mx-1/2">
          MMI is a sentiment tool that describes the current mood in the market
          as emotions, ranging from extreme fear to extreme greed
        </p>
        <div className="flex justify-center">
          <button className="rounded bg-yellow-400 w-ps h-12 text-white text-1.5xl font-semibold mt-8">
            More about MMI
          </button>
        </div>
      </section>
      <section className="mx-32 mt-36 flex justify-between" id="stocks">
        <Card />
        <div className="pl-48">
          <p className="text-white text-4xl font-semibold pt-5">
            Crisp Stock Analysis
          </p>
          <p className="text-deep-blue text-lg pt-5">
            Stay updated - get collated news, dividends, corporate actions and
            announcements in one place
          </p>
          <div className="cursor-pointer text-white text-2xl font-semibold mt-12 hover:bg-neutral-600 rounded-full w-ps h-14 flex items-center">
            <ClockIcon className="bg-yellow-400 rounded-full ml-2 mr-7 h-10 w-10 p-1 text-white cursor-pointer" />
            <p>Performance forecast</p>
          </div>
          <div className="cursor-pointer text-white text-2xl font-semibold mt-5 hover:bg-neutral-600 rounded-full w-ps h-14 flex items-center">
            <ChartSquareBarIcon className="bg-yellow-400 rounded-full ml-2 mr-7 h-10 w-10 p-1 text-white cursor-pointer" />
            <p>Holding analysis</p>
          </div>
          <div className="cursor-pointer text-white text-2xl font-semibold mt-5 hover:bg-neutral-600 rounded-full w-ps h-14 flex items-center">
            <NewspaperIcon className="bg-yellow-400 rounded-full ml-2 mr-7 h-10 w-10 p-1 text-white cursor-pointer" />
            <p>News & events</p>
          </div>
          <button className="mt-8 rounded bg-yellow-400 w-ps h-12 text-white text-1.5xl font-semibold">
            Search Stocks
          </button>
        </div>
      </section>
      <section id="learn" className="mx-32 mt-36">
        <p className="text-white text-4xl flex justify-center font-semibold pt-3">
          Basics of Investing
        </p>
        <p className="text-deep-blue text-xl pt-5 text-center">
          Jargons getting irritating? Kick-start your learning by understanding
          the <br />
          basics of stock market investing
        </p>
        <div className="flex mt-10 pl-10 space-x-16">
          <CardTwo />
          <div>
            <p
              className="text-white font-semibold text-3xl first-letter:text-7xl first-letter:text-yellow-400
              first-letter:mr-3"
            >
              1 Elementary economics
            </p>
            <p className="text-deep-blue text-lg pt-5">
              Decode the general state of an economy and drivers that lead to
              the economic growth of a country. Learn how GDP is calculated and
              how it’s connected to economic growth. Understand inflation,
              stagflation and how they impact your investments
            </p>
            <button className="mt-8 rounded bg-yellow-400 w-ps h-12 text-white text-1.5xl font-semibold">
              Learn Elemantary Economics
            </button>
          </div>
        </div>
        <div>
          <div>
            <div className="cursor-pointer text-white text-xl hover:bg-neutral-600 mt-3 mx-14 px-5 rounded-full w-ps h-14 flex items-center justify-between">
              <div className="flex items-center ">
                <p className="rounded-full mr-7 text-yellow-400 text-4xl">2</p>
                <p className="text-1.5xl">Equity Markets</p>
              </div>
              <div>
                <ChevronRightIcon className="font-thin h-6 w-5 text-yellow-400" />
              </div>
            </div>
            <div className="cursor-pointer text-white text-xl hover:bg-neutral-600 mt-2 mx-14 px-5 rounded-full w-ps h-14 flex items-center justify-between">
              <div className="flex  items-center">
                <p className="rounded-full mr-7 text-yellow-400 text-4xl">3</p>
                <p className="text-1.5xl">Investing in portfolios</p>
              </div>
              <div>
                <ChevronRightIcon className="font-thin h-6 w-5 text-yellow-400" />
              </div>
            </div>
            <div className="cursor-pointer text-white text-xl hover:bg-neutral-600 mt-2 mx-14 px-5 rounded-full w-ps h-14 flex items-center justify-between">
              <div className="flex  items-center">
                <p className="rounded-full mr-7 text-yellow-400 text-4xl">4</p>
                <p className="text-1.5xl">Evaluating stocks </p>
              </div>
              <div>
                <ChevronRightIcon className="font-thin h-6 w-5 text-yellow-400" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-28">
        <p className="text-white text-4xl flex justify-center font-semibold">
          Research Better, Invest Smarter
        </p>
        <p className="text-deep-blue text-xl pt-3 text-center mx-1/2">
          Pro membership brings exclusive and timely data at your fingertips.
          Discover your next great investment idea quicker and easier
        </p>
        <div className="grid grid-cols-4 mt-12 mx-1/4 ">
          <div className="flex-col flex items-center">
            <DocumentDownloadIcon className="h-16 w-16 text-indigo-600" />
            <p className="text-white text-center mt-8 mx-6">
              Download data for offline analysis
            </p>
          </div>
          <div className="flex-col flex items-center">
            <MapIcon className="h-16 w-16 text-indigo-600" />
            <p className="text-white text-center mt-8 mx-6">
              Premium and customizable filters
            </p>
          </div>
          <div className="flex-col flex items-center">
            <ColorSwatchIcon className="h-16 w-16 text-indigo-600" />
            <p className="text-white text-center mt-8 mx-6">
              Premium screens on various themes
            </p>
          </div>
          <div className="flex-col flex items-center">
            <GlobeAltIcon className="h-16 w-16 text-indigo-600" />
            <p className="text-white text-center mt-8 mx-6">
              Forecasts for price, revenue and EPS
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="mt-12 rounded bg-indigo-600 w-ps h-12 text-white text-1.5xl font-semibold">
            See Tickertape Pro Plans
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

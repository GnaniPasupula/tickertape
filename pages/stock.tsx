import { BookmarkIcon } from "@heroicons/react/outline";
import Head from "next/head";
import React, { useState } from "react";
import Header from "../components/Header";
import Topscroller from "../components/Topscroller";

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

export default function Stock() {
  const [stockName, setStockName] = useState("");

  return (
    <div className="bg-white">
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
      <div className="mt-10 mx-10">
        <div className="p-6 w-1/5 rounded border">
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <p className="font-semibold text-lg">Bajaj Finance Ltd</p>
              <BookmarkIcon className="cursor-pointer h-5 w-5 text-grey-font" />
            </div>
            <p className="font-semibold text-sm text-grey-font">BAJFINANCE</p>
            <p className="mt-1 font-semibold text-1.5xl text-black">
              7,205.00
              <span className="mx-2 font-semibold text-lg text-green-500">
                1.81% (+128.40)
              </span>
            </p>
            <button className="mt-2 hover:shadow h-10 border-t border-grey-dark w-full flex items-center bg-primary-blue rounded justify-center">
              <p className="text-sm text-white">Place Order</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

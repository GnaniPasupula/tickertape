import Head from "next/head";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Topscroller from "../components/Topscroller";
import { BookmarkIcon } from "@heroicons/react/outline";
import { BookmarkIcon as BookmarkIconselected } from "@heroicons/react/solid";

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
import StockCard from "../components/StockCard";

export default function Bookmark() {
  const [stockName, setStockName] = useState("");
  const [toast, setToast] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setToast(false);
    }, 2000);
  }, [toast]);

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
        <StockCard setToast={setToast} />
        <StockCard setToast={setToast} />

        {toast && (
          <div className="animate-bounce shadow-lg absolute left-[40%] top-[20%] text-sm text-white w-1/6 h-10 flex items-center bg-green-500 rounded justify-center">
            Bookmarked
          </div>
        )}
      </div>
    </div>
  );
}

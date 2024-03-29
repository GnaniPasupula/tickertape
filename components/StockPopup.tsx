import React, { useState } from "react";
import {
  ArrowRightIcon,
  GlobeAltIcon,
  OfficeBuildingIcon,
  ShoppingCartIcon,
  BookmarkIcon as BookmarkIconselected,
} from "@heroicons/react/solid";
import { ArrowsExpandIcon, BookmarkIcon } from "@heroicons/react/outline";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../src/store/index";
import { collection, addDoc, deleteDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import router, { Router } from "next/router";

function StockPopup(props: any) {
  const stockBookmark = useSelector((state: any) => state.stockBookmark);
  const dispatch = useDispatch();
  const displayName = useSelector((state: any) => state.displayName);

  var leftp = props.Position;
  const width = window.innerWidth;
  var leftf = 0;

  if (leftp + 480 < width - 4) {
    leftf = leftp;
  } else {
    leftf = width - 480 - 4;
  }

  if (leftf <= 2) {
    leftf = 16;
  }

  let lefts = {
    left: leftf + "px",
  };

  const addStockBookmark = async () => {
    try {
      const docRef = await addDoc(collection(db, "StockBookmark"), {
        CompanyName: props.companyName,
        CurrentPrice: props.currentPrice,
        Symbol: props.symbol,
        URL: props.webURL,
        WeeklyReturn: props.weeklyReturn,
        Industry: props.industry,
        user: displayName,
      });
      console.log("Document written with ID: ", docRef.id);
      console.log("Bookmarked");
      dispatch(actions.setStockBookmark(true));
    } catch (e) {
      console.error("Error adding document: ", e);
      dispatch(actions.setLoginToast(true));
    }
  };

  // const removeStockBookmark = async () => {
  //   try {
  //     const docRef = await deleteDoc(
  //       collection(db, "StockBookmark", props.symbol)

  //     );

  //   }

  return (
    <div
      className={`bg-white w-wspopup relative top-9 rounded-md`}
      style={lefts}
    >
      <div className="bg-grey h-20 rounded border-b border-grey-dark p-4 flex items-center justify-between">
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <p className="font-semibold text-lg">{props.companyName}</p>
            <p className="font-semibold text-sm text-grey-font">
              {props.symbol}
            </p>
            <a href={props.webURL}>
              <GlobeAltIcon className="h-5 w-5 text-grey-font cursor-pointer" />
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <OfficeBuildingIcon className="h-5 w-5 text-grey-font" />
            <p>{props.industry}</p>
            <ArrowRightIcon className="h-3 w-3 text-center" />
            <p>{props.industry}</p>
          </div>
        </div>
        <div>
          <ArrowsExpandIcon className="hover:text-blue-500 hover:shadow cursor-pointer h-9 w-9 p-2 rounded bg-white border border-grey-dark text-grey-font mr-2" />
        </div>
      </div>
      <div className="p-4">
        <div className="space-y-1">
          <p className="text-sm text-grey-blue">
            {props.companyName} is a {props.industry} company . The Company is
            engaged in lending and allied activities.
          </p>
          <div className="flex justify-between">
            <div>
              <p className="text-xs text-grey-blue mt-2">Last Price</p>
              <p className="font-semibold text-1.5xl text-black">
                {props.currentPrice}
              </p>
              <p className="text-xs text-grey-blue mt-2">Price Trend - 1YR</p>
            </div>
            <div className="space-y-1">
              <div className="grid grid-cols-2 gap-x-28 gap-y-1">
                <div className="space-y-1">
                  <p className="text-sm text-grey-blue mt-2">1W Return</p>
                  <p className="font-semibold text-md text-green-500">
                    {props.weeklyReturn}%
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-grey-blue mt-2">1Y Return</p>
                  <p className="font-semibold text-md text-green-500">
                    {props.yearlyReturn}%
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-grey-blue mt-2">52W High</p>
                  <p className="font-semibold text-md text-black">
                    {props.fiftyTwoWeekHigh}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-grey-blue mt-2">52W Low</p>
                  <p className="font-semibold text-md text-black">
                    {props.fiftyTwoWeekLow}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-x-6">
                <div className="space-y-1">
                  <p className="text-sm text-grey-blue mt-2">PE Ratio</p>
                  <p className="font-semibold text-md text-black">
                    {props.peRatio}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-grey-blue mt-2">β</p>
                  <p className="font-semibold text-md text-black">
                    {props.beta}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-grey-blue mt-2">Div. Yield</p>
                  <p className="font-semibold text-md text-black">
                    {props.dividendYield}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-grey h-16 rounded border-t border-grey-dark p-4 flex items-center justify-between">
        {stockBookmark ? (
          <BookmarkIconselected
            className="hover:shadow cursor-pointer h-9 w-9 p-2 rounded bg-white border border-grey-dark text-grey-font mr-2"
            onClick={() => {
              console.log("Removed from Bookmark");
              // removeStockBookmark();
              dispatch(actions.setStockBookmark(false));
              // setToast(false);
            }}
          />
        ) : (
          <BookmarkIcon
            className="hover:shadow cursor-pointer h-9 w-9 p-2 rounded bg-white border border-grey-dark text-grey-font mr-2"
            onClick={() => {
              if (displayName === "") {
                dispatch(actions.setLoginToast(true));
                router.push("/login");
              } else {
                addStockBookmark();
                console.log(displayName);
              }
              // setToast(true);
            }}
          />
        )}
        <button className="hover:shadow h-9 border-t border-grey-dark w-40 flex items-center bg-white">
          <ShoppingCartIcon className="h-8 w-8 p-2 rounded bg-transparent text-primary-blue" />
          <p className="text-sm text-primary-blue">Add to Basket</p>
        </button>
        <button className="hover:shadow h-9 border-t border-grey-dark w-40 flex items-center bg-primary-blue rounded justify-center">
          <ShoppingCartIcon className="h-8 w-8 p-2 rounded bg-transparent text-white" />
          <p className="text-sm text-white">Place Order</p>
        </button>
      </div>
    </div>
  );
}

export default StockPopup;

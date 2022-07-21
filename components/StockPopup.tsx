import {
  ArrowRightIcon,
  OfficeBuildingIcon,
  ShoppingCartIcon,
} from "@heroicons/react/solid";
import { ArrowsExpandIcon, BookmarkIcon } from "@heroicons/react/outline";
import React from "react";

function StockPopup(props: any) {
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

  return (
    <div
      className={`bg-white w-ps h-ph relative top-9 rounded-md`}
      style={lefts}
    >
      <div className="bg-grey h-20 rounded border-b border-grey-dark p-4 flex items-center justify-between">
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <p className="text-lg">Bajaj Finance Ltd</p>
            <p className="text-sm text-grey-font">BAJFINANCE</p>
          </div>
          <div className="flex items-center space-x-2">
            <OfficeBuildingIcon className="h-5 w-5 text-grey-font" />
            <p>Financials</p>
            <ArrowRightIcon className="h-3 w-3" />
            <p>Consumer Finance</p>
          </div>
        </div>
        <div>
          <ArrowsExpandIcon className="hover:text-blue-500 hover:shadow cursor-pointer h-9 w-9 p-2 rounded bg-white border border-grey-dark text-grey-font mr-2" />
        </div>
      </div>
      <div className="p-4">
        <div className="space-y-1">
          <p className="text-sm text-grey-blue">
            Bajaj Finance Limited is a non-banking finance company (NBFC). The
            Company is engaged in lending and allied activities.
          </p>
          <div className="flex justify-between">
            <div>
              <p className="text-xs text-grey-blue mt-2">Last Price</p>
              <p className="font-semibold text-1.5xl text-black">6,095.00</p>
              <p className="text-xs text-grey-blue mt-2">Price Trend - 1YR</p>
            </div>
            <div className="space-y-1">
              <div className="grid grid-cols-2 gap-x-28 gap-y-1">
                <div className="space-y-1">
                  <p className="text-sm text-grey-blue mt-2">1M Return</p>
                  <p className="font-semibold text-lg text-green-500">11.93%</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-grey-blue mt-2">1Y Return</p>
                  <p className="font-semibold text-lg text-green-500">0.84%</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-grey-blue mt-2">1M Return</p>
                  <p className="font-semibold text-lg text-black">8,050.00</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-grey-blue mt-2">1M Return</p>
                  <p className="font-semibold text-lg text-black">5,220.00</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-x-6">
                <div className="space-y-1">
                  <p className="text-sm text-grey-blue mt-2">1M Return</p>
                  <p className="font-semibold text-lg text-black">52.07</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-grey-blue mt-2">1M Return</p>
                  <p className="font-semibold text-lg text-black">1.80</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-grey-blue mt-2">1M Return</p>
                  <p className="font-semibold text-lg text-black">0.33%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-grey h-16 rounded border-t border-grey-dark p-4 flex items-center justify-between">
        <BookmarkIcon className="hover:shadow cursor-pointer h-9 w-9 p-2 rounded bg-white border border-grey-dark text-grey-font mr-2" />
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

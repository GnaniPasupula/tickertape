import React, { useEffect, useRef, useState } from "react";
import StockPopup from "./StockPopup";

function Topscroller(props: any) {
  const [showPopup_stock, setShowPopup_stock] = React.useState(false);
  const [position, setPosition] = React.useState(0);

  const myScrollingData = [
    { id: 1, name: "msft", price: "1$" },
    { id: 2, name: "tsla", price: "2$" },
    { id: 3, name: "aapl", price: "3$" },
    { id: 4, name: "msft", price: "4$" },
    { id: 5, name: "tsla", price: "5$" },
    { id: 6, name: "aapl", price: "6$" },
    { id: 7, name: "msft", price: "7$" },
    { id: 8, name: "tsla", price: "8$" },
    { id: 9, name: "aapl", price: "9$" },
    { id: 10, name: "tsla", price: "10$" },
    { id: 11, name: "aapl", price: "10$" },
    { id: 12, name: "msft", price: "12$" },
    { id: 13, name: "tsla", price: "13$" },
    { id: 14, name: "aapl", price: "14$" },
  ];

  return (
    <div
      className=" bg-primary-blue h-7 sticky top-0 z-50 border-secondary-blue border-b"
      onClick={(e) => {
        setShowPopup_stock(!showPopup_stock);
        setPosition(e.clientX);
        //window.addEventListener("mousemove", setFromEvent);

        // return () => {
        //   window.removeEventListener("mousemove", setFromEvent);
        // };
      }}
    >
      {/* <div
        className={`header-content text-white font-semibold text-lg ${
          isScrolling ? "horizontal-scrolling-header scrolling" : ""
        }`}
        ref={headerRef}
      >
        {myScrollingData.map((item) => (
          <div className="inline-block px-2 " key={item.id}>
            <span className="text-sm">|</span>
            <span className="text-sm">{item.name.toLocaleUpperCase()}</span>
            <span className="text-sm px-1">{item.price}</span>
            <span className="text-sm">|</span>
          </div>
        ))}
      </div> */}
      {showPopup_stock && (
        <StockPopup
          //setShowPopup_stock={setShowPopup_stock}
          Position={position}
          fiftyTwoWeekHigh={props.fiftyTwoWeekHigh}
          fiftyTwoWeekLow={props.fiftyTwoWeekLow}
          dividendYield={props.dividendYield}
          peRatio={props.peRatio}
          beta={props.beta}
          yearlyReturn={props.yearlyReturn}
          weeklyReturn={props.weeklyReturn}
          companyName={props.companyName}
          symbol={props.symbol}
          industry={props.industry}
          webURL={props.webURL}
          logo={props.logo}
          currentPrice={props.currentPrice}
        />
      )}
    </div>
  );
}

export default Topscroller;

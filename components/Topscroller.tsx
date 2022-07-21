import React from "react";
import StockPopup from "./StockPopup";

function Topscroller() {
  const [showPopup_stock, setShowPopup_stock] = React.useState(false);
  const [position, setPosition] = React.useState(0);

  return (
    <div
      className="bg-primary-blue h-7 sticky top-0 z-50 rounded border-secondary-blue border-b"
      onClick={(e) => {
        setShowPopup_stock(!showPopup_stock);
        setPosition(e.clientX);
        //window.addEventListener("mousemove", setFromEvent);

        // return () => {
        //   window.removeEventListener("mousemove", setFromEvent);
        // };
      }}
    >
      {showPopup_stock && (
        <StockPopup
          //setShowPopup_stock={setShowPopup_stock}
          Position={position}
        />
      )}
    </div>
  );
}

export default Topscroller;

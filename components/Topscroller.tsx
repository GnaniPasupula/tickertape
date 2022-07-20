import React from "react";
import StockPopup from "./StockPopup";

function Topscroller() {
  const [showPopup_stock, setShowPopup_stock] = React.useState(false);
  return (
    <div
      className="bg-primary-blue h-7 sticky top-0 z-50 rounded border-secondary-blue border-b"
      onClick={() => setShowPopup_stock(!showPopup_stock)}
    >
      {showPopup_stock && (
        <StockPopup setShowPopup_stock={setShowPopup_stock} />
      )}
    </div>
  );
}

export default Topscroller;

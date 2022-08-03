import { BookmarkIcon } from "@heroicons/react/outline";
import { BookmarkIcon as BookmarkIconselected } from "@heroicons/react/solid";

import React, { useState } from "react";

function StockCard(props: any) {
  const [bookmarkIcon, setBookmarkIcon] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [buttonBg, setButtonBg] = useState("#151e28");
  const [textColors, setTextColors] = useState("#000000");
  const [toggle, setToggle] = useState(false);

  let cardBg = {
    backgroundColor: backgroundColor,
  };

  let buttonbg = {
    backgroundColor: buttonBg,
  };

  let textColorsCard = {
    color: textColors,
  };

  return (
    <div
      className="p-6 w-1/5 rounded border mb-4"
      style={cardBg}
      onClick={() => {
        setToggle(!toggle);
        if (toggle) {
          setBackgroundColor("#151e28");
          setButtonBg("#facc15");
          setTextColors("#ffffff");
        } else {
          setBackgroundColor("#ffffff");
          setButtonBg("#151e28");
          setTextColors("#000000");
        }
      }}
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-lg" style={textColorsCard}>
            Bajaj Finance Ltd
          </p>
          {bookmarkIcon ? (
            <BookmarkIconselected
              className="cursor-pointer h-5 w-5 text-grey-font"
              onClick={() => {
                console.log("Removed from Bookmark");
                setBookmarkIcon(false);
                props.setToast(false);
              }}
            />
          ) : (
            <BookmarkIcon
              className="cursor-pointer h-5 w-5 text-grey-font"
              onClick={() => {
                console.log("Bookmarked");
                setBookmarkIcon(true);
                props.setToast(true);
              }}
            />
          )}
        </div>
        <p className="font-semibold text-sm text-grey-font">BAJFINANCE</p>
        <p
          className="mt-1 font-semibold text-1.5xl text-black"
          style={textColorsCard}
        >
          7,205.00
          <span className="mx-2 font-semibold text-lg text-green-500">
            1.81% (+128.40)
          </span>
        </p>
        <button
          className="mt-2 hover:shadow h-10 border-t border-grey-dark w-full flex items-center bg-primary-blue rounded justify-center"
          style={buttonbg}
        >
          <p className="text-sm text-white">Place Order</p>
        </button>
      </div>
    </div>
  );
}

export default StockCard;

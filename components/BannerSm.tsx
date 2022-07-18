import React from "react";

function BannerSm() {
  return (
    <div className="rounded cursor-pointer flex items-center mt-4 h-14 bg-banner-blue">
      <img
        src="https://www.tickertape.in/stockPickr/entry-banner-left-mob.png"
        className="flex rounded h-14 mr-5"
      />
      <div className="center-items mr-5">
        <p className="font-semibold text-xs">Beat the street</p>
        <p className="text-xs">Predict the market and win!</p>
      </div>
      <button className="bg-primary-blue text-white rounded h-7 w-20 ml-4">
        Lets Play
      </button>
    </div>
  );
}

export default BannerSm;

import React from "react";

function Banner() {
  return (
    <div className="cursor-pointer flex items-center justify-between mt-20 h-32 bg-banner-blue">
      <img
        src="https://www.tickertape.in/stockPickr/entry-banner-left-mob.png"
        className="flex rounded h-32"
      />
      <div className="center-items pl-16">
        <p className="font-semibold">Can you predict the market?</p>
        <p className="mt-3 sr-48">
          Show-off your stock picking skills and compete with investors to
          predict the market and win amazon vouchers daily worth ₹3,000
        </p>
      </div>
      <button className="bg-primary-blue text-white rounded font-semibold h-10 w-56 mr-10">
        Bring it on
      </button>
    </div>
  );
}

export default Banner;

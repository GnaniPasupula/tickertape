import React from "react";

function TabHeader() {
  return (
    <div className="sticky top-14 bg-primary-blue ">
      <div className="shadow-2xl mt-5 mx-10 px-24 flex justify-between items-center border-secondary-blue border h-20 rounded">
        <a
          href="#screener"
          className="cursor-pointer text-grey-blue-light font-semibold text-2xl hover:text-2.5xl hover:underline underline-offset-10 decoration-yellow-400"
        >
          screener
        </a>
        <p className="text-secondary-blue text-4xl">l</p>
        <a
          href="#mmi"
          className="cursor-pointer text-grey-blue-light font-semibold text-2xl hover:text-2.5xl hover:underline underline-offset-10 decoration-yellow-400"
        >
          mmi
        </a>
        <p className="text-secondary-blue text-4xl">l</p>
        <a
          href="#stocks"
          className="cursor-pointer text-grey-blue-light font-semibold text-2xl hover:text-2.5xl hover:underline underline-offset-10 decoration-yellow-400"
        >
          stocks
        </a>
        <p className="text-secondary-blue text-4xl">l</p>
        <p className="cursor-pointer text-grey-blue-light font-semibold text-2xl hover:text-2.5xl hover:underline underline-offset-10 decoration-yellow-400">
          learn
        </p>
      </div>
    </div>
  );
}

export default TabHeader;

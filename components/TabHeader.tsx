import React from "react";

function TabHeader() {
  return (
    <div className="mt-10 ">
      <div className="flex justify-center">
        <p className="text-deep-blue font-semibold text-base">PRODUCTS</p>
      </div>
      <div className="mt-5 mx-10 px-24 flex justify-between items-center border-secondary-blue border h-20 rounded">
        <p className="cursor-pointer text-white font-semibold text-2xl hover:text-2.5xl">
          screener
        </p>
        <p className="text-secondary-blue text-4xl">l</p>
        <p className="cursor-pointer text-white font-semibold text-2xl hover:text-2.5xl">
          mmi
        </p>
        <p className="text-secondary-blue text-4xl">l</p>
        <p className="cursor-pointer text-white font-semibold text-2xl hover:text-2.5xl">
          stocks
        </p>
        <p className="text-secondary-blue text-4xl">l</p>
        <p className="cursor-pointer text-white font-semibold text-2xl hover:text-2.5xl">
          learn
        </p>
      </div>
    </div>
  );
}

export default TabHeader;

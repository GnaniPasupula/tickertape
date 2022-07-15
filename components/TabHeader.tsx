import React from "react";

function TabHeader() {
  return (
    <div className="sticky top-14 bg-primary-blue ">
      <div className="shadow-2xl mt-5 mx-10 px-24 flex justify-between items-center border-secondary-blue border h-20 rounded">
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

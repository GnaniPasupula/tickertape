import {
  BookOpenIcon,
  ChartPieIcon,
  PresentationChartLineIcon,
  ZoomInIcon,
} from "@heroicons/react/solid";
import React from "react";

function TabHeader() {
  return (
    <div className="sticky z-10 top-20 bg-primary-blue">
      <div className="shadow-2xl mt-5 mx-10 px-24 flex justify-between items-center border-secondary-blue border h-22 rounded">
        <div className="group flex items-center cursor-pointer space-x-2">
          <ZoomInIcon className="bg-grey-blue-light rounded-full h-7 w-7 group-hover:h-8 group-hover:w-8 text-white cursor-pointer" />
          <a
            href="#screener"
            className="text-grey-blue-light font-semibold text-2xl group-hover:text-2.5xl group-hover:underline underline-offset-10 decoration-yellow-400"
          >
            screener
          </a>
        </div>
        <p className="text-secondary-blue text-4xl">l</p>
        <div className="group flex items-center cursor-pointer space-x-2">
          <ChartPieIcon className="bg-grey-blue-light rounded-full h-7 w-7 group-hover:h-8 group-hover:w-8 text-white cursor-pointer" />
          <a
            href="#mmi"
            className="text-grey-blue-light font-semibold text-2xl group-hover:text-2.5xl group-hover:underline underline-offset-10 decoration-yellow-400"
          >
            mmi
          </a>
        </div>

        <p className="text-secondary-blue text-4xl">l</p>
        <div className="group flex items-center cursor-pointer space-x-2">
          <PresentationChartLineIcon className="bg-grey-blue-light rounded-full h-7 w-7 group-hover:h-8 group-hover:w-8 text-white cursor-pointer" />
          <a
            href="#stocks"
            className="text-grey-blue-light font-semibold text-2xl group-hover:text-2.5xl group-hover:underline underline-offset-10 decoration-yellow-400"
          >
            stocks
          </a>
        </div>

        <p className="text-secondary-blue text-4xl">l</p>
        <div className="group flex items-center cursor-pointer space-x-2">
          <BookOpenIcon className="bg-grey-blue-light rounded-full h-7 w-7 group-hover:h-8 group-hover:w-8 text-white cursor-pointer" />
          <a
            href="#learn"
            className="text-grey-blue-light font-semibold text-2xl group-hover:text-2.5xl group-hover:underline underline-offset-10 decoration-yellow-400"
          >
            learn
          </a>
        </div>
      </div>
    </div>
  );
}

export default TabHeader;

import {
  ArrowLeftIcon,
  DotsCircleHorizontalIcon,
  ChipIcon,
  PresentationChartLineIcon,
  PresentationChartBarIcon,
  BookOpenIcon,
  CodeIcon,
} from "@heroicons/react/outline";
import { ChatAltIcon } from "@heroicons/react/solid";
import React from "react";
import BannerSm from "./BannerSm";

function LogoPopup(props: any) {
  return (
    // setShowPopup_logo && (
    <div className="bg-secondary-blue rounded-md shadow-2xl p-4 w-pw absolute z-50 top-20">
      <div className="flex justify-start p-2">
        <ArrowLeftIcon
          onClick={() => {
            // console.log("PopUp Close");
            props.setShowPopup_logo(false);
          }}
          className="pointer-cursor h-5 w-5 text-grey-blue"
        />
      </div>
      <div className="p-2 grid grid-cols-4 mt-2 mr-4">
        <div className="flex-col flex items-center">
          <PresentationChartBarIcon className="bg-orange-400 rounded-full mb-2 h-9 w-9 text-white cursor-pointer" />
          <p className="text-white text-sm">Stocks</p>
        </div>
        <div className="flex-col flex items-center">
          <PresentationChartLineIcon className="bg-cyan-400 rounded-full  mb-2 h-9 w-9 text-white cursor-pointer" />
          <p className="text-white text-sm">ETFs </p>
        </div>
        <div className="flex-col flex items-center">
          <ChipIcon className="bg-blue-400 rounded-full  mb-2 h-9 w-9 text-white cursor-pointer" />
          <p className="text-white text-sm text-center">Indices</p>
        </div>
        <div className="flex-col flex items-center">
          <DotsCircleHorizontalIcon className="bg-purple-400 rounded-full  mb-2 h-9 w-9 text-white cursor-pointer" />
          <p className="text-white text-sm text-center">MFs</p>
        </div>
      </div>
      <p className="text-white text-sm pl-7 pt-4 pb-1">Tools of the trade</p>
      <div className="p-2 grid grid-cols-4 mt-2 mr-4">
        <div className="flex-col flex items-center">
          <PresentationChartBarIcon className="bg-indigo-400 rounded-full  mb-2 h-9 w-9 text-white cursor-pointer" />
          <p className="text-white text-sm text-center">
            Stock <br />
            Screener
          </p>
        </div>
        <div className="flex-col flex items-center">
          <PresentationChartLineIcon className="bg-fuchsia-400 rounded-full mb-2 h-9 w-9 text-white cursor-pointer" />
          <p className="text-white text-sm text-center">
            MF <br />
            Screener
          </p>
        </div>
        <div className="flex-col flex items-center">
          <ChipIcon className="bg-rose-400 rounded-full  mb-2 h-9 w-9 text-white cursor-pointer" />
          <p className="text-white text-sm text-center">
            Market <br />
            Mood
          </p>
        </div>
        <div className="flex-col flex items-center">
          <DotsCircleHorizontalIcon className="bg-red-400 rounded-full  mb-2 h-9 w-9 text-white cursor-pointer" />
          <p className="text-white text-sm text-center">
            Stock <br />
            Deals
          </p>
        </div>
      </div>
      <p className="text-white text-sm pl-7 pt-4 pb-1">Read and share</p>
      <div className="p-2 grid grid-cols-4 mt-2 mr-4">
        <div className="flex-col flex items-center">
          <BookOpenIcon className="bg-emerald-400 rounded  mb-2 h-9 w-9 text-white cursor-pointer" />
          <p className="text-white text-sm text-center">Learn</p>
        </div>
        <div className="flex-col flex items-center">
          <ChatAltIcon className="bg-transparent rounded  mb-2 h-9 w-9 text-white cursor-pointer" />
          <p className="text-white text-sm text-center">Blog</p>
        </div>
        <div className="flex-col flex items-center">
          <CodeIcon className="bg-teal-400 rounded  mb-2 h-9 w-9 text-white cursor-pointer" />
          <p className="text-white text-sm text-center">Shortcode</p>
        </div>
      </div>
      <BannerSm />
    </div>
  );
  //   );
}

export default LogoPopup;

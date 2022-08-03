import {
  HeartIcon,
  MoonIcon,
  SparklesIcon,
  SunIcon,
} from "@heroicons/react/solid";
import React from "react";

function Footer() {
  return (
    <div className="mt-32 bg-primary-blue mx-16 pb-8">
      <div className="border-t border-grey-blue pt-6 border-co flex">
        <div className="flex flex-col w-[32%] mr-12">
          <div className="flex items-center group hover:bg-neutral-600 space-x-3">
            <img
              src="https://www.freelogovectors.net/svg12/tickertape_logo-freelogovectors.net.svg"
              alt=""
              width={50}
              height={50}
              className="cursor-pointer bg-transparent"
              color="white"
            />
            <p className="text-white cursor-pointer font-semibold text-lg">
              tickertape
            </p>
          </div>
          <p className="text-grey-font-light mt-6 text-md">
            Tickertape provides data, information & content for Indian stocks,
            mutual funds, ETFs & indices.
          </p>
          <p className="text-grey-font-light mt-6 text-sm">
            Prices might be delayed by a few minutes
          </p>
          <p className="text-grey-font-light mt-4">© GnaniPasupula 2022</p>
        </div>
        <div className="flex flex-col w-[17%]">
          <p className="cursor-pointer font-semibold text-lg text-deep-blue">
            Products
          </p>
          <p className="text-grey-font-light mt-4 text-1.5base">
            Stock Screener
          </p>
          <p className="text-grey-font-light mt-1.5 text-1.5base">
            MF Screener
          </p>
          <p className="text-grey-font-light mt-1.5 text-1.5base">MMI</p>
          <p className="text-grey-font-light mt-1.5 text-1.5base">
            Stock Deals
          </p>
          <p className="text-grey-font-light mt-1.5 text-1.5base">Learn</p>
          <p className="text-grey-font-light mt-1.5 text-1.5base">Blog</p>
        </div>
        <div className="flex flex-col w-[17%]">
          <p className="cursor-pointer font-semibold text-lg text-deep-blue">
            Others
          </p>
          <p className="text-grey-font-light mt-4 text-1.5base">Pricing</p>
          <p className="text-grey-font-light mt-1.5 text-1.5base">
            Cancellelation Policy
          </p>
          <p className="text-grey-font-light mt-1.5 text-1.5base">Terms</p>
          <p className="text-grey-font-light mt-1.5 text-1.5base">Privacy</p>
          <p className="text-grey-font-light mt-1.5 text-1.5base">
            Disclaimers
          </p>
        </div>
        <div className="flex flex-col w-[17%]">
          <p className="cursor-pointer font-semibold text-lg text-deep-blue">
            Company
          </p>
          <p className="text-grey-font-light mt-4 text-1.5base">About Us</p>
          <p className="text-grey-font-light mt-1.5 text-1.5base">Support</p>
          <p className="text-grey-font-light mt-1.5 text-1.5base">Contact Us</p>
        </div>
        <div className="flex flex-col gap-y-5 ">
          <div className="flex gap-x-10">
            <HeartIcon className="text-white h-6 w-6" />
            <SparklesIcon className="text-white h-6 w-6" />
          </div>
          <div className="flex gap-x-10">
            <MoonIcon className="text-white h-6 w-6" />
            <SunIcon className="text-white h-6 w-6" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

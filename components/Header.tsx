import React from "react";
import {
  ArrowLeftIcon,
  ShoppingCartIcon,
  BookmarkIcon,
  MailIcon,
  SearchIcon,
  ArrowSmDownIcon,
} from "@heroicons/react/solid";

function Header() {
  const [showPopup_logo, setShowPopup_logo] = React.useState(false);
  return (
    <header className="bg-primary-blue h-14 px-7 flex justify-between shadow-md">
      <div className="flex items-center">
        <img
          src="https://www.freelogovectors.net/svg12/tickertape_logo-freelogovectors.net.svg"
          alt=""
          width={50}
          height={50}
          className="cursor-pointer bg-transparent"
        />
        <h3
          onClick={() => setShowPopup_logo(true)}
          className="text-white cursor-pointer font-bold text-lg"
        >
          tickertape
        </h3>
        <ArrowSmDownIcon className="hidden md:inline-flex h-6 w-6 text-white cursor-pointer" />

        {showPopup_logo ? (
          <div className="bg-secondary-blue rounded-lg shadow-lg p-4">
            <div className="top" onClick={() => setShowPopup_logo(false)}>
              <div className="pl-1.5">
                <ArrowLeftIcon className="h-5 w-5 text-grey-blue" />
                <p className="h-5 w-5 text-grey-blue">Back to home</p>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <div className="flex items-center">
        <label className="hidden md:inline-flex h-9 relative flex items-center">
          <SearchIcon className="left-2 absolute h-4 w-4 text-white cursor-pointer" />
          <input
            className="rounded bg-grey-blue border-none pl-8 w-96 h-8"
            type="text"
            placeholder="Search stocks, indices, ETFs, Mutual Funds or br"
          />
        </label>
      </div>

      <div className="flex items-center space-x-5">
        <MailIcon className="hidden md:inline-flex h-6 w-6 text-white cursor-pointer" />
        <ShoppingCartIcon className="h-6 w-6 text-white cursor-pointer" />
        <BookmarkIcon className="hidden md:inline-flex h-6 w-6 text-white cursor-pointer" />
        <button className="hidden md:inline-flex text-primary-blue bg-white rounded py-1.5 px-3.5">
          Login
        </button>
      </div>
    </header>
  );
}

export default Header;

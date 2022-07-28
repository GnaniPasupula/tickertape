import React from "react";
import { useId } from "react";
import {
  ShoppingCartIcon,
  BookmarkIcon,
  MailIcon,
  SearchIcon,
  ChevronDownIcon,
} from "@heroicons/react/solid";
import LogoPopup from "./LogoPopup";
import { useRouter } from "next/router";

function Header(props: any) {
  const id = useId();
  const [showPopup_logo, setShowPopup_logo] = React.useState(false);
  const [input, setInput] = React.useState("");
  const router = useRouter();

  return (
    <header className="sticky z-40 top-7 bg-primary-blue h-16 px-7 flex justify-between shadow-md">
      <div
        className="flex items-center group hover:bg-neutral-600 space-x-1"
        onClick={() => {
          setShowPopup_logo(!showPopup_logo);
          // console.log("PopUp Open");
        }}
      >
        <img
          src="https://www.freelogovectors.net/svg12/tickertape_logo-freelogovectors.net.svg"
          alt=""
          width={50}
          height={50}
          className="cursor-pointer bg-transparent"
          color="white"
        />
        <h3 className="text-white cursor-pointer font-semibold text-lg">
          tickertape
        </h3>
        <ChevronDownIcon className="hidden md:inline-flex h-6 w-6 text-white cursor-pointer" />
        {showPopup_logo && <LogoPopup setShowPopup_logo={setShowPopup_logo} />}
      </div>
      <div className="flex items-center">
        <label
          htmlFor={id}
          className="hidden md:inline-flex h-9 relative flex items-center m-auto"
        >
          <SearchIcon className="left-2 absolute h-4 w-4 text-white cursor-pointer" />
          <input
            id={id}
            className="rounded bg-grey-blue border-none pl-8 w-96 h-8"
            type="text"
            placeholder="Search stocks, indices, ETFs, Mutual Funds or br"
            value={input}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                // console.log("Entered Stock is " + input);
                props.setStockName(input);
              }
            }}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
        </label>
      </div>

      <div className="flex items-center space-x-4">
        <MailIcon className="hover:bg-neutral-600 hidden md:inline-flex rounded h-8 w-8 p-1 text-white cursor-pointer" />
        <ShoppingCartIcon className="hover:bg-neutral-600 rounded h-8 w-8 p-1 text-white cursor-pointer" />
        <BookmarkIcon className="hover:bg-neutral-600 hidden md:inline-flex rounded h-8 w-8 p-1 text-white cursor-pointer" />
        <button
          onClick={() => router.push("/login")}
          className="hidden md:inline-flex text-primary-blue bg-white rounded py-1.5 px-3.5"
        >
          Login
        </button>
      </div>
    </header>
  );
}

export default Header;

import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { actions } from "../src/store/index";

function Header(props: any) {
  const id = useId();
  const [showPopup_logo, setShowPopup_logo] = useState(false);
  const [input, setInput] = React.useState("");
  const router = useRouter();

  const displayName = useSelector((state: any) => state.displayName);
  const dispatch = useDispatch();

  const [toast, setToast] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setToast(false);
    }, 2000);
  }, [toast]);

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
      <div className="flex items-center justify-center">
        <label
          htmlFor={id}
          className="hidden md:inline-flex h-9 relative flex items-center m-auto"
        >
          <SearchIcon className="left-2 absolute h-4 w-4 text-white cursor-pointer" />
          <input
            id={id}
            className="rounded bg-grey-blue border-none pl-8 w-96 h-8 outline-none"
            type="text"
            placeholder="Search stocks, indices, ETFs, Mutual Funds or br"
            value={input}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                // console.log("Entered Stock is " + input);
                e.preventDefault();

                props.setStockName(input);
                //setShowWindow_SearchStock(true);
                // router.push("/stock");
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
        {displayName ? (
          <p
            className="text-white"
            onClick={() => {
              signOut(auth)
                .then(() => {
                  console.log("Signed Out");
                  dispatch(actions.setDisplayName(""));
                  setToast(true);
                })
                .catch((error) => {
                  // An error happened.
                  console.log(error);
                });
            }}
          >
            {displayName}
          </p>
        ) : (
          <button
            onClick={() => router.push("/login")}
            className="hidden md:inline-flex text-primary-blue bg-white rounded py-1.5 px-3.5"
          >
            Login
          </button>
        )}
      </div>

      {toast && (
        <div className="animate-bounce shadow-lg absolute left-[40%] top-[150%] text-sm text-white w-1/6 h-10 flex items-center bg-deep-blue rounded justify-center">
          Signed Out Successfully
        </div>
      )}
    </header>
  );
}

export default Header;

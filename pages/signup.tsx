import React, { useEffect, useState } from "react";
import router from "next/router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toastg, setToastg] = useState(false);
  const [toastr, setToastr] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setToastg(false);
      setToastr(false);
    }, 2500);
  }, [toastg, toastr]);

  return (
    <div className="flex justify-center bg-white h-screen items-center">
      <div className="shadow py-10 flex flex-col items-center bg-white rounded border border-grey-dark h-3/4 w-1/4 justify-between">
        <div className="flex flex-col justify-center text-center items-center">
          <p className="text-2.5xl font-bold text-secondary-blue">
            Sign up to Tickertape
          </p>
          <p className="text-center mx-1/4 text-grey-blue text-sm">
            Find your next great investment, now easier & faster with Tickertape
          </p>
        </div>
        <form className="flex flex-col items-center justify-center w-1/2w">
          <input
            type="email"
            id="email"
            placeholder="email"
            className="border-b border-grey-dark w-1/2w outline-none p-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            id="password"
            placeholder="password"
            className="border-b border-grey-dark mt-4 w-1/2w outline-none p-1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="mt-8 border border-black rounded h-10 w-1/2"
            onClick={(e) => {
              e.preventDefault();
              createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                  console.log("User Created");
                  const user = userCredential.user;
                  setToastMessage("Successfully signed up");
                  setToastg(true);
                  //   console.log("Signed up" + user);
                })
                .catch((error) => {
                  const errorMessage = error.message;
                  setToastMessage(errorMessage);
                  setToastr(true);
                });
            }}
          >
            Sign Up
          </button>
        </form>
        <p className="text-center mx-1/4 text-grey-blue text-sm">
          Have a broker account?
          <span
            className="cursor-pointer text-blue-400 font-semibold"
            onClick={() => {
              router.push("login");
            }}
          >
            Login now
          </span>
        </p>
        <p
          className="text-xl text-grey-blue font-semibold border border-black rounded-full w-8 h-8 flex justify-center items-center cursor-pointer"
          onClick={() => {
            router.push("/");
          }}
        >
          X
        </p>
      </div>
      {toastg && (
        <div className="animate-bounce shadow-lg absolute left-[40%] top-[5%] text-sm text-white w-1/6 h-10 flex items-center bg-green-500 rounded justify-center">
          {toastMessage}
        </div>
      )}
      {toastr && (
        <div className="animate-bounce shadow-lg absolute left-[40%] top-[5%] text-sm text-white w-1/6 h-10 flex items-center bg-red-500 rounded justify-center">
          {toastMessage}
        </div>
      )}
    </div>
  );
}

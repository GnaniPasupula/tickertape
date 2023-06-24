import React, { useState, useEffect } from "react";
import router from "next/router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../src/store/index";

// const user = auth.currentUser;

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toast, setToast] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setToast(false);
    }, 2500);
  }, [toast]);

  const dispatch = useDispatch();

  // if (user !== null) {
  //   user.providerData.forEach((profile) => {
  //     console.log("Sign-in provider: " + profile.providerId);
  //     console.log("  Provider-specific UID: " + profile.uid);
  //     console.log("  Name: " + profile.displayName);
  //     console.log("  Email: " + profile.email);
  //     console.log("  Photo URL: " + profile.photoURL);
  //   });
  // }

  return (
    <div className="flex justify-center bg-white h-screen items-center">
      <div className="shadow py-10 flex flex-col items-center bg-white rounded border border-grey-dark h-3/4 w-1/4 justify-between">
        <div className="flex flex-col justify-center text-center items-center">
          <p className="text-2.5xl font-bold text-secondary-blue">
            Log in to Tickertape
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
              signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                  const user = userCredential.user;
                  console.log(user);
                  dispatch(actions.setDisplayName(user.displayName));
                  dispatch(actions.setLoginToast(false));
                  router.push("/");
                })
                .catch((error) => {
                  setToast(true);
                  const errorCode = error.code;
                  const errorMessage = error.message;
                })
                .finally(() => {
                  setEmail("");
                  setPassword("");
                });
            }}
          >
            Login
          </button>
        </form>
        <p className="text-center mx-1/4 text-grey-blue text-sm">
          Dont have a broker account yet?
          <span
            className="cursor-pointer text-blue-400 font-semibold"
            onClick={() => {
              router.push("signup");
            }}
          >
            Open now
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
      {toast && (
        <div className="animate-bounce duration-1000 shadow-lg absolute left-[40%] top-[5%] text-sm text-white w-1/6 h-10 flex items-center bg-red-500 rounded justify-center">
          Login Failed
        </div>
      )}
    </div>
  );
}

import { HomeIcon, LockClosedIcon } from "@heroicons/react/solid";
import router from "next/router";

export default function Login() {
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
          />
          <input
            type="password"
            id="password"
            placeholder="password"
            className="border-b border-grey-dark mt-4 w-1/2w outline-none p-1"
          />
          <button className="mt-8 border border-black rounded h-10 w-1/2">
            Login
          </button>
        </form>
        <p className="text-center mx-1/4 text-grey-blue text-sm">
          Dont have a broker account yet?
          <span className="cursor-pointer text-blue-400 font-semibold">
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
    </div>
  );
}

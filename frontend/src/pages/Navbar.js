import React from "react";
import { useNavigate } from "react-router-dom";

import home from "../assets/icons/home.svg";
import write from "../assets/icons/write.svg";
import explore from "../assets/icons/explore.svg";
import staples from "../assets/icons/staples.svg";

function Navbar(props) {
  const navigate = useNavigate();

  return (
    <div className="">
      <div
        className={
          window.location.pathname !== "/"
            ? "flex flex-row py-4 px-44 justify-between bg-white items-center"
            : "flex flex-row py-4 px-44 justify-between bg-orange-700/20 items-center"
        }
      >
        <div className="p-2 flex flex-row items-center gap-8">
          <p className="text-2xl font-bold">_Staple</p>
          {props.appState.isLoggedIn === true ? (
            <>
              <div className="flex flex-row gap-3">
                <button
                  className="btn border-none text-sm font-bold px-2 py-0 bg-white/0 text-black  hover:bg-orange-700/20 capitalize gap-2"
                  onClick={() => navigate("/")}
                >
                  <img src={home} alt="home"></img>
                  Home
                </button>
                <button
                  className="btn border-none text-sm font-bold px-2 py-0 bg-white/0 text-black  hover:bg-orange-700/20 capitalize gap-2"
                  onClick={() => navigate("/write")}
                >
                  <img src={write} alt="home"></img>
                  Write
                </button>
                <button className="btn border-none text-sm font-bold px-2 py-0 bg-white/0 text-black  hover:bg-orange-700/20 capitalize gap-2">
                  <img src={explore} alt="home"></img>
                  Explore
                </button>
                <button
                  className="btn border-none text-sm font-bold px-2 py-0 bg-white/0 text-black  hover:bg-orange-700/20 capitalize gap-2"
                  onClick={() => navigate("/dashboard")}
                >
                  <img src={staples} alt="home"></img>
                  Staples
                </button>
              </div>
            </>
          ) : null}
        </div>

        <div className="flex flex-row gap-6">
          {props.appState.isLoggedIn === true ? null : (
            <>
              <button className="btn border-none text-sm font-bold px-2 py-0 bg-white/0 text-black  hover:bg-orange-700/20 capitalize">
                How we built?
              </button>
              <button className="btn border-none text-sm font-bold px-2 py-0 bg-white/0 text-black  hover:bg-orange-700/20 capitalize">
                Refer & Earn
              </button>
            </>
          )}
          <button
            onClick={() => props.initialize()}
            className="btn border-none text-sm bg-orange-700/50 text-black rounded-md px-4 py-2 capitalize hover:bg-orange-700/60"
          >
            {props.appState.isLoggedIn === true ? (
              <>
                {props.appState.account.slice(0, 4) +
                  "..." +
                  props.appState.account.slice(-4)}
              </>
            ) : (
              "Connect Wallet"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

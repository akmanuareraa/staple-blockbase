import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard(props) {
  const navigate = useNavigate();

  const getStaples = () => {
    let stapleIDs;
    stapleIDs = localStorage.getItem("stapleData");
    console.log("1stapleIDs", stapleIDs);
    if (
      localStorage.getItem("stapleData")?.length === 0 ||
      localStorage.getItem("stapleData") === null
    ) {
      stapleIDs = localStorage.setItem("stapleData", ["0"]);
    } else {
      console.log("2stapleIDs", stapleIDs);
      props.setAppState((prevState) => {
        return {
          ...prevState,
          dashboard: {
            userStaples: stapleIDs,
          },
        };
      });
    }
  };

  useEffect(() => {
    getStaples();
  }, []);

  return (
    <>
      <div className="flex flex-row px-48 py-12 items-center justify-between">
        <p className="text-3xl font-bold">Your Dashboard</p>
        <button className="btn capitalize" onClick={() => navigate("/write")}>
          Create Staple
        </button>
      </div>
      <div className="flex flex-col items-center mt-8">
        {props.appState.dashboard.userStaples.length === 0 ? (
          <>
            <p className="text-3xl text-black/30">
              You have not created any Staples yet
            </p>
          </>
        ) : null}
      </div>
    </>
  );
}

export default Dashboard;

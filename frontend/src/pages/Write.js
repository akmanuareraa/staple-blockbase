import React, { useState, useEffect } from "react";

import plusicon from "../assets/icons/plus.svg";

function Write(props) {
  const [bodyElements, setBodyElements] = useState([]);
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [name, setName] = useState("");

  const handleFiles = (e) => {
    console.log(
      "Handling files...",
      props.appState.files,
      props.appState.files.length
    );
    let tempArr = props.appState.files;
    tempArr.push(e.target.files[0]);
    props.setAppState((prevState) => prevState, tempArr);
    // props.setAppState((prevState) => {
    //   return {
    //     ...prevState,
    //     files: prevState.files.push(e.target.files[0]),
    //   };
    // });
  };

  const handleString = (index, e) => {
    console.log("Handling text...", e);
    let tempArr = props.appState.files;
    tempArr[index] = e.target.value;
    props.setAppState((prevState) => prevState, tempArr);
  };

  const handleStapleName = (e) => {
    console.log("Handling text...", e.currentTarget.value);
    setName(e.currentTarget.value);
  };

  return (
    <>
      <div className="flex flex-col justify-center mt-8">
        <div className="flex flex-row justify-center items-center gap-8">
          <button
            onClick={() => {
              console.log("Inserting Image...", bodyElements);
              setBodyElements((prevState) => {
                return [
                  ...prevState,
                  <input
                    type="file"
                    className="file-input w-full max-w-xs mt-1"
                    onChange={(e) => handleFiles(e)}
                  />,
                ];
              });
            }}
          >
            <div className="flex flex-row items-center bg-gray-400/40 gap-2 rounded-lg py-1 px-3 hover:bg-gray-400/60">
              <img src={plusicon} alt="plusicon" className="h-8 w-8"></img>
              <p className="text-xs font-semibold mr-2">Add Document</p>
            </div>
          </button>
          <button
            onClick={() => {
              console.log("Inserting Image...", bodyElements);
              setBodyElements((prevState) => {
                return [
                  ...prevState,
                  <div className="flex flex-row items-center mt-1 gap-2">
                    <textarea
                      className="w-full max-w-xs border-2 border-black/70 rounded-md"
                      onChange={(e) => handleString(bodyElements.length, e)}
                    >
                      {" "}
                    </textarea>
                    {/* <button className="btn">Submit</button> */}
                  </div>,
                ];
              });
            }}
          >
            <div className="flex flex-row items-center bg-gray-400/40 gap-2 rounded-lg py-1 px-3 hover:bg-gray-400/60">
              <img src={plusicon} alt="plusicon" className="h-8 w-8"></img>
              <p className="text-xs font-semibold mr-2">Add Text</p>
            </div>
          </button>
          <button
            onClick={() => {
              console.log("Inserting Image...", bodyElements);
              setBodyElements((prevState) => {
                return [
                  ...prevState,
                  <input
                    className="w-full max-w-xs border-2 border-black/70 mt-1 rounded-md"
                    onChange={(e) => handleString(bodyElements.length, e)}
                  />,
                ];
              });
            }}
          >
            <div className="flex flex-row items-center bg-gray-400/40 gap-2 rounded-lg py-1 px-3 hover:bg-gray-400/60">
              <img src={plusicon} alt="plusicon" className="h-8 w-8"></img>
              <p className="text-xs font-semibold mr-2">Add URL</p>
            </div>
          </button>
        </div>
        <div className="flex flex-row justify-center mx-72 mt-8">
          <div className="flex flex-row border-none enabled:hover:focus:focus-visible:border-white">
            <input
              className="text-3xl border-b-2 border-black  pt-4 pl-4 pr-4  rounded-t-lg text-center w-full"
              placeholder="Enter Staple Name"
              onInput={(e) => handleStapleName(e)}
            ></input>
          </div>
        </div>

        <div className="flex flex-col space-x-0 mt-8">
          <div className="flex flex-col space-x-0">
            {bodyElements.map((e, i) => {
              return (
                <div key={i} className="flex flex-row justify-center mx-72">
                  {e}
                </div>
              );
            })}
          </div>
        </div>

        {bodyElements.length > 0 ? (
          <>
            <div className="flex flex-col items-center mt-12">
              <div className="flex flex-col bg-gray-300 p-8 rounded-md">
                <div
                  className="flex flex-col gap-2"
                  onInputCapture={(e) => {
                    console.log("type", type, e.target.value);
                    setType(e.target.value);
                  }}
                >
                  <div className="flex flex-row items-center gap-3">
                    <input
                      type="radio"
                      name="radio-1"
                      className="radio"
                      value="Public"
                    />
                    <p className="text-2xl font-semibold">Public</p>
                  </div>
                  <div className="flex flex-row items-center gap-3">
                    <input
                      type="radio"
                      name="radio-1"
                      className="radio"
                      value="Private"
                    />
                    <p className="text-2xl font-semibold">Private</p>
                  </div>
                </div>
                {type === "Public" ? (
                  <input
                    className="rounded border-black border-2 p-2 text-center mt-3"
                    placeholder="Enter Price of the Staple"
                    onInput={(e) => {
                      setPrice(e.target.value);
                      console.log("Setting Price: ", price);
                    }}
                  ></input>
                ) : null}
                <button
                  className={
                    props.appState.processState === true
                      ? "btn bg-orange-700/80 border-none mt-4 disabled cursor-not-allowed"
                      : "btn bg-orange-700/80 border-none mt-4"
                  }
                  onClick={() => {
                    console.log("Creating a Staple...", props.appState.files);
                    props.setAppState((prevState) => {
                      return {
                        ...prevState,
                        processState: true,
                      };
                    });
                    props.uploadToIpfs(type, price, name);
                  }}
                >
                  {props.appState.processState === true
                    ? "Stapling..."
                    : "Create Staple"}
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center">
            <p className="text-3xl text-black/20 font-bold mt-12">
              Add atleast one resource to the staple to create
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default Write;

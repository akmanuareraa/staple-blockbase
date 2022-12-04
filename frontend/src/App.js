import React, { useState, useEffect } from "react";
import { useNavigate, Route, Routes } from "react-router-dom";
import { create, CID, IPFSHTTPClient } from "ipfs-http-client";
import Web3 from "web3";

import Navbar from "./pages/Navbar";
import Homepage from "./pages/Homepage";
import Writepage from "./pages/Write";
import Dashboard from "./pages/Dashboard";

import stapleAbi from "./abi/stappleAbi";
import tokenAbi from "./abi/tokenAbi";

import toast, { Toaster } from "react-hot-toast";

function App() {
  const [appState, setAppState] = useState({
    isLoggedIn: false,
    account: "",
    ipfs: null,
    files: [],
    ipfsCid: [],
    processState: false,
    dashboard: {
      userStaples: [],
    },
  });

  const navigate = useNavigate();

  const projectId = "2IQ7gTO8wopQq0TUtAfPA7kPVf7";
  const projectSecret = "75c4850838dddd0d1d9892870b2c23d4";
  const authorization = "Basic " + btoa(projectId + ":" + projectSecret);

  const setupIpfs = () => {
    let ipfs;
    try {
      ipfs = create({
        url: "https://ipfs.infura.io:5001/api/v0",
        headers: {
          authorization,
        },
      });
      setAppState((prevState) => {
        return {
          ...prevState,
          ipfs: ipfs,
        };
      });
      console.log("IPFS connected successfully -> ", ipfs);
    } catch (error) {
      console.error("IPFS error ", error);
      ipfs = undefined;
    }
  };

  const uploadToContract = async (stapleType, staplePrice, stapleName) => {
    try {
      console.log(
        "Uploading to contract => ",
        appState.ipfsCid,
        appState.files,
        appState
      );
      let web3 = new Web3(window.ethereum);
      let stapleContract = new web3.eth.Contract(
        JSON.parse(stapleAbi),
        "0xb195b18f0EfF913Dd297539189f7D583c1803179"
      );
      let tokenContract = new web3.eth.Contract(
        JSON.parse(tokenAbi),
        "0xB5aAd763a6937294131F18f4fD174E1064a25C90"
      );
      let stapleStatus;
      if (stapleType === "Public") {
        stapleStatus = "listed";
      } else {
        stapleStatus = "delisted";
      }
      let stapleCount = await stapleContract.methods
        .generateNewStaple(
          appState.ipfsCid,
          stapleType,
          staplePrice.toString(),
          stapleStatus,
          stapleName
        )
        .send({ from: appState.account })
        .then(async (res, err) => {
          if (res) {
            console.log("Uploaded to Contract Successfully", res);
            let sID = res.events.StapleAdded.returnValues.stapleId;
            let sData = JSON.parse(localStorage.getItem("stapleData"));
            sData.append(sID);
            localStorage.setItem("stapleData", sData);
            setAppState((prevState) => {
              return {
                ...prevState,
                processState: false,
              };
            });
            navigate("/dashboard");
          } else {
            console.log("Error uploading to contract", err);
          }
        });
      console.log("stapleCount", stapleCount);
    } catch (error) {
      console.log("Error occured while uploading to contract", error);
      setAppState((prevState) => {
        return {
          ...prevState,
          processState: false,
        };
      });
    }
  };

  const uploadToIpfs = async (stapleType, staplePrice, stapleName) => {
    try {
      let counter = 0;
      await appState.files.forEach(async (file) => {
        console.log("Uploading files...", file, appState);
        const result = await appState.ipfs.add(file);
        let tempArr = appState.ipfsCid;
        tempArr.push(result.path);
        setAppState((prevState) => {
          return {
            ...prevState,
            ipfsCid: tempArr,
          };
        });
        console.log("IPFS CID -> ", result, appState.ipfsCid);
        console.log("counter", counter, appState.files.length);
        if (counter === appState.files.length - 1) {
          uploadToContract(stapleType, staplePrice, stapleName);
        }
        counter++;
      });
    } catch (error) {
      console.error("Error occured while uploading to IPFS: ", error);
      setAppState((prevState) => {
        return {
          ...prevState,
          processState: false,
        };
      });
    }
  };

  const initialize = () => {
    //Created check function to see if the MetaMask extension is installed
    const isMetaMaskInstalled = () => {
      //Have to check the ethereum binding on the window object to see if it's installed
      const { ethereum } = window;
      return Boolean(ethereum && ethereum.isMetaMask);
    };

    const MetaMaskClientCheck = async () => {
      if (!isMetaMaskInstalled()) {
        toast.error("Please install MetaMask to use this app!");
      } else {
        let acc = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log("Account Fetched: ", acc);
        setAppState((prevState) => {
          return { ...appState, isLoggedIn: true, account: acc[0] };
        });
        toast.success("Wallet Connected Successfully!");
      }
    };

    MetaMaskClientCheck();
  };

  useEffect(() => {
    setupIpfs();
    if (localStorage.getItem("stapleData") === null) {
      localStorage.setItem("stapleData", []);
    }
  }, []);

  return (
    <>
      <Toaster />
      <Navbar initialize={initialize} appState={appState} />
      <Routes>
        <Route path="/" element={<Homepage initialize={initialize} />} />
        <Route
          path="/write"
          element={
            <Writepage
              initialize={initialize}
              appState={appState}
              setAppState={setAppState}
              uploadToIpfs={uploadToIpfs}
            />
          }
        />
        <Route
          path="/dashboard"
          element={
            <Dashboard
              initialize={initialize}
              appState={appState}
              setAppState={setAppState}
              uploadToIpfs={uploadToIpfs}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;

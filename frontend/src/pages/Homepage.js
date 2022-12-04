import React from "react";

import iconone from "../assets/icons/decentralized.svg";
import icontwo from "../assets/icons/communitydriven.svg";
import iconthree from "../assets/icons/growtogether.svg";

import imgone from "../assets/images/createandpublish.svg";
import imgtwo from "../assets/images/organdstable.svg";
import imgthree from "../assets/images/earnandgrow.svg";
import iconfour from "../assets/images/waitinglist.svg";

import bookmark from "../assets/images/platforms/bookmark.png";
import medium from "../assets/images/platforms/medium.png";
import newsletter from "../assets/images/platforms/newsletter.png";
import notion from "../assets/images/platforms/notion.png";
import pinterest from "../assets/images/platforms/pinterest.png";
import twitter from "../assets/images/platforms/twitter.png";
import website from "../assets/images/platforms/website.png";

import {
  Creatercard,
  CreaterData,
  Usercard,
  footerCards,
} from "../misc/cardsData";
import user from "../misc/user.png";
import creater from "../misc/creater.png";
import "../misc/Block2.css";
import "../misc/Footer.css";

function Homepage(props) {
  return (
    <>
      <div>
        <div className="flex flex-col bg-orange-700/20 p-20 items-center">
          <div className="flex flex-col gap-12">
            <p className="text-3xl font-semibold text-center ">
              Organize all your content <br></br>in one place
            </p>
            <p className="text-2xl text-black text-center">
              Building a gatherer economy for <br></br>creators & consumers on
              Web3
            </p>
          </div>
          <div className="flex flex-col gap-2 mt-10 mb-32">
            <button className="btn bg-orange-700/80 text-xl text-white capitalize border-none rounded-md">
              Sign Up
            </button>
            <p className="text-base font-medium">
              Get 100 Staple coins on Launch*
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-center p-12 cus-overlap">
          <div className="flex flex-row p-10 w-80 gap-4 justify-top items-start bg-white">
            <img src={iconone} alt="iconone"></img>
            <div className="flex flex-col">
              <p className="text-base font-semibold text-black">
                Decentralized
              </p>
              <p className="text-xs font-normal text-black">
                To distribute the administrative powers or functions of (a
                central authority) over a less concentrated area.
              </p>
            </div>
          </div>
          <div className="flex flex-row p-10 w-80 gap-4 justify-top items-start bg-white">
            <img src={icontwo} alt="iconone"></img>
            <div className="flex flex-col">
              <p className="text-base font-semibold text-black">
                Community Driven
              </p>
              <p className="text-xs font-normal text-black">
                To distribute the administrative powers or functions of (a
                central authority) over a less concentrated area.
              </p>
            </div>
          </div>
          <div className="flex flex-row p-10 w-80 gap-4 justify-top items-start bg-white">
            <img src={iconthree} alt="iconone"></img>
            <div className="flex flex-col">
              <p className="text-base font-semibold text-black">
                Grow Together
              </p>
              <p className="text-xs font-normal text-black">
                To distribute the administrative powers or functions of (a
                central authority) over a less concentrated area.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row pt-20 pb-20 justify-center">
          <p className="text-3xl font-semibold text-center ">
            Not just for Content Creators <br></br>Build for Consumers &
            Organizers
          </p>
        </div>
        <div className="flex flex-row justify-center gap-9">
          <div className="flex flex-col p-3 items-center gap-3">
            <img src={imgone} alt="imgone" className="h-60"></img>
            <p className="text-lg font-semibold">Create & Publish</p>
            <p className="text-base w-60 text-center">
              To distribute the administrative powers or functions of (a central
              authority) over a less concentrated area
            </p>
          </div>
          <div className="flex flex-col p-3 items-center gap-3">
            <img src={imgtwo} alt="imgone" className="h-60"></img>
            <p className="text-lg font-semibold">Organize & Stable</p>
            <p className="text-base w-60 text-center">
              To distribute the administrative powers or functions of (a central
              authority) over a less concentrated area
            </p>
          </div>
          <div className="flex flex-col p-3 items-center gap-3">
            <img src={imgthree} alt="imgone" className="h-60"></img>
            <p className="text-lg font-semibold">Earn & Grow</p>
            <p className="text-base w-60 text-center">
              To distribute the administrative powers or functions of (a central
              authority) over a less concentrated area
            </p>
          </div>
        </div>

        {/* // ==================================================== */}
        {/* // ==================================================== */}

        <div className="flex flex-col items-center mt-24">
          <div className="blk_3 grid gap-6">
            <div className="flex flex-row p-8  gap-32">
              <div className="w-[200px] grid gap-4 ">
                <h1 className="font-bold text-xl text-start">For User</h1>

                <p className="text-start">
                  Lorem ipsum dolor sit amet, consectetur ad ip isc ing elit.
                  Con dimen tum nec faucibus justo, ac quam.
                </p>

                <img src={user} alt="" />
              </div>
              <div className="w-[700px] grid grid-cols-3 gap-4 relative">
                {Usercard.map((items) => {
                  return (
                    <div
                      className=" shadow-md w-[260px] text-start bg-pink-300 h-[220px] p-4 rounded-lg"
                      id={items.id}
                    >
                      <div className="flex justify-between">
                        <p className="rotate-45 text-xl text-#fafafa">
                          <i className="fa fa-map-pin " />
                        </p>
                        <h1 className="text-5xl w-[60px] text-gray-500">
                          {items.no}
                        </h1>
                      </div>
                      <h3 className="font-bold text-md">{items.title}</h3>
                      &nbsp;
                      <p className="font-medium text-sm">{items.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-row p-8 gap-32 mt-16">
              <div className="w-[700px] grid grid-cols-3 gap-4 relative">
                {Creatercard.map((items) => {
                  return (
                    <div
                      className=" shadow-md w-[260px] text-start bg-pink-300 h-[220px] p-4 rounded-lg"
                      id={items.id}
                    >
                      <div className="flex justify-between">
                        <p className="rotate-45 text-xl text-[#6B7280]">
                          <i className="fa fa-map-pin " />
                        </p>
                        <h1 className="text-5xl w-[60px] text-gray-500">
                          {items.no}
                        </h1>
                      </div>
                      <h3 className="font-bold text-md">{items.title}</h3>
                      &nbsp;
                      <p className="font-medium text-sm">{items.desc}</p>
                    </div>
                  );
                })}
              </div>
              <div className="w-[200px] grid gap-4">
                <h1 className="font-bold text-xl text-start">For Creater</h1>

                <p className="text-start">
                  Lorem ipsum dolor sit amet, consectetur ad ip isc ing elit.
                  Con dimen tum nec faucibus justo, ac quam.
                </p>

                <img src={creater} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center bg-orange-700/30 mt-24 p-16">
          <p className="text-3xl font-semibold text-center mb-24 mt-8">
            Move your data from Other Platforms
          </p>
          <div className="flex flex-col gap-16">
            <div className="flex flex-row justify-center gap-48">
              <div className="flex flex-col items-center gap-4">
                <img src={bookmark} alt="bookmark"></img>
                <p className="font-medium">Bookmarks</p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <img src={medium} alt="bookmark"></img>
                <p className="font-medium">Medium</p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <img src={newsletter} alt="newsletter"></img>
                <p className="font-medium">Newsletter</p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <img src={notion} alt="notion"></img>
                <p className="font-medium">Notion</p>
              </div>
              {/* <img src={pinterest} alt="pinterest"></img> */}
            </div>
            <div className="flex flex-row justify-center gap-48">
              <div className="flex flex-col items-center gap-4">
                <img src={pinterest} alt="pinterest"></img>
                <p className="font-medium">Pinterest</p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <img src={twitter} alt="twitter"></img>
                <p className="font-medium">Twitter</p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <img src={website} alt="website"></img>
                <p className="font-medium">Website</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row mt-28 justify-center gap-16">
          <img src={iconfour} alt="iconfour"></img>
          <div className="flex flex-col justify-center gap-6">
            <p className="font-medium">_Staple</p>
            <p className="text-xl font-bold">Join Waiting List</p>
            <p className="text-medium">
              Building a gatherer economy for <br></br>creators & consumers on
              Web3
            </p>
            <div className="flex flex-col gap-1">
              <button className="btn bg-orange-700/80 text-xl text-white capitalize border-none rounded-md w-fit px-9">
                Sign Up
              </button>
              <p className="text-base font-medium">
                Get 100 Staple coins on Launch*
              </p>
            </div>
          </div>
        </div>

        <div className="footer bg-[#FFF1ED] p-20 mt-24">
          <div className="w-[1000px] mx-auto flex justify-between">
            <div className="contact-add grid gap-4 w-[250px]">
              <div className="cont-desc">
                <h3 className="font-bold text-xl">_Staple</h3>
                &nbsp;
                <p className="text-sm">
                  Building a gatherer economy for creators & consumers on Web3
                </p>
              </div>
              <div className="font-bold text-xl">
                <h1>Contact</h1>
                <div className="grid grid-cols-3 my-4 conn-icons">
                  <i className="fa fa-envelope" />
                  <i className="fa fa-twitter" />
                  <i class="fa fa-whatsapp" />
                </div>
              </div>
            </div>
            <div className="foot-cont-link">
              <div className="grid grid-cols-4 gap-10">
                {footerCards.map((items) => {
                  return (
                    <div className="foot-lists">
                      <h1 className="font-bold text-lg">{items.title}</h1>
                      <ul>
                        <li>{items.num1}</li>
                        <li>{items.num2}</li>
                        <li>{items.num3}</li>
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;

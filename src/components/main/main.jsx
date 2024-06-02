import React from "react";
import stars from "../../assets/images/stars.png";
import gif from "../../assets/images/gif.png";
import google from "../../assets/images/google.jpeg";
import musk from "../../assets/images/musk.jpeg";

import men from "../../assets/images/men.png";
function Main() {
  return (
    <div className="w-[700px] border p-4 ">
      <div className="flex justify-between ">
        <span className="font-bold text-[22px]">Home</span>
        <img src={stars} alt="img" />
      </div>
      <hr className="p-0" />
      <div className="flex my-2">
        <img
          src={men}
          className="w-[50px] h-[50px] border  rounded-[50px]"
          alt="img"
        />
        <input className="" type="text" placeholder="What's happening" />
      </div>
      <div className="flex justify-between px-20   ">
        <div className="flex justify-around pb-10 w-[200px] mt-8 ">
          <i className="fa-regular fa-image text-[#1D9BF0] text-[22px]"></i>
          <img src={gif} alt="img" className="inline" />
          <i className="fa-regular fa-bar-chart text-[#1D9BF0] text-[22px]"></i>
          <i className="fa-regular fa-smile text-[#1D9BF0] text-[22px]"></i>
          <i className="fa-regular fa-calendar text-[#1D9BF0] text-[22px]"></i>
        </div>
        <button className="w-[108px] h-[40px] border bg-[#2ac1f1] mt-5 text-white font-bold  rounded-3xl hover:bg-[#1D9BF0] opacity-[0.4]">
          Tweet
        </button>
      </div>
      <hr />
      <div className="my-2">
        <div className="flex ">
          <i className="fa-regular fa-f text-[white] text-[30px] font-[900] w-[40px] px-3 py-2 rounded h-[40px] bg-black"></i>
          <div className="ml-2">
            <div className="flex">
              <h5 className="font-bold text-[18px]">Forbes</h5>
              <span className="ml-1 mt- text-[16px]">@Forbes · </span>{" "}
              <span className="text-[14px] mt-1 ml-2">24m</span>
            </div>
            <p className="w-[600px]">
              Google fired another round of workers in the wake of sit-in
              protests. <br />
              What to know:
              <a href="#" className="text-[#1D9BF0]">
                trib.al/Gz247GW
              </a>
            </p>
            <img
              width={"630px"}
              className="mt-2 rounded-2xl "
              src={google}
              alt="img"
            />
          </div>
          <i className="fas fa-ellipsis text-[19px]  justify-cer mx-auto mt-1  "></i>
        </div>
        <div className="flex justify-around mt-5 ">
          <i className=" fa-regular  fa-comment text-[18px]" aria-hidden="true">
            {"     "} <span className="text-[14px] ml-2 font-[500]">10</span>
          </i>
          <i className="fa fa-retweet  text-[18px]" aria-hidden="true">
            {"     "} <span className="text-[14px] ml-2 font-[500]">1</span>
          </i>
          <i className=" fa-regular  fa-heart  text-[18px]" aria-hidden="true">
            {"     "} <span className="text-[14px] ml-2 font-[500]">13k</span>
          </i>
          <i
            className=" fas  fa-arrow-up-from-bracket  text-[18px]"
            aria-hidden="true"
          >
            {"     "} <span className="text-[14px] ml-2 font-[500]"></span>
          </i>
          <i
            className="fas fa-chart-simple  font-[600]  text-[18px]"
            aria-hidden="true"
          >
            {"     "} <span className="text-[14px] ml-2 font-[500]"></span>
          </i>
        </div>
      </div>
      <hr />
      <div className="my-2 mt-3 ">
        <div className="flex justify-between">
          <i className="fa-regular fa-f text-[white] text-[30px] font-[900] w-[40px] px-3 py-2 rounded h-[40px] bg-black"></i>

          <div className="ml-2">
            <div className="flex ">
              <h5 className="font-bold text-[18px]">Forbes</h5>
              <span className="ml-1 mt- text-[16px]">@Forbes ·</span>{" "}
              <span className="text-[14px] mt-1 ml-2">40m</span>
            </div>
            <p className="w-[600px]">
              Australian Prime Minister Anthony Albanese lashed out at Elon Musk
              in multiple interviews on Tuesday{" "}
              <a href="#" className="text-[#1D9BF0]">
                {" "}
                trib.al/Hol6eey
              </a>
            </p>
            <img src={musk} className="rounded-2xl" alt="img" />
          </div>
          <i className="fas fa-ellipsis text-[19px] ml-8 justify-center mx-auto mt-1 ml-[0px] "></i>
        </div>
        <div className="flex justify-around mt-5 mr-0">
          <i className="fa-regular fa-comment text-[18px]" aria-hidden="true">
            {"     "} <span className="text-[14px] ml-2 font-[700]"></span>
          </i>
          <i
            className="fa fa-retweet text-[green] text-[18px]"
            aria-hidden="true"
          >
            {"     "} <span className="text-[14px] ml-2 font-[500]">5</span>
          </i>
          <i
            className="fa fa-heart text-[red] font-[600]  text-[18px]"
            aria-hidden="true"
          >
            {"     "} <span className="text-[14px] ml-2 font-[500]">9</span>
          </i>
          <i
            className="fas fa-arrow-up-from-bracket  text-[18px]"
            aria-hidden="true"
          >
            {"     "} <span className="text-[16px] ml-2 font-[500]"></span>
          </i>
          <i className="fas fa-chart-simple    text-[18px]" aria-hidden="true">
            {"     "} <span className="text-[16px] ml-2 font-[500]">16k</span>
          </i>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Main;

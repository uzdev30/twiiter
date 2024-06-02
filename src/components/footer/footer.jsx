import React from "react";

//importing images
import angular from "../../assets/images/angular.jpg";
import versel from "../../assets/images/versel.png";
import tail from "../../assets/images/tail.jpg";
export default function Footer() {
  return (
    <div className="w-[330px]  px-2 pl-10">
      <div className="border px-4 rounded-3xl bg-[#EFF3F4] w-[310px] py-2 h-[45px]">
        <i className="fas fa-search"></i>
        <input
          className="ml-1 bg-[#EFF3F4] "
          type="search"
          placeholder="search twitter"
        />
      </div>
      <div className="bg-white py-1 my-3 w-[310px] px-2 border rounded-2xl">
        <h4 className="font-bold text-[18px]">Subcribe to Premium</h4>
        <p className="py-1">
          {" "}
          Subscribe to unlock new features and if eligible, receive a share of
          ads revenue
        </p>
        <button className="border-none px-4 py-1 text-white text-[20px] rounded-3xl text-bold bg-[black]">
          Subscribe
        </button>
      </div>
      <div className="bg-white py-1 my-3 w-[310px] px-2 border rounded-2xl">
        <div className="flex justify-between">
          <p className="font-bold text-[18px]">Trends for you</p>
          <i className="fas fa-gear mt-2 "></i>
        </div>
        <div className="flex justify-between my-5  h-[60px]">
          <div>
            <div className="text-[13px] opacity-50">Trending in Uzbekistan</div>
            <h6 className="font-bold text-[16px]  h-[18px]">Uzbekistan</h6>
            <div className="text-[14px] opacity-50 h-[10px]">3K Tweets</div>
          </div>
          <i className="fas fa-ellipsis ml-5"></i>
        </div>
        <div className="flex justify-between my-5  h-[60px]">
          <div>
            <div className="text-[14px] opacity-50">Uzbekistan in Germany</div>
            <h6 className="font-bold text-[16px]  h-[18px]">Uzbekistan</h6>
            <div className="text-[14px] opacity-50 h-[10px]">4K Tweets</div>
          </div>
          <i className="fas fa-ellipsis ml-5"></i>
        </div>
        <div className="flex justify-between my-5  h-[60px]">
          <div>
            <div className="text-[14px] opacity-50">Uzbekistan in Germany</div>
            <h6 className="font-bold text-[16px]  h-[18px]">Uzbekistan</h6>
            <div className="text-[14px] opacity-50 h-[10px]">3K Tweets</div>
          </div>
          <i className="fas fa-ellipsis ml-5"></i>
        </div>
        <button className="mt-5 text-[#1E97E1] text-[14px]">Show more</button>
      </div>
      <div className="bg-[#ffff] py-1 my-3 w-[310px] rounded-2xl border px-2">
        <span className="font-bold text-[18px] ">Who to follow </span>
        <div className="flex justify-between mt-5 ">
          <div className="flex my-3">
            <img src={versel} width={"37px"} alt="" />

            <div className="ml-1">
              <h6 className="text-[15px] font-bold">
                Versel <i className="fas fa-check-circle text-[blue] "></i>
              </h6>
              <p className="text-[12px]">@vercel</p>
            </div>
          </div>
          <button className="w-[75px] text-[15px] h-[35px]  mt-3 rounded-2xl bg-black text-white">
            Follow
          </button>
        </div>
        <div className="flex justify-between mt-5 ">
          <div className="flex my-3">
            <img src={tail} width={"37px"} alt="" />

            <div className="ml-1">
              <h6 className="text-[15px] font-bold">
                Tailwind <i className="fas fa-check-circle text-[yellow] "></i>
              </h6>
              <p className="text-[12px]">@tailwind</p>
            </div>
          </div>
          <button className="w-[75px] text-[15px] h-[35px]  mt-3 rounded-2xl bg-black text-white">
            Follow
          </button>
        </div>
        <div className="flex justify-between mt-5 ">
          <div className="flex my-3">
            <img src={angular} width={"37px"} alt="" />

            <div className="ml-1">
              <h6 className="text-[15px] font-bold">
                Angular <i className="fas fa-check-circle text-[blue] "></i>
              </h6>
              <p className="text-[12px]">@angular</p>
            </div>
          </div>
          <button className="w-[75px] text-[15px] h-[35px]  mt-3 rounded-2xl bg-black text-white">
            Follow
          </button>
        </div>
        <button className="mt-5 text-[#1E97E1] text-[14px]">Show more</button>
      </div>
      <div className="flex-wrap text-[13px] w-[290px]">
        <a href="#">Terms of Service</a>
        <a href="#">Privacu Policy</a>
        <a href="#">Cookie Policy </a>
        <a href="#">Imprint </a>
        <a href="#"> Adds info </a>
        <a href="#">More ··· </a>
        <a href="#">© 2021 Twitter, Inc. </a>
      </div>
    </div>
  );
}

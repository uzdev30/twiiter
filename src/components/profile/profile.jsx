import React from "react";
//copm
import Header from "../header/header";
import Footer from "../footer/footer";
import versel from "../../assets/images/versel.png";
import tail from "../../assets/images/tail.jpg";
import angular from "../../assets/images/angular.jpg";
import men from "../../assets/images/men.png";

//img
function Profile() {
  return (
    <div className="container mx-auto px-[125px] flex">
      <Header />
      <div className="w-[650px] border  pt-2">
        <div className="flex w-[300px] justify-around">
          <i className="fas fa-arrow-left mt-4 text-[18px] "></i>
          <div>
            <h3 className="font-bold text-[20px] h-[25px]   py-0">
              Nurislom Mo'minov
            </h3>
            <div className="text-[14px]  h-[15px]">0 posts</div>
          </div>
        </div>
        <div className="bg-gray-300 w-[650px] h-[200px] mt-3  px-5 mx-auto ">
          <div className="flex justify-between ">
            <img
              src={men}
              width={"150px"}
              height={"150px"}
              className="rounded-full   mt-[130px]"
              alt=""
            />
            <button className="border border-black mt-[220px] rounded-3xl w-[140px]  h-[42px] text-[19px] font-[600] hover:bg-gray-100 px-0 py-1">
              Edit profile
            </button>
          </div>
        </div>
        <div className="mt-20 px-4  ">
          <h4 className="font-[700] text-[20px]">Nurislom Mo'minov</h4>
          <span>@nurislom_06</span>
          <div className="flex font-bold mt-5">
            <i className="far text-[20px] fa-calendar"></i>
            <pre className="text-[19px]">Joined April 2024</pre>
          </div>
          <div className="flex w-[200px] justify-between">
            <div>
              <span className="font-bold">16</span> Following
            </div>
            <span>
              <span className="font-bold">0</span> Followers
            </span>
          </div>
        </div>
        <div className="flex mt-10 justify-between px-4">
          <li className="list-none pb-5 active:border-b-4 avtive:font-bold active:border-[#1D9BF0] border-rounded w-[50px] ">
            Posts
          </li>
          <li className="list-none pb-5 active:border-b-4 avtive:font-bold active:border-[#1D9BF0] border-rounded w-[50px] ">
            Replies
          </li>
          <li className="list-none pb-5 active:border-b-4 avtive:font-bold active:border-[#1D9BF0] border-rounded w-[50px] ">
            Hightlights
          </li>
          <li className="list-none pb-5 active:border-b-4 avtive:font-bold active:border-[#1D9BF0] border-rounded w-[50px] ">
            Articles
          </li>
          <li className="list-none pb-5 active:border-b-4 avtive:font-bold active:border-[#1D9BF0] border-rounded w-[50px] ">
            Media
          </li>
          <li className="list-none pb-5 active:border-b-4 avtive:font-bold active:border-[#1D9BF0] border-rounded w-[50px] ">
            Likes{" "}
          </li>
        </div>
        <hr />
        <div className="bg-[#ffff] py-1 my-3 w-[310px] px-2">
          <span className="font-bold text-[18px] ">Who to follow </span>
          <div className="w-[600px]">
            <div className="flex justify-between mt-5  h-[50px]">
              <div className="flex my-3">
                <img
                  src={versel}
                  width={"37px"}
                  className="w-[37px] h-[37px]"
                  alt=""
                />

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
            <p className="pl-10">
              Vercel's frontend cloud gives developers the
              frameworks,workflows,and infrastructure too build a faster,more
              personalized web.Creators of{" "}
              <span className="text-[#1D9BF0]">@nextjs</span>.
            </p>
          </div>
          <div className="w-[600px]">
            <div className="flex justify-between mt-5 ">
              <div className="flex my-3">
                <img src={tail} width={"37px"} alt="" />

                <div className="ml-1">
                  <h6 className="text-[15px] font-bold">
                    Tailwind{" "}
                    <i className="fas fa-check-circle text-[yellow] "></i>
                  </h6>
                  <p className="text-[12px]">@tailwind</p>
                </div>
              </div>
              <button className="w-[75px] text-[15px] h-[35px]  mt-3 rounded-2xl bg-black text-white">
                Follow
              </button>
            </div>
            <p className="pl-10">
              The utility-first CSS framework.Rapidly build modern
              websites,without ever leaving your HTML.
            </p>
          </div>

          <div className="w-[600px]">
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
            <p className="pl-10">
              Just kidding - this is a fun April Fool's from the Angular team.
              We hope you enjoyed it and had a good laugh ♥️
            </p>
          </div>
          <span className="text-[#1D9BF0]">Show more</span>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Profile;

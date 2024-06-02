import React, { useState } from "react";
//image
import home from "../../assets/images/home.svg";
import men from "../../assets/images/men.png";
import { NavLink } from "react-router-dom";
function Header() {
  // const [active, setActive] = useState(false);
  return (
    <header role="banner" className="fied">
      <ul className="text-10px  w-[238px] h-[690px] px-1 fixe">
        {" "}
        <li>
          <i className="fa-brands fa-twitter text-[40px] text-[#1D9BF0]"></i>
        </li>
        <NavLink className={""} to={"/home"}>
          <li className="my-5 cursor-pointer flex    hover:bg-gray-300 h-[36px] rounded-3xl px-2 w-[110px] ">
            <img src={home} className="w-[20px] h-[26px] mt-1 mr-3 " alt="" />
            <span className="  text-[23px] "> Home</span>
          </li>
        </NavLink>
        <NavLink className={""} to={"/explore"}>
          <li className=" cursor-pointer  active:font-bold hover:bg-gray-300 h-[36px] rounded-3xl px-2  w-[140px] ">
            <i className="fas  fa-hashtag text-[18px] mr-3 "></i>
            <span className=" text-[23px]"> Explore</span>
          </li>
        </NavLink>
        <NavLink to={"/notification"}>
          <li className="my-5 cursor-pointer  active:font-bold hover:bg-gray-300 h-[36px] rounded-3xl px-2  w-[195px]">
            <i className="fa-regular  fa-bell text-[18px] mr-3  "></i>
            <span className=" text-[23px]"> Notifications</span>
          </li>
        </NavLink>
        <NavLink to={"/messages"}>
          <li className="my-5 cursor-pointer  active:font-bold hover:bg-gray-300 h-[36px] rounded-3xl px-2   w-[160px]">
            <i className="fa-regular fa-envelope  text-[18px] mr-3 "></i>
            <span className=" text-[23px]"> Messages</span>
          </li>
        </NavLink>
        <NavLink to={"/bookmark"}>
          <li className="my-5 cursor-pointer   hover:bg-gray-300 h-[36px] rounded-3xl px-2  w-[160px]">
            <i className=" fa-regular   fa-bookmark text-[18px] mr-3  "></i>
            <span className=" text-[23px]"> Bookmark</span>
          </li>
        </NavLink>
        <NavLink to={"/list"}>
          <li className="my-5 cursor-pointer  active:font-bold hover:bg-gray-300 h-[36px] rounded-3xl px-2   w-[100px]">
            <i className=" fas fa-list  text-[18px] mr-3 "></i>
            <span className="text-[23px]"> List</span>
          </li>
        </NavLink>
        <NavLink to={"/profile"}>
          <li className="my-5 flex  cursor-pointer  active:font-bold hover:bg-gray-300 h-[36px] rounded-3xl px-2   w-[120px]">
            <i className="  fa-regular mt-2 fa-user text-[20px] mr-3 "></i>
            <span className=" text-[23px]"> Profile</span>
          </li>
        </NavLink>
        <li className="my-5 flex  cursor-pointer  active:font-bold hover:bg-gray-300 h-[36px] rounded-3xl px-2   w-[120px] ">
          <i className=" fas border-2 border-black  mr-3 w-[22px] h-[22px] mt-2 rounded-[20px]   fa-ellipsis text-[20px]  "></i>
          <span className=" text-[23px]"> More</span>
        </li>
        <li>
          <button className="w-[180px] h-[45px] text-white rounded-3xl border bg-[#1D9BF0] text-[23px] hover:bg-[blue]">
            Tweet
          </button>
        </li>
        <li className="flex mt-20">
          <img
            src={men}
            className="w-[50px] h-[50px] border  rounded-[50px]"
            alt="img"
          />
          <div className="text-[14px] mt-[5px]">
            <div className="font-[700]">Nurislom Mo'minov</div>
            <div>@nurislom_06</div>
          </div>
          <i className="fas fa-ellipsis text-[19px] ml-8 justify-center mx-auto mt-4  ">
            {" "}
          </i>
        </li>
      </ul>
    </header>
  );
}

export default Header;

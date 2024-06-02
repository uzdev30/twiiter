import React, { useState } from "react";
import Signup from "../signUpmodal/signup";
import SignIn from "../signIn/signIn";
//importing images

import Twitter from "../../assets/images/twitter.png";
function SignFirst() {
  const [modal, setModal] = useState(false);
  const [modaIn, setInmodal] = useState(false);

  const pasModal = () => {
    setModal(true);
    setInmodal(false);
  };

  return (
    <>
      <div className="container mx-auto">
        <ul className="flex justify-between ">
          <li className="border">
            <img src={Twitter} className="w-[800px] h-[650px]" alt="img" />
          </li>
          <li className="flex-col mr-20 my-10 ">
            <i className="fa-brands fa-twitter text-[50px] text-[#1DA1F2] "></i>
            <h1 className=" w-[588px] text-[70px] font-bold">Happening now</h1>
            <h5 className="w-[343px] text-[35px] font-[700]">
              Join twitter today{" "}
            </h5>
            <div className="felx-col">
              <button className="border rounded-full block py-2 px-10 text-auto font-[600] hover:text-white w-[300px] hover:bg-[#1DA1F2]">
                <i className="fa-brands fa-google mr-1 text-[16px]"></i>
                Sign up with Google
              </button>

              <button className="border rounded-full py-2 block my-5 px-10 text-auto font-[600] hover:text-white w-[300px] hover:bg-[#1DA1F2]">
                <i className="fa-brands fa-apple mr-1 text-[22px]"></i>
                Sign up with Apple
              </button>
              <button
                onClick={() => setModal(true)}
                className="border rounded-full py-2 px-10 text-auto font-[600] hover:text-white w-[300px] hover:bg-[#1DA1F2]"
              >
                Sign up with phone or email
              </button>
            </div>
            <Signup openModal={modal} closeModal={() => setModal(false)} />
            <p className="w-[420px] text-[15px] my-10">
              By singing up you agree to the
              <a className="text-[#1E97E1]" href="">
                {" "}
                Terms of Service{" "}
              </a>
              and
              <a className="text-[#1E97E1]" href="">
                {" "}
                Privacy Policy
              </a>
              , including
              <a className="text-[#1E97E1]" href="">
                {" "}
                Cookie Use.
              </a>
            </p>
            <div className="font-[600] mt-10">Already have an account</div>
            <button
              onClick={() => setInmodal(true)}
              className="
            mt-5
            border rounded-full py-2 px-10 text-auto font-[600] hover:text-white hover:bg-[#1DA1F2]"
            >
              Sign in
            </button>
            <SignIn
              pasModal={pasModal}
              openModalin={modaIn}
              closeModalin={() => setInmodal(false)}
            />
          </li>
        </ul>
        <ul className="mx-auto  flex justify-between w-[1451px]  text-[14px] font-[500] mt-5">
          <a className="hover:text-[#1DA1F2]" href="">
            About
          </a>
          <a className="hover:text-[#1DA1F2]">Help</a>
          <a className="hover:text-[#1DA1F2]" href="">
            Center
          </a>
          <a className="hover:text-[#1DA1F2]" href="">
            Terms of Service
          </a>
          <a className="hover:text-[#1DA1F2]" href="">
            Privacy Policy
          </a>
          <a className="hover:text-[#1DA1F2]" href="">
            Cookie Policy
          </a>
          <a className="hover:text-[#1DA1F2]" href="">
            Ads info
          </a>
          <a className="hover:text-[#1DA1F2]" href="">
            Blog
          </a>
          <a className="hover:text-[#1DA1F2]" href="">
            Status
          </a>
          <a className="hover:text-[#1DA1F2]" href="">
            Carrres
          </a>
          <a className="hover:text-[#1DA1F2]" href="">
            Brand Resources
          </a>
          <a className="hover:text-[#1DA1F2]" href="">
            Advertsing
          </a>
          <a className="hover:text-[#1DA1F2]" href="">
            Marketing
          </a>
          <a className="hover:text-[#1DA1F2]" href="">
            Twitter for Business
          </a>
          <a className="hover:text-[#1DA1F2]" href="">
            Developers
          </a>
          <a className="hover:text-[#1DA1F2]" href="">
            Directory
          </a>
          <a className="hover:text-[#1DA1F2]" href="">
            Settings
          </a>
          <br />
          <a className="block hover:text-[#1DA1F2]" href="">
            © 2021 Twitter, Inc.
          </a>
        </ul>
      </div>
    </>
  );
}

export default SignFirst;

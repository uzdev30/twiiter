import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRef, useEffect } from "react";

function SignIn({ openModalin, closeModalin, pasModal }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const refin = useRef();
  const navigate = useNavigate();
  useEffect(() => {
    if (openModalin) {
      refin.current?.showModal();
    } else {
      refin.current?.close();
    }
  }, [openModalin]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      alert("malumotlarni toliq kiriting");
    } else if (
      window.localStorage.getItem("email") === email &&
      window.localStorage.getItem("password") === password
    ) {
      navigate("/home");

      // alert("email or password wrong");
    } else {
      alert("email or password xato");
    }
  };
  return (
    <dialog
      className="w-[500px] h-[800px]  py-5 px-20 "
      ref={refin}
      onCancel={closeModalin}
    >
      <div className="flex">
        <i
          onClick={closeModalin}
          className="fas fa-x mt-3 font-bold  mp-10  cursor-pointer"
        ></i>
        <i className="fa-brands fa-twitter text-[40px] items-center flex justify-center mx-auto text-[#1E97E1]"></i>
      </div>
      <p className="text-[32px] font-bold my-5 mt-10">Sign in to Twitter</p>
      <form onSubmit={(e) => handleSubmit(e)}>
        <button className="w-[350px] h-[50px] border rounded-full block py-2 px-10 text-auto font-[600] hover:text-white hover:bg-[#1DA1F2]">
          <i className="fa-brands fa-google mr-1 text-[]"></i>
          Sign in with Google
        </button>

        <button className="w-[350px] h-[50px] border rounded-full py-2 block my-5 px-10 text-auto font-[600] hover:text-white hover:bg-[#1DA1F2]">
          <i className="fa-brands fa-apple mr-1 text-[]"></i>
          Sign in with Apple
        </button>
        <input
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="email address"
          className="w-[350px] h-[60px] border rounded-xl my-3 text-[18px]  "
        />
        <input
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
          className="w-[350px] h-[60px] border rounded-xl my-3  text-[18px] "
        />
        <button className="w-[350px] border h-[40px] rounded-2xl my-2 hover:text-white hover:bg-[#1DA1F2]">
          Log in
        </button>
        <button className="w-[350px] border h-[40px] rounded-2xl my-2 hover:text-white hover:bg-[#1DA1F2]">
          Forgot password
        </button>
      </form>
      <p className="text-[14px] mt-3">
        Don't have an account?{" "}
        <button className="text-[#1DA1F2]" onClick={pasModal}>
          Sign up
        </button>
      </p>
    </dialog>
  );
}

export default SignIn;

import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";

function Notification() {
  return (
    <div className="container mx-auto px-[125px] flex">
      <Header />
      <div className="w-[600px] text-[33px] font-bold">
        this notification page
      </div>
      <Footer />
    </div>
  );
}

export default Notification;

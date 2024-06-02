import React from "react";
import Header from "../header/header";
import Main from "../main/main";
import Footer from "../footer/footer";
function Home() {
  return (
    <div className="container mx-auto px-[125px] flex">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default Home;

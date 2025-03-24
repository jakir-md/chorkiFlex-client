import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";

const MainLayout = () => {

  return (
    <div>
      <div className={`max-w-[1200px] mx-auto`}>
        <div className="z-4">
          <Navbar></Navbar>
        </div>
        <div className="pt-5 mb-10">
          <Outlet></Outlet>
        </div>
        <div>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;

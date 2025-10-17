import React from "react";
import Navbar from "../components/Navber";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const Layouts = () => {
  return (
    <div className="flex flex-col min-h-screen mx-auto ">
      <Navbar></Navbar>
      <div className="">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Layouts;

import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../UI/Navbar";
import Footer from "../UI/Footer";
// import ScrollTop from "./component/UI/ScrollTop";

const SharedLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};
export default SharedLayout;

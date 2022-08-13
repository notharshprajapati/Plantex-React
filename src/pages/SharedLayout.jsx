import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../UI/Navbar";
// import Footer from "../UI/Footer";
// import ScrollTop from "./component/UI/ScrollTop";

const SharedLayout = () => {
  return (
    <div>
      <Navbar />
      <main className="main">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
};
export default SharedLayout;

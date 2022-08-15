import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../UI/Navbar";
import Footer from "../UI/Footer";
import ScrollUp from "../UI/ScrollUp";
// import ScrollTop from "./component/UI/ScrollTop";

const SharedLayout = () => {
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <div>
      <Navbar scrollPosition={scrollPosition} />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
      <ScrollUp scrollPosition={scrollPosition} />
    </div>
  );
};
export default SharedLayout;

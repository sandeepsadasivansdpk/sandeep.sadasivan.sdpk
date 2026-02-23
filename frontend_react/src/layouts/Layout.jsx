import React from "react";
import { Navbar, Footer } from "../components";
import ScrollToTop from "../components/ScrollToTop";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="app">
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;

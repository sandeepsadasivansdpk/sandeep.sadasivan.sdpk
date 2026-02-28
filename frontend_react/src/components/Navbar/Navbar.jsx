import React, { useState, useEffect } from "react";

import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [classFloat, setClassFloat] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", stickNavBar);

    return () => {
      window.removeEventListener("scroll", stickNavBar);
    };
  }, []);

  const stickNavBar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      if (windowHeight > 50) {
        setClassFloat("navbar-float");
      } else {
        setClassFloat("");
      }
    }
  };

  const navItems = [
    { label: "home", path: "/" },
    { label: "about", path: "/about" },
    // { label: "work", path: "/work" },
    { label: "experiences", path: "/experiences" },
    { label: "testimonials", path: "/testimonials" },
    // { label: "contact", path: "/contact" },
  ];

  return (
    <nav className={`app__navbar ${classFloat}`}>
      <div className="app__navbar-logo">
        {/* <img src={images.logo} alt="logo" /> */}
      </div>
      <ul className="app__navbar-links">
        {navItems.map((item) => (
          <li key={`link-${item.label}`} className="app__flex p-text">
            <NavLink
              to={item.path}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {navItems.map((item) => (
                <li key={`mobile-${item.label}`}>
                  <NavLink
                    to={item.path}
                    onClick={() => setToggle(false)}
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

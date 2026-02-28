import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import { NavLink } from "react-router-dom";

import { images } from "../../constants";
import { urlFor } from "../../utils";
import {
  aboutTheRoles as aboutTheRolesData,
  aboutMe as aboutMeData,
} from "../../data";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";

const About = ({ isPage = false }) => {
  const [aboutTheRoles, setAboutTheRoles] = useState([]);
  const [aboutMe, setAboutMe] = useState({});

  useEffect(() => {
    setAboutTheRoles(aboutTheRolesData);
    setAboutMe(aboutMeData);
  }, []);

  return (
    <>
      <h2
        className="head-text"
        style={{
          paddingTop: isPage ? "6rem" : "0",
        }}
      >
        I know that <span>Good Design</span>
        <br />
        means <span>Good Business</span>
      </h2>

      <div className="app__about-context app__flex">
        <div className="app__about-img app__flex">
          <div className="app__flex">
            <img
              src={
                aboutMe.profileImg
                  ? urlFor(aboutMe.profileImg)
                  : images.aboutmine
              }
              alt="Profile"
            />
          </div>
        </div>
        <div className="app__about-data app__flex">
          <h2 className="head-text">About Me</h2>
          <p
            className="p-text"
            dangerouslySetInnerHTML={{ __html: aboutMe.description }}
          ></p>
          {!isPage && (
            <p className="p-text" style={{ marginTop: "1rem" }}>
              Read more about me in <NavLink to="/about">here</NavLink>.
            </p>
          )}
          {isPage && (
            <div className="app_about app__flex">
              <p className="p-text" style={{ marginTop: "1rem" }}>
                To know more about me, please visit my{" "}
                <a
                  href="https://www.linkedin.com/in/sandeep-sadasivan/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>{" "}
                profile.
              </p>

              <a
                href="https://www.linkedin.com/in/sandeep-sadasivan/"
                target="_blank"
                rel="noreferrer"
                className="app__flex head-text"
                style={{
                  marginTop: "1rem",
                  marginLeft: "1rem",
                  fontSize: "2rem",
                }}
              >
                <BsLinkedin style={{ color: "#0A66C2" }} />
              </a>
            </div>
          )}
        </div>
      </div>
      {isPage && aboutTheRoles.length > 0 && (
        <section className="app__about-roles-section">
          <h2 className="head-text">About The Roles</h2>
          <div className="app__about-roles-list">
            {aboutTheRoles.map((role) => (
              <motion.div
                key={role._id}
                className="app__about-role-item app__flex"
                whileInView={{ opacity: 1 }}
              >
                <img src={urlFor(role.imgUrl)} alt={role.title} />
                <div className="app__about-role-text">
                  <h3 className="bold-text">{role.title}</h3>
                  <p className="p-text">{role.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export { About as AboutComponent };

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg",
);

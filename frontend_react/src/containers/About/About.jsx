import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { images } from "../../constants";
import { urlFor } from "../../utils";
import {
  aboutTheRoles as aboutTheRolesData,
  aboutMe as aboutMeData,
} from "../../data";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";

const About = ({ isPage = false }) => {
  const [aboutTheRolesData, setAboutTheRoles] = useState([]);
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
          <div className="app_about"></div>
        </div>
      </div>
      {isPage && aboutTheRolesData.length > 0 && (
        <section className="app__about-roles-section">
          <h2 className="head-text">About The Roles</h2>
          <div className="app__about-roles-list">
            {aboutTheRolesData.map((role) => (
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

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import { NavLink } from "react-router-dom";

import { images } from "../../constants";
import { urlFor } from "../../utils";

import { Skills } from "../../containers";
import { Testimonial } from "../../containers";
import { Contact } from "../../containers";

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
        passionate about building <span>strategic partnerships</span>
        <br />
        and delivering sustainable <span>business growth</span>
      </h2>

      <div className="app__about-context">
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

          {isPage && (
            <>
              <div className="app_about app__flex">
                <p className="p-text" style={{ marginTop: "1rem" }}>
                  To know more about me, please visit my LinkedIn profile.
                </p>
              </div>
              <div
                className="app_about app__flex"
                style={{ marginBottom: "2rem" }}
              >
                <a
                  href="https://www.linkedin.com/in/sandeep-sadasivan/"
                  target="_blank"
                  rel="noreferrer"
                  className="app__flex head-text"
                  style={{
                    marginTop: "1rem",
                    fontSize: "2rem",
                  }}
                >
                  <BsLinkedin style={{ color: "#0A66C2" }} />
                </a>

                <p className="p-text" style={{ marginTop: "1rem" }}>
                  {" "}
                  <a
                    href="https://www.linkedin.com/in/sandeep-sadasivan/"
                    target="_blank"
                    rel="noreferrer"
                    style={{ marginLeft: "8px" }}
                  >
                    linkedin.com/in/sandeep-sadasivan
                  </a>{" "}
                </p>
              </div>
            </>
          )}

          <h2 className="head-text">Career Aspirations</h2>
          <p
            className="p-text"
            dangerouslySetInnerHTML={{ __html: aboutMe.careerAspiration }}
          ></p>

          {aboutMe.selfEvaluation && (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <h2
                className="head-text"
                style={{ textAlign: "left", marginTop: "2rem" }}
              >
                Self Evaluation
              </h2>
              <p
                className="p-text"
                dangerouslySetInnerHTML={{
                  __html: aboutMe.selfEvaluation.content,
                }}
              ></p>
              <p style={{ marginLeft: "2rem" }}>
                <h2
                  className="head-text"
                  style={{
                    textAlign: "left",
                    marginTop: "2rem",
                    fontSize: "1rem",
                  }}
                >
                  Strengths
                </h2>
                <ul className="p-text">
                  {aboutMe.selfEvaluation.strengths.map((strength) => (
                    <li key={strength}>
                      <p className="p-text">{strength}</p>
                    </li>
                  ))}
                </ul>
                <h2
                  className="head-text"
                  style={{
                    textAlign: "left",
                    marginTop: "2rem",
                    fontSize: "1rem",
                  }}
                >
                  Areas of Development
                </h2>
                <ul className="p-text">
                  {aboutMe.selfEvaluation.areasOfDevelopment.map((area) => (
                    <li key={area}>
                      <p className="p-text">{area}</p>
                    </li>
                  ))}
                </ul>
              </p>
            </motion.div>
          )}
        </div>
      </div>
      {isPage && aboutTheRoles.length > 0 && false && (
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

      <Skills />
      <Testimonial />
      <Contact />
    </>
  );
};

export { About as AboutComponent };

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg",
);

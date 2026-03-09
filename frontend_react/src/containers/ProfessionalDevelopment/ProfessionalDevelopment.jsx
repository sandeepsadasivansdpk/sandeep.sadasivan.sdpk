import React from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { professionalDevelopment as pdData } from "../../data";
import "./ProfessionalDevelopment.scss";

const ProfessionalDevelopment = ({ isPage = false }) => {
  return (
    <>
      <h2
        className="head-text"
        style={{
          paddingTop: "6rem",
        }}
      >
        <span>Professional</span> Development
      </h2>

      <div className="app__pd-container">
        <div className="app__pd-content">
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1 }}
          >
            <h3 className="bold-text">Continuous Learning</h3>
            <p className="p-text">{pdData.intro}</p>
          </motion.div>

          {isPage && (
            <>
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 1, delay: 0.2 }}
                className="app__pd-details"
              >
                <h3 className="bold-text">Key Development Areas</h3>
                <ul className="p-text">
                  {pdData.keyAreas.map((area) => (
                    <li key={area}>{area}</li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 1, delay: 0.4 }}
                className="app__pd-courses"
              >
                <h3 className="bold-text">Courses & Certifications</h3>
                <div className="app__pd-courses-list">
                  {pdData.courses.map((course, index) => (
                    <div key={index} className="app__pd-course-item">
                      <h4 className="bold-text">{course.title}</h4>
                      <p className="p-text">
                        <span className="app__pd-provider">
                          {course.provider}
                        </span>{" "}
                        - {course.year}
                      </p>
                      <p className="p-text">{course.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 1, delay: 0.6 }}
                className="app__pd-workshops"
              >
                <h3 className="bold-text">Workshops & Training</h3>
                <div className="app__pd-workshops-list">
                  {pdData.workshops.map((workshop, index) => (
                    <div key={index} className="app__pd-workshop-item">
                      <h4 className="bold-text">{workshop.title}</h4>
                      <p className="p-text">
                        <span className="app__pd-provider">
                          {workshop.provider}
                        </span>{" "}
                        - {workshop.year}
                      </p>
                      <p className="p-text">{workshop.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export { ProfessionalDevelopment as ProfessionalDevelopmentComponent };

export default AppWrap(
  MotionWrap(ProfessionalDevelopment, "app__professional-development"),
  "professional-development",
  "app__whitebg",
);

import React from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { reflectiveLearning as reflectiveData } from "../../data";
import "./ReflectiveLearning.scss";

const ReflectiveLearning = ({ isPage = false }) => {
  return (
    <>
      <h2
        className="head-text"
        style={{
          paddingTop: "6rem",
        }}
      >
        <span>Reflective Learning</span> Journey
      </h2>

      <div className="app__reflective-container">
        <div className="app__reflective-content">
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1 }}
          >
            <h3 className="bold-text">Professional Development</h3>
            <p className="p-text">{reflectiveData.intro}</p>
          </motion.div>

          {isPage && (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 1, delay: 0.2 }}
              className="app__reflective-details"
            >
              <h3 className="bold-text">Key Learning Areas</h3>
              <ul className="p-text">
                {reflectiveData.keyAreas.map((k) => (
                  <li key={k}>{k}</li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
};

export { ReflectiveLearning as ReflectiveLearningComponent };

export default AppWrap(
  MotionWrap(ReflectiveLearning, "app__reflective-learning"),
  "reflective-learning",
  "app__whitebg",
);

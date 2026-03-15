import React, { useState } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { professionalDevelopment as pdData } from "../../data";
import "./ProfessionalDevelopment.scss";

const ProfessionalDevelopment = ({ isPage = false }) => {
  const [showPreview, setShowPreview] = useState(true);
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
            <h3 className="bold-text">{pdData.title}</h3>
            <p
              className="p-text"
              dangerouslySetInnerHTML={{ __html: pdData.intro }}
            />
          </motion.div>
          {/* new content */}

          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1, delay: 0.2 }}
            className="app__pd-courses"
          >
            <h3 className="bold-text">Personal Learning Goals</h3>

            <div className="app__pd-courses-list">
              {pdData?.personalLearningGoals?.length > 0 &&
                pdData.personalLearningGoals.map((goal, index) => (
                  <div key={index} className="app__pd-course-item">
                    <h4 className="bold-text">
                      {index + 1}. {goal.subTitle}
                    </h4>
                    <p
                      className="p-text"
                      dangerouslySetInnerHTML={{ __html: goal.description }}
                    />
                    <h5 className="bold-text">Action Plan:</h5>
                    <ul>
                      {goal.actionPlan.map((action, idx) => (
                        <li key={idx} className="p-text">
                          {action}
                        </li>
                      ))}
                    </ul>
                    <h5 className="bold-text">Measurement:</h5>
                    <ul>
                      {goal.measurement.map((measure, idx) => (
                        <li key={idx} className="p-text">
                          {measure}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1, delay: 0.2 }}
            className="app__pd-courses"
          >
            <h3 className="bold-text">Professional Learning Goals</h3>
            <div className="app__pd-courses-list">
              {pdData?.professionalLearningGoals?.length > 0 &&
                pdData.professionalLearningGoals.map((goal, index) => (
                  <div key={index} className="app__pd-course-item">
                    <h4 className="bold-text">
                      {index + 1}. {goal.subTitle}
                    </h4>
                    <p
                      className="p-text"
                      dangerouslySetInnerHTML={{ __html: goal.description }}
                    />
                    <h5 className="bold-text">Action Plan:</h5>
                    <ul>
                      {goal.actionPlan.map((action, idx) => (
                        <li key={idx} className="p-text">
                          {action}
                        </li>
                      ))}
                    </ul>
                    <h5 className="bold-text">Measurement:</h5>
                    <ul>
                      {goal.measurement.map((measure, idx) => (
                        <li key={idx} className="p-text">
                          {measure}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1, delay: 0.8 }}
            className="app__pd-resume"
          >
            {showPreview && (
              <>
                <h3 className="bold-text">Curriculum Vitae</h3>

                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.1 }}
                  className="app__pd-resume-preview"
                >
                  <div className="app__pd-resume-images">
                    <img src="CV1.png" alt="Resume Preview" />
                    <img src="CV2.png" alt="Resume Preview" />
                  </div>
                </motion.div>
              </>
            )}
          </motion.div>
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

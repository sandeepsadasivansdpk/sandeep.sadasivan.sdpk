import React, { useState } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { professionalDevelopment as pdData } from "../../data";
import "./ProfessionalDevelopment.scss";

const ProfessionalDevelopment = ({ isPage = false }) => {
  const [expandedItems, setExpandedItems] = useState({});
  const [showPreview, setShowPreview] = useState(true);
  const toggleExpanded = (idx) => {
    setExpandedItems((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

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
            <h3>{pdData.title}</h3>
            <div className="app__pd-intro">
              <p
                className="p-text"
                dangerouslySetInnerHTML={{ __html: pdData.intro }}
              />
            </div>
          </motion.div>

          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1, delay: 0.2 }}
            className="app__pd-courses"
          >
            <h3>Personal Learning Goals</h3>

            <div className="app__pd-courses-list">
              {pdData?.personalLearningGoals?.length > 0 &&
                pdData.personalLearningGoals.map((goal, index) => (
                  <div key={index} className="app__pd-course-item">
                    <h4 className="bold-text">
                      {index + 1}. {goal.subTitle}
                    </h4>
                    <p
                      className={`p-text ${
                        expandedItems[index] ? "expanded" : "truncated"
                      }`}
                      dangerouslySetInnerHTML={{ __html: goal.description }}
                    />
                    <button
                      className="app__pd-see-more"
                      onClick={() => toggleExpanded(index)}
                    >
                      {expandedItems[index] ? "See less" : "See more"}
                    </button>
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
                      className={`p-text ${
                        expandedItems[`prof-${index}`]
                          ? "expanded"
                          : "truncated"
                      }`}
                      dangerouslySetInnerHTML={{ __html: goal.description }}
                    />
                    <button
                      type="button"
                      className="app__pd-see-more"
                      onClick={() => toggleExpanded(`prof-${index}`)}
                    >
                      {expandedItems[`prof-${index}`] ? "See less" : "See more"}
                    </button>
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
          <div className="app__pd-resume">
            {showPreview && (
              <>
                <h3 className="bold-text">Curriculum Vitae</h3>

                <div className="app__pd-resume-preview">
                  <div className="app__pd-resume-images">
                    <img src="CV1.png" alt="Resume Preview" />
                    <img src="CV2.png" alt="Resume Preview" />
                  </div>
                </div>
              </>
            )}
          </div>
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

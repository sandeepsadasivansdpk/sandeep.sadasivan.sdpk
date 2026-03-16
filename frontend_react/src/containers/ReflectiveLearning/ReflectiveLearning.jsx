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
          </motion.div>

          {isPage && (
            <>
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 1, delay: 0.2 }}
                className="app__pd-courses"
              >
                <div className="app__pd-courses-list">
                  {reflectiveData?.posts?.length > 0 &&
                    reflectiveData.posts.map((post, index) => (
                      <div key={index} className="app__pd-course-item">
                        <h4 className="bold-text">{post.title}</h4>
                        <p className="p-text">
                          <span className="app__pd-provider">
                            {post.provider}
                          </span>{" "}
                          - {post.year}
                        </p>
                        <p
                          className="p-text"
                          dangerouslySetInnerHTML={{ __html: post.description }}
                        />
                      </div>
                    ))}
                </div>
              </motion.div>
              {reflectiveData.peerLearningData && (
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="app__reflective-details"
                >
                  <h3 className="bold-text">
                    {reflectiveData.peerLearningData.title}
                  </h3>
                  <p
                    className="p-text"
                    dangerouslySetInnerHTML={{
                      __html: reflectiveData.peerLearningData.content,
                    }}
                  />
                </motion.div>
              )}
            </>
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

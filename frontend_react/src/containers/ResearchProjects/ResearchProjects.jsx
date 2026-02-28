import React from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { researchProjects as projectsData } from "../../data";
import "./ResearchProjects.scss";

const ResearchProjects = ({ isPage = false }) => {
  const projects = projectsData;

  return (
    <>
      <h2
        className="head-text"
        style={{
          paddingTop: "6rem",
        }}
      >
        Research & <span>Projects</span>
      </h2>

      <div className="app__research-container">
        <motion.div className="app__research-list">
          {projects.map((project, index) => (
            <motion.div
              key={project._id}
              className="app__research-item"
              whileInView={{ opacity: [0, 1], y: [50, 0] }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="bold-text">{project.title}</h3>
              <p className="p-text">{project.description}</p>
              {isPage && (
                <div className="app__research-skills">
                  <p className="p-text bold-text">Key Areas:</p>
                  <div className="app__research-tags">
                    {project.skills.map((skill) => (
                      <span key={skill} className="app__research-tag p-text">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export { ResearchProjects as ResearchProjectsComponent };

export default AppWrap(
  MotionWrap(ResearchProjects, "app__research-projects"),
  "research-projects",
  "app__primarybg",
);

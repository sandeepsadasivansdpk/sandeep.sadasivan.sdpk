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
        <span>Projects</span>
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
              <p style={{ marginLeft: "1rem" }}>
                {project.works.map((work, workIndex) => (
                  <React.Fragment key={workIndex}>
                    <p
                      className="p-text bold-text"
                      dangerouslySetInnerHTML={{ __html: work.subTitle }}
                    />
                    <p
                      className="p-text"
                      dangerouslySetInnerHTML={{ __html: work.description }}
                    />

                    {work.descriptionList && (
                      <ul
                        className="p-text"
                        style={{ marginLeft: "2rem", marginBottom: "1rem" }}
                      >
                        {work.descriptionList.map((item, itemIndex) => (
                          <li key={itemIndex} className="p-text">
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}

                    {work.descriptionOrderedList && (
                      <ol
                        className="p-text"
                        style={{ marginLeft: "2rem", marginBottom: "1rem" }}
                      >
                        {work.descriptionOrderedList.map((item, itemIndex) => (
                          <li key={itemIndex} className="p-text">
                            <p className="bold-text">{item.step}</p>
                            <p className="p-text">{item.details}</p>
                          </li>
                        ))}
                      </ol>
                    )}
                  </React.Fragment>
                ))}
              </p>

              {isPage && (
                <div className="app__research-skills">
                  <p className="p-text bold-text">Key Areas:</p>
                  <div className="app__research-tags">
                    {project.skills.map((skill) => (
                      <React.Fragment key={skill.name}>
                        <p>
                          <span className="app__research-tag p-text">
                            {skill.name}
                          </span>
                          <p className="p-text" style={{ marginTop: "1rem" }}>
                            {skill.description}
                          </p>
                        </p>
                      </React.Fragment>
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

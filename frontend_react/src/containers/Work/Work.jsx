import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor } from "../../utils";
import { works as worksData, experiences as experiencesData } from "../../data";
import "./Work.scss";

const Work = ({ isPage = false }) => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [filterWorks, setFilterWorks] = useState([]);
  const [works, setWorks] = useState([]);
  const [experiences, setExperiences] = useState([]);

  const [touched, setTouched] = useState(null);

  useEffect(() => {
    setWorks(worksData);
    setFilterWorks(worksData);
    setExperiences(experiencesData);
  }, []);

  const handleFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard({ opacity: 0, scale: 0.5, y: -100 });

    setTimeout(() => {
      setAnimateCard({ opacity: 1, scale: 1, y: 0 });
      if (item === "All") {
        setFilterWorks(works);
      } else {
        setFilterWorks(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2
        className="head-text"
        style={{
          paddingTop: isPage ? "6rem" : "0",
        }}
      >
        My creative <span>Portfolio</span> section
      </h2>

      <div className="app__work-filter">
        {["All", "Manager"].map((item, index) => (
          <div
            key={index}
            onClick={() => handleFilter(item)}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
        onClick={() => setTouched(null)}
      >
        {filterWorks.map((work, index) => (
          <motion.div
            className={`app__work-item app__flex ${
              touched === index ? "app__work-touched-nowrap" : ""
            }`}
            key={index}
            onClick={() => setTouched(index)}
            onTouchStart={() => setTouched(index)}
          >
            <div className="app__work-img app__flex">
              <img src={urlFor(work.imgUrl)} alt={work.title} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className={`app__work-hover app__flex ${
                  touched === index ? "app__work-touched" : ""
                }`}
              >
                {work.projectLink &&
                  work.projectLink.toLowerCase() !== "na" && (
                    <a
                      href={work.projectLink}
                      target="_blank"
                      rel="noreferrer"
                      className={`app__flex ${
                        work.projectLink.toLowerCase() === "na" ? "none" : ""
                      }`}
                    >
                      <motion.div
                        whileInView={{ scale: [0, 1] }}
                        whileHover={{ scale: [1, 0.9] }}
                        transition={{ duration: 0.25 }}
                        className="app__flex"
                      >
                        <AiFillEye />
                      </motion.div>
                    </a>
                  )}
                {work.codeLink && work.codeLink.toLowerCase() !== "na" && (
                  <a
                    href={work.codeLink}
                    target="_blank"
                    rel="noreferrer"
                    className="app__flex"
                  >
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                )}
              </motion.div>
            </div>
            <div className="app__work-content app__flex">
              <h4 className="bold-text" title={work.title}>
                {work.title}
              </h4>
              <p
                className="p-text"
                style={{ marginTop: 10 }}
                title={work.description}
              >
                {work.description}
              </p>
              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {isPage && (
        <div className="app__work-details">
          {filterWorks.map((work, idx) => (
            <div className="app__work-detail" key={`detail-${idx}`}>
              <h3 className="bold-text">{work.title}</h3>
              <p className="p-text">{work.description}</p>
              <p className="p-text">Tags: {work.tags?.join(", ")}</p>
              <div className="app__work-links">
                {work.projectLink &&
                  work.projectLink.toLowerCase() !== "na" && (
                    <a href={work.projectLink} target="_blank" rel="noreferrer">
                      View project
                    </a>
                  )}
                {work.codeLink && work.codeLink.toLowerCase() !== "na" && (
                  <a href={work.codeLink} target="_blank" rel="noreferrer">
                    View code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
      {isPage && experiences.length > 0 && (
        <section className="app__experiences-section">
          <h2 className="head-text">Company Experience</h2>
          <div className="app__experiences-list">
            {experiences.map((exp) => (
              <div className="app__experience-year" key={exp._id}>
                <h3 className="bold-text">{exp.year}</h3>
                <div className="app__experience-works">
                  {exp.works.map((w) => (
                    <div className="app__experience-item" key={w._id}>
                      <h4 className="bold-text">{w.company}</h4>
                      {w.name && <p className="p-text">Role: {w.name}</p>}
                      {w.desc && <p className="p-text">{w.desc}</p>}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export { Work as WorkComponent };

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg",
);

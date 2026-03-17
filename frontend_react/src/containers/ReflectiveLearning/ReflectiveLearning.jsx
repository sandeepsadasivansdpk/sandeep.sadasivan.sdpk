import React, { useState } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { reflectiveLearning as reflectiveData } from "../../data";
import "./ReflectiveLearning.scss";
import Testimonial from "../Testimonial/Testimonial";

const ReflectiveLearning = ({ isPage = false }) => {
  const [expandedItems, setExpandedItems] = useState(new Set());
  const [peerExpanded, setPeerExpanded] = useState(false);

  const toggleExpanded = (index) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };

  const togglePeerExpanded = () => {
    setPeerExpanded((prev) => !prev);
  };

  const truncateText = (text, maxLength = 150) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  const normalizeLineBreaks = (html) => html.replace(/<br\s*\/?>/gi, "\n");
  const stripHtmlTags = (html) => html.replace(/<[^>]+>/g, "");

  const getPreviewHtml = (html, maxLength = 150) => {
    const normalized = normalizeLineBreaks(html);
    const plain = stripHtmlTags(normalized);

    if (plain.length <= maxLength) return html;

    const truncated = truncateText(plain, maxLength);
    return truncated.replace(/\n/g, "<br/>");
  };
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
            <h2 className="">Professional Development</h2>
          </motion.div>

          {isPage && (
            <>
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 1, delay: 0.2 }}
                className="app__reflective-posts"
              >
                <div className="app__reflective-posts-list">
                  {reflectiveData?.posts?.length > 0 &&
                    reflectiveData.posts.map((post, index) => (
                      <div key={index} className="app__reflective-post-item">
                        <h4 className="bold-text">{post.title}</h4>
                        {/* <p className="p-text">
                          <span className="app__reflective-provider">
                            {post.provider}
                          </span>{" "}
                          - {post.year}
                        </p> */}
                        <div className="app__reflective-post-description">
                          <p
                            className="p-text"
                            dangerouslySetInnerHTML={{
                              __html: expandedItems.has(index)
                                ? post.description
                                : getPreviewHtml(post.description, 150),
                            }}
                          />
                          {stripHtmlTags(normalizeLineBreaks(post.description))
                            .length > 150 && (
                            <button
                              className="app__reflective-see-more-btn"
                              onClick={() => toggleExpanded(index)}
                            >
                              {expandedItems.has(index)
                                ? "See Less"
                                : "See More"}
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                </div>
              </motion.div>
              <h2>{reflectiveData?.peerLearningData?.title}</h2>
              {reflectiveData.peerLearningData && (
                <div className="app__reflective-posts">
                  <div className="app__reflective-post-item">
                    <div className="app__reflective-post-description">
                      {(() => {
                        const raw = reflectiveData.peerLearningData.content;
                        const normalized = normalizeLineBreaks(raw);
                        const stripped = stripHtmlTags(normalized);
                        const isLong = stripped.length > 150;
                        const html =
                          peerExpanded || !isLong
                            ? raw
                            : getPreviewHtml(raw, 900);
                        return (
                          <>
                            <p
                              className="p-text"
                              dangerouslySetInnerHTML={{ __html: html }}
                            />
                            {isLong && (
                              <button
                                className="app__reflective-see-more-btn"
                                onClick={togglePeerExpanded}
                              >
                                {peerExpanded ? "See Less" : "See More"}
                              </button>
                            )}
                          </>
                        );
                      })()}
                    </div>
                  </div>
                </div>
              )}

              <Testimonial />
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

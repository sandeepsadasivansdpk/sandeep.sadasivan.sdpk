import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  HomePage,
  AboutPage,
  WorkPage,
  SkillsPage,
  TestimonialPage,
  ContactPage,
} from "./pages";

import Layout from "./layouts/Layout";
import "./App.scss";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/testimonials" element={<TestimonialPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

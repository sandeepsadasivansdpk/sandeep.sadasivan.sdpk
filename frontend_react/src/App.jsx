import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  HomePage,
  AboutPage,
  WorkPage,
  ExperiencePage,
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
          <Route path="/experiences" element={<ExperiencePage />} />
          <Route path="/testimonials" element={<TestimonialPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  AboutPage,
  ReflectiveLearningPage,
  ProjectsPage,
  ProfessionalDevelopmentPage,
} from "./pages";

import Layout from "./layouts/Layout";
import "./App.scss";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<AboutPage />} />
          <Route
            path="/reflective-learning"
            element={<ReflectiveLearningPage />}
          />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route
            path="/professional-development"
            element={<ProfessionalDevelopmentPage />}
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

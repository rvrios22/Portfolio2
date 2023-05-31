import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import Project from "./routes/Project/Project.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="project/:id" element={<Project />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import WeatherApp from "./components/weather-app/WeatherApp.jsx";
import Wordle from "./components/wordle/Wordle.jsx";
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import Project from "./routes/Project/Project.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="project/:id" element={<Project />} />
        <Route path="/weather-app" element={<WeatherApp />} />
        <Route path="/wordle" element={<Wordle />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

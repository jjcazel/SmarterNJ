// import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { MainNavigation } from "./components/MainNavigation";
import { SubNavigation } from "./components/SubNavigation";
import { Home } from "./pages/Home";
import { NewsPage } from "./pages/News";

function App() {
  return (
    <Router>
      <>
        <MainNavigation />
        <SubNavigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<NewsPage />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;

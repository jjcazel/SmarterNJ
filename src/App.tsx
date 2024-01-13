// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { MainNavigation } from "./components/MainNavigation";
import { SubNavigation } from "./components/SubNavigation";
import { Home } from "./pages/Home";

function App() {
  return (
    <Router>
      <>
        <MainNavigation />
        <SubNavigation />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes for other pages */}
        </Routes>
      </>
    </Router>
  );
}

export default App;

import React from "react";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MultiStepForm from "./pages/home";

function App() {
  return (
    <Router>
    <Routes>
    <Route path="/" element={<MultiStepForm/>}/>
    {/* <Route path="/thanks" element={<ThankYou/>}/> */}
    </Routes>
    </Router>
  );
}

export default App;

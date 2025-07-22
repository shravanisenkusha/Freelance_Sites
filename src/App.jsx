import React from "react";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";
import IndividualProduct from "./pages/IndividualProduct";
import IndividualService from "./pages/IndividualService";
import Testimonials from "./pages/Testimonials";
import ComingSoon from "./pages/ComingSoon";

function App() {
  return (
    <Router>
      <div className="font-sans">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/comingsoon" element={<ComingSoon />} />
          <Route path="/product/:id" element={<IndividualProduct />} />
          <Route path="/service/:id" element={<IndividualService />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

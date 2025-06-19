import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Doctors from "./components/Doctors";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Eligibility from "./components/Eligibility";
import Timeline from "./components/Timeline";
import Apply from "./components/Apply";
import NavPage from "./components/NavPage";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <NavPage />
        <main>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/eligibility" element={<Eligibility />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/timeline" element={<Timeline />} />
            {/* Uncomment below line for 404 Not Found page */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

// src/routes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/Navbar/About";
// import Menu from "./components/Menu";
// import Events from "./components/Events";
// import Gallery from "./components/Gallery";
// import Contact from "./components/Contact";
// import Login from "./components/Login";
// import Signup from "./components/Signup";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    {/* <Route path="/menu" element={<Menu />} />
    <Route path="/events" element={<Events />} />
    <Route path="/gallery" element={<Gallery />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} /> */}
  </Routes>
);

export default AppRoutes;

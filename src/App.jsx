// src/App.jsx
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes";
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <AppRoutes />

    </BrowserRouter>
  );
}

export default App;

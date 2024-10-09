import React from "react";
import "./App.css";
import "./mobile/mobile.css";
import Header from "./Header/Header";
import Main from "./MainContent/Main";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Module1 from "./Module/Module1";
import { Footer } from "./FooterSection/Footer";
import { NavBar } from "./NavBar/NavBars";

function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Module1" element={<Module1 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

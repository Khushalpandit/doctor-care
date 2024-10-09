import { AboutUS } from "../AboutUs/AboutUs";
import { Appointment } from "../AppointmentSection/Appointment";
import { Footer } from "../FooterSection/Footer";
import Header from "../Header/Header";
import { HeroSection } from "../HeroSection/HeroSection";
import { Services } from "../Services/Services";
import { NavBar } from "../NavBar/NavBars";


import { BrowserRouter, Route, Routes } from "react-router-dom";

const Main = () => {
  return (
    <>
      <HeroSection />
      <div className="z-index container">
        <div className="container-fluid rounded-2 p-4">
          <div className="row text-center">
            <div className="col-12 col-md-4 border-end">
              <h1>+3.500</h1>
              <p className="text-success fs-6">Patients treated</p>
            </div>
            <div className="col-12 col-md-4 border-end">
              <h1>+15</h1>
              <p className="text-success fs-6">Experts available</p>
            </div>
            <div className="col-12 col-md-4">
              <h1>+10</h1>
              <p className="text-success fs-6">Years in the market</p>
            </div>
          </div>
        </div>
      </div>

      <Services />
      <AboutUS />
      <Appointment />
      
    </>
  );
};

export default Main;

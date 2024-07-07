"use client"
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import NavbarComponent from "./Component/Navbar";
import Clients from "./section/Clients";
import Pixelgrade from "./section/Pixel";
import FooterComponent from "./Component/Footer";
import Manage from "./section/Manage";
import Design from "./section/Design";
import Demo from "./section/Demo";
import BusinessStats from "./section/BussinessStats";
import MeetAllCustomers from "./section/AllCustomer";
import Marketing from "./section/Market";
import ScrollToTopButton from "./Component/ScrollToTopButton";

import { CarouselDemo } from "./section/Coursel";

const Home: React.FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 120,
    });
  }, []);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <main className={`min-h-screen ${isDarkTheme ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
      <div className="bg-white shadow-md fixed w-full z-10 top-0">
        <NavbarComponent />
      </div>

      <header className="bg-gray-200 pt-10">
        <CarouselDemo />
      </header>

      <section className="bg-white">
        <Clients />
        <Manage />
        <Pixelgrade />
      </section>

      <section className="bg-gray-200">
        <BusinessStats />
      </section>

      <section className="bg-white">
        <Design />
      </section>

      <section className="bg-gray-200">
        <MeetAllCustomers />
      </section>

      <section className="bg-white pb-5">
        <Marketing />
      </section>

      <section className="bg-gray-200 mt-5">
        <Demo />
      </section>

      <footer className="bg-gray-800">
        <FooterComponent />
      </footer>

      <ScrollToTopButton />

      {/* Button to toggle theme */}
      <button
        className={`fixed bottom-4 right-4 px-4 py-2 bg-white text-gray-800 border border-gray-800 rounded-md focus:outline-none ${isDarkTheme ? "dark" : "light"}`}
        onClick={toggleTheme}
      >
        {isDarkTheme ? "Switch to Light Theme" : "Switch to Dark Theme"}
      </button>
    </main>
  );
};

export default Home;

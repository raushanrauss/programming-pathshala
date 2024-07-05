"use client"
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import NavbarComponent from "./Component/Navbar";

import Clients from "./section/Clients";
import Pixelgrade from "./section/Pixel";

import FooterComponent from "./Component/Footer";
import Manage from "./section/Manage";
import Design from "./section/Design";


import Demo from "./section/Demo";
import Hero from "./section/Hero ";
import BusinessStats from "./section/BussinessStats";
import MeetAllCustomers from "./section/AllCustomer";
import Marketing from "./section/Market";

const Home: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 120,
    });
  }, []);

  return (
    <main>
      <header className="bg-silver">
        <NavbarComponent />
        <section className="bg-silver">
          <Hero />
        </section>
      </header>
      <section className="bg-white">
        <Clients />
        <Manage />
        <Pixelgrade />
      </section>
      <section className="bg-silver">
        <BusinessStats />
      </section>
      <section className="bg-white">
        <Design />
      </section>
      <section className="bg-silver">
        <MeetAllCustomers />
      </section>
      <section className="bg-white pb-5">
        <Marketing />
      </section>
      <section className="bg-silver mt-5">
        <Demo />
      </section>
      <footer className="bg-secondary">
        <FooterComponent />
      </footer>
    </main>
  );
}

export default Home;

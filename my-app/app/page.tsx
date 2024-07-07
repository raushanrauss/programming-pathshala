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
import CountUpSection from "./Component/CounterUpSection";
import ThemeSwitch from "./Component/ThemeSwitch";

const Home: React.FC = () => {


  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 120,
    });
  }, []);

 

  return (
    <main className="dark:bg-slate-800">
      <div className="bg-white shadow-md fixed w-full z-10 top-0">
        <NavbarComponent />
        </div>
      <div className="bg-white dark:bg-slate-800">
        <CountUpSection endValue={1000} />
      </div>
      
      <header className="bg-slate-200  dark:text-white">
        <CarouselDemo />
      </header>
      <section className=" dark:bg-slate-800">
     <Clients />
        <Manage />
        <Pixelgrade />
        </section>
       <section>
        <BusinessStats />
      </section>
      <section className="">
        <Design />
      </section>

      <section className="">
        <MeetAllCustomers />
      </section>

      <section className="">
        <Marketing />
      </section>

      <section className=" dark:bg-slate-800">
        <Demo />
      </section>

  

      <ScrollToTopButton />
      {/* <div className="  fixed  top-0">
        <ThemeSwitch />
      </div> */}
      
    </main>
  );
};

export default Home;

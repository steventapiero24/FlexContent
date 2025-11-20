// Home.jsx - Sin cambios, ya está perfecto
import React, { useLayoutEffect } from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import SobreNosotros from "../components/SobreNosotros";
import Benefits from "../components/Projects";
import CardPrices from "../components/Atomos/CardPrices";
import SobreMi from "../components/SobreMi";
import Comparation from "../components/ForWhat";
import OtherServices from "../components/OtherServices";
import Footer from "../components/Footer";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const Home = () => {
  useLayoutEffect(() => {
    if (ScrollSmoother.get()) ScrollSmoother.get().kill();

    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 2, 
      effects: true,
    });
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <Nav />
        <section id="hero">
          <Hero />
        </section>
        <section id="proyectos">
          <Benefits />
        </section>
        <section id="sobre-nosotros">
          <SobreNosotros />
        </section>
        <section id="precios">
          <CardPrices />
        </section>
        <section id="sobre-mi">
          <SobreMi />
        </section>
        <section id="comparacion">
          <Comparation />
        </section>
        <section id="otros-servicios">
          <OtherServices />
        </section>
        <section id="contacto">
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default Home;
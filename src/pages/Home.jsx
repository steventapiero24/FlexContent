// Home.jsx - Sin cambios, ya está perfecto
import React, { useLayoutEffect } from "react";
import Nav from "../components/Atomos/video/Nav";
import Hero from "../components/Atomos/video/Hero";
import SobreNosotros from "../components/Atomos/video/SobreNosotros";
import Benefits from "../components/Atomos/video/Projects";
import SobreMi from "../components/Atomos/video/SobreMi";
import OtherServices from "../components/Atomos/video/OtherServices";
import Footer from "../components/Atomos/video/Footer";

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
        <Nav
          menuItems={[
            { label: 'Inicio', href: '#hero' },
            { label: 'mis proyectos', href: '#proyectos' },
            { label: 'Sobre mi', href: '#sobre-nosotros' },
            { label: 'Otros servicios', href: '#otros-servicios' },
            { label: 'Video', to: '/video' },
            { label: 'Contacto', href: '#contacto' }
          ]}
        />
        <section id="hero">
          <Hero />
        </section>
        <section id="proyectos">
          <Benefits />
        </section>
        <section id="sobre-nosotros">
          <SobreNosotros />
        </section>
        <section id="sobre-mi">
          <SobreMi />
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
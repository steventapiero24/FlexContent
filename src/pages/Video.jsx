import React, { useLayoutEffect } from "react";
import Nav from "../components/Atomos/video/Nav";
import VideoHero from "../components/Atomos/video/VideoHero";
import VideoProjects from "../components/Atomos/video/VideoProjects";
import VideoSobreMi from "../components/Atomos/video/VideoSobreMi";
import VideoServicios from "../components/Atomos/video/VideoServicios";
import Footer from "../components/Atomos/video/Footer";
import "./Video.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const Video = () => {
  useLayoutEffect(() => {
    if (ScrollSmoother.get()) ScrollSmoother.get().kill();

    ScrollSmoother.create({
      wrapper: "#smooth-wrapper-video",
      content: "#smooth-content-video",
      smooth: 2,
      effects: true,
    });
  }, []);

  return (
    <div id="smooth-wrapper-video">
      <div id="smooth-content-video">
        <Nav
          menuItems={[
            { label: 'Inicio', href: '#video-hero' },
            { label: 'Portafolio', href: '#video-portafolio' },
            { label: 'Sobre el servicio', href: '#video-sobremi' },
            { label: 'Servicios', href: '#video-servicios' },
            { label: 'Volver', to: '/' },
            { label: 'Contacto', href: '#video-contacto' }
          ]}
        />
        <section id="video-hero">
          <VideoHero />
        </section>
        <section id="video-portafolio">
          <VideoProjects />
        </section>
        <section id="video-sobremi">
          <VideoSobreMi />
        </section>
        <section id="video-servicios">
          <VideoServicios />
        </section>
        <section id="video-contacto">
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default Video;



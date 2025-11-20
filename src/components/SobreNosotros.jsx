import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CountUp from "./Atomos/CountUp";
import Carousel from "./Atomos/Carousel";

gsap.registerPlugin(ScrollTrigger);

const SobreNosotros = () => {
  const countersRef = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // --- Animación de los contadores
      gsap.from(countersRef.current, {
        y: -80,
        opacity: 0,
        duration: 1.8,
        ease: "power4.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          end: "bottom 70%",
          scrub: 1.2,
        },
      });

      const handleMouseMove = (e) => {
        const { innerWidth, innerHeight } = window;
        const x = (e.clientX / innerWidth - 0.5) * 20;
        const y = (e.clientY / innerHeight - 0.5) * 20;

        gsap.to(countersRef.current, {
          x: x,
          y: y,
          duration: 1.2,
          ease: "power3.out",
        });
      };

      window.addEventListener("mousemove", handleMouseMove);

      // --- Animación del bloque flotante ---
      const floatingEl = containerRef.current.querySelector(".container__content-floating");
      const floatingElements = floatingEl.querySelectorAll("h5, h3, p");

      // Animación del contenedor completo
      gsap.from(floatingEl, {
        opacity: 0,
        y: 80,
        duration: 1.4,
        ease: "power4.out",
        scrollTrigger: {
          trigger: floatingEl,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // Animación secuencial interna
      gsap.from(floatingElements, {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: floatingEl,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, containerRef);

    return () => ctx.revert();
  }, []);




  return (
    <div ref={containerRef} className="container flex flex-col container__sobrenosotros">
      <div className="Container__counters width-100 flex flex-center flex-around ">
        {[
          { to: 30, text: "Webs diseñadas" },
          { to: 220, text: "Contenidos generados" },
          { to: 30, text: "Marcas creadas" },
          { to: 6, text: "Años de experiencia" },
        ].map((item, i) => (
          <div
            key={i}
            ref={(el) => (countersRef.current[i] = el)}
            className="flex flex-col flex-center justify-center counter-item"
          >
            <CountUp
              from={0}
              to={item.to}
              separator=","
              direction="up"
              duration={1}
              className="count-up-text"
            />
            <h3>{item.text}</h3>
          </div>
        ))}
      </div>

      <div className="container__Sobrenosotroscontent">
        <div className="container__content-floating width-50">
          <h5>Tu negocio necesita verse bien para vender.</h5>
          <h3>
            Una presencia digital, profesional, coherente y estratégica
          </h3>
          <p>
            Por eso creé este pack:
            Un servicio mensual donde me encargo de absolutamente todo, para que tu negocio tenga una presencia digital que atraiga clientes desde el primer mes
          </p>
          <button className="btn btn-secondary width-100">Agendar una llamada</button>
        </div>

        <div className="container__content-Text width-50">
          <Carousel
            baseWidth={600}
            autoplay={true}
            autoplayDelay={4000}
            pauseOnHover={true}
            loop={true}
            round={false}
          />
        </div>
      </div>
    </div>
  );
};

export default SobreNosotros;

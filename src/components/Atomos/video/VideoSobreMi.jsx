import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CountUp from "../CountUp";
import Carousel from "../Carousel";

gsap.registerPlugin(ScrollTrigger);

const VideoSobreMi = () => {
  const countersRef = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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

      const floatingEl = containerRef.current.querySelector(".container__content-floating");
      const floatingElements = floatingEl.querySelectorAll("h5, h3, p");

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
    <div ref={containerRef} className="container flex flex-col container__sobrenosotros" id="video-sobremi">
      <div className="Container__counters width-100 flex flex-center flex-around ">
        {[
          { to: 50, text: "Videos producidos" },
          { to: 200, text: "Horas editadas" },
          { to: 25, text: "Clientes satisfechos" },
          { to: 5, text: "Años especializados" },
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
          <h5>Tu visión, amplificada en video.</h5>
          <h3>
            Donde la creatividad y la técnica se unen
          </h3>
          <p>
            Sabemos que el contenido de video es el futuro. Por eso, cada frame cuenta una historia, cada transición es precisa y cada sonido eleva el impacto. Combinamos edición técnica de nivel profesional con storytelling que conecta emocionalmente con tu audiencia.
          </p>
          <button
            className="btn btn-secondary width-100"
            onClick={() =>
              window.open(
                "https://wa.me/34614054834?text=Hola,%20me%20gustaría%20obtener%20más%20información%20sobre%20edición%20de%20video",
                "_blank"
              )
            }
          >
            Agendar una llamada
          </button>
        </div>
        <div className="container__content-Text width-50">
          <Carousel
            className="desktop"
            baseWidth={600}
            autoplay={true}
            autoplayDelay={4000}
            pauseOnHover={true}
            loop={true}
            round={false}
          />
          <Carousel
            className="mobile"
            baseWidth={360}
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

export default VideoSobreMi;

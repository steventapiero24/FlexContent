import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { imagesBenefits } from '../utils/bd';
import LogoLoop from './Atomos/LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiLinkedin, SiInstagram, SiFacebook, SiTiktok } from 'react-icons/si';

gsap.registerPlugin(ScrollTrigger);

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiLinkedin />, title: "React", href: "https://Linkedin.com" },
  { node: <SiInstagram />, title: "React", href: "https://Instagram.com" },
  { node: <SiFacebook />, title: "React", href: "https://SiFacebook.com" },
  { node: <SiTiktok />, title: "React", href: "https://SiTiktok.com" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

const Benefits = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imagesRef = useRef([]);

 useEffect(() => {
  const ctx = gsap.context(() => {

    // Animación de texto
    gsap.from(textRef.current.querySelectorAll('h2, p'), {
      y: -80,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "top 40%",
        toggleActions: "play none none reverse"
      }
    });

    // Animaciones de imágenes
    imagesRef.current.forEach((img) => {
      const imageEl = img.querySelector('img');
      gsap.fromTo(
        imageEl,
        {
          x: -80,
          opacity: 0,
          clipPath: 'inset(0 100% 0 0)',
          webkitClipPath: 'inset(0 100% 0 0)'
        },
        {
          x: 0,
          opacity: 1,
          clipPath: 'inset(0 0% 0 0)',
          webkitClipPath: 'inset(0 0% 0 0)',
          ease: "power2.out",
          scrollTrigger: {
            trigger: img,
            start: "top 90%",
            end: "80% 60%",
            scrub: true,
            markers: false,
          }
        }
      );
    });

    // Pin solo en pantallas grandes
    ScrollTrigger.matchMedia({
      "(min-width: 768px)": function() {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          pin: textRef.current,
          pinSpacing: false
        });
      },
      "(max-width: 767px)": function() {
        // No hacemos nada, el pin queda desactivado en móviles
      }
    });

  }, sectionRef);

  return () => ctx.revert();
}, []);


  return (
    <div className="container__benefits" ref={sectionRef} id='queincluye'>
      <div className="container__benefits-content flex">
        <div ref={textRef} className="width-50 fixed container__benefits-content-text flex-col">
          <h2>¿Qué incluye este pack?</h2>
          <p>No se trata solo de publicar por publicar.
            Es contenido que:
            </p>
            <ul>
              <li>
                  ✔ Construye marca
              </li>
              <li>
                  ✔ Aumenta la confianza
              </li>
              <li>
                ✔ Atrae mejores clientes
              </li>
              <li>
                ✔ Cuenta una historia
              </li>
              <li>
                ✔ Se ve profesional
              </li>
            </ul>
            <p>
              Lo mejor es que tú no debes hacer nada, trabajamos de la mano pero yo me encargo de todo.
            </p>
          <div style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
            <LogoLoop
              logos={techLogos}
              speed={120}
              direction="left"
              logoHeight={48}
              gap={40}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="rgba(17, 17, 18, 0.952)"
              ariaLabel="Technology partners"
            />
          </div>
        </div>
        <div className="width-50 wrapper container__benefits-content-images">
          <div>
            {imagesBenefits.map((image, index) => (
              <div
                key={index}
                ref={el => imagesRef.current[index] = el}
                className="container__benefits-content-images-content"
              >
                <img src={image.url} alt={image.title || ""} />
                <h3>{image.title}</h3>
                <ul>
                  {image.description.map((item, index) => (
                    <li key={index}>
                      <div className='viñeta'></div>
                      {item}
                      </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;

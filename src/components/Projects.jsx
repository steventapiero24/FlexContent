import React, { useEffect, useRef, useState } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { imagesBenefits } from '../utils/bd';
import LogoLoop from './Atomos/LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiLinkedin, SiInstagram, SiFacebook, SiTiktok, SiFigma } from 'react-icons/si';
import Box from '@mui/material/Box';
import CardPorfolio from './Atomos/CardPorfolio';

const style = {
  position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
  width: 400, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4,
};

gsap.registerPlugin(ScrollTrigger);

const techLogos = [
  { node: <SiFigma />, title: "Figma", href: "https://figma.com" },
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" }
];

const Benefits = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const titleRef = useRef(null);
  const followerRef = useRef(null);
  const imagesRef = useRef([]);
  const imageFollowersRef = useRef([]);


  useEffect(() => {
    const ctx = gsap.context(() => {
      const follower = followerRef.current;
      const title = titleRef.current;

      // Centramos el punto de anclaje
      gsap.set(follower, { xPercent: -50, yPercent: -50 });

      // Centramos cada follower de imagen
      imageFollowersRef.current.forEach(follower => {
        if (follower) gsap.set(follower, { xPercent: -50, yPercent: -50 });
      });

      const handleMove = (e) => {
        const rect = textRef.current.getBoundingClientRect();
        
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        gsap.to(follower, {
          x: x,
          y: y,
          duration: 0.1, 
          ease: "none"
        });
      };

      const handleEnter = () => {
        gsap.to(follower, { autoAlpha: 1, duration: 0.2 });
      };

      const handleLeave = () => {
        gsap.to(follower, { autoAlpha: 0, duration: 0.2 });
      };

      if (title) {
        title.addEventListener("mousemove", handleMove);
        title.addEventListener("mouseenter", handleEnter);
        title.addEventListener("mouseleave", handleLeave);
      }

      // Cursor follower para imágenes de proyectos - cada imagen tiene su propio follower
      imagesRef.current.forEach((imageContainer, index) => {
        if (!imageContainer) return;
        
        const img = imageContainer.querySelector('img');
        const imageFollower = imageFollowersRef.current[index];
        if (!img || !imageFollower) return;

        const imageTitle = imagesBenefits[index]?.title || '';

        const handleImageMove = (e) => {
          const rect = imageContainer.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top + 50; // Offset para que aparezca más abajo

          gsap.to(imageFollower, {
            x: x,
            y: y,
            duration: 0.5, // Delay pequeño en el seguimiento
            ease: "power2.out"
          });
        };

        const handleImageEnter = (e) => {
          if (imageFollower) {
            imageFollower.textContent = imageTitle;
            // Posicionar inicialmente donde entra el cursor
            const rect = imageContainer.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top + 50; // Offset para que aparezca más abajo
            gsap.set(imageFollower, { x: x, y: y });
          }
          gsap.fromTo(imageFollower, 
            { autoAlpha: 0, scale: 0.8 },
            { autoAlpha: 1, scale: 1, duration: 0.3, ease: "back.out(1.7)" }
          );
        };

        const handleImageLeave = () => {
          gsap.to(imageFollower, { autoAlpha: 0, scale: 0.8, duration: 0.25, ease: "power2.in" });
        };

        img.addEventListener("mousemove", handleImageMove);
        img.addEventListener("mouseenter", handleImageEnter);
        img.addEventListener("mouseleave", handleImageLeave);
      });

      gsap.from(textRef.current.querySelectorAll('h2, p'), {
        y: -50, opacity: 0, duration: 0.8, stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      ScrollTrigger.matchMedia({
        "(min-width: 768px)": function () {
          ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom bottom",
            pinSpacing: false
          });
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="container__benefits" ref={sectionRef} id='queincluye'>
      <div className="container__benefits-content flex flex-col">
        
        <div 
          ref={textRef} 
          className="width-100 container__benefits-content-text flex-col"
          style={{ position: 'relative' }} 
        >
          <span ref={followerRef} className="cursor-follower">Portafolio</span>
          
          <h2 
            ref={titleRef} 
            style={{ 
              cursor: 'default',
              display: 'inline-block', 
              width: 'fit-content'
            }}
          >
            PROYECTOS
          </h2>

          <div style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
            <LogoLoop logos={techLogos} speed={120} direction="left" logoHeight={48} gap={40} pauseOnHover scaleOnHover fadeOut fadeOutColor="rgba(17, 17, 18, 0.952)" />
          </div>
        </div>

        <div className="width-100 wrapper container__benefits-content-images">
            {imagesBenefits.map((image, index) => (
              <div key={index} ref={el => imagesRef.current[index] = el} className="container__benefits-content-images-content">
                <span ref={el => imageFollowersRef.current[index] = el} className="cursor-follower"></span>
                <img src={image.url} alt={image.title || ""} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
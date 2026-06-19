import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { imagesBenefits } from '../../../utils/bd';
import LogoLoop from '../LogoLoop';
import { SiReact, SiTailwindcss, SiDavinciresolve, SiCinema4D, SiAdobepremierepro, SiAdobeaftereffects, SiAdobephotoshop } from 'react-icons/si';
import CardPorfolio from '../CardPorfolio';

gsap.registerPlugin(ScrollTrigger);

const techLogos = [
  { node: <SiAdobepremierepro />, title: "Premiere Pro", href: "https://www.adobe.com/products/premiere.html" },
  { node: <SiAdobeaftereffects />, title: "After Effects", href: "https://www.adobe.com/products/aftereffects.html" },
  { node: <SiCinema4D />, title: "Cinema 4D", href: "https://www.maxon.net/en-us/products/cinema-4d/" },
  { node: <SiDavinciresolve />, title: "Davinci Resolve", href: "https://www.blackmagicdesign.com/products/davinciresolve" },
  { node: <SiAdobephotoshop />, title: "Photoshop", href: "https://www.adobe.com/products/photoshop.html" },
];

const VideoProjects = () => {
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

      gsap.set(follower, { xPercent: -50, yPercent: -50 });

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

      imagesRef.current.forEach((imageContainer, index) => {
        if (!imageContainer) return;
        
        const img = imageContainer.querySelector('img');
        const imageFollower = imageFollowersRef.current[index];
        if (!img || !imageFollower) return;

        const imageTitle = imagesBenefits[index]?.title || '';

        const handleImageMove = (e) => {
          const rect = imageContainer.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top + 50;

          gsap.to(imageFollower, {
            x: x,
            y: y,
            duration: 0.5,
            ease: "power2.out"
          });
        };

        const handleImageEnter = (e) => {
          if (imageFollower) {
            imageFollower.textContent = imageTitle;
            const rect = imageContainer.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top + 50;
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
    <div className="container__benefits" ref={sectionRef} id='video-portafolio'>
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
            Portafolio
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

export default VideoProjects;

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cardsForWhat } from '../../utils/bd';

gsap.registerPlugin(ScrollTrigger);

const CardForWhat = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    const cards = cardsRef.current.filter(Boolean);

    if (!container || cards.length === 0) return;

    // Pin del contenedor (NO TOCAR)
    ScrollTrigger.create({
      trigger: container,
      start: 'top top',
      end: () => `+=${cards.length * window.innerHeight}`,
      pin: true,
      pinSpacing: true,
    });

    // Configuración inicial: todas las cards apiladas
    cards.forEach((card, index) => {
      gsap.set(card, {
        opacity: index === 0 ? 1 : 0,
        scale: index === 0 ? 1 : 0.8,
        y: index === 0 ? 0 : 50,
        zIndex: cards.length - index, // la última card queda arriba
        position: 'absolute',
        top: '50%',
        left: '50%',
        xPercent: -50,
        yPercent: -50,
        width: '90%'
      });
    });

    // Animación de aparición de cada card (excepto la primera)
    cards.forEach((card, index) => {
      if (index === 0) return;

      gsap.to(card, {
        opacity: 1,
        scale: 1,
        y: 0,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: container,
          start: `top+=${index * window.innerHeight - window.innerHeight * 0.5} top`,
          end: `top+=${index * window.innerHeight} top`,
          scrub: 1,
          markers: true,
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="scroll-stack-card">
      {cardsForWhat.map((item, index) => (
        <div
          key={index}
          ref={el => cardsRef.current[index] = el}
          className="flex scroll-stack-card-item"
        >
          <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
          <div>
            <img src={item.urlImage} alt={item.title} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardForWhat;

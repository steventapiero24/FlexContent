import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Services } from "../../utils/bd";

const CardOtherServices = () => {
  const cardsRef = useRef([]);
  const defaultWidth = 400; // Ancho por defecto de cada card
  const expandedWidth = 830; // Ancho expandido
useEffect(() => {
  const cards = cardsRef.current;

  // Establecer ancho inicial y ocultar contenido
  cards.forEach((card) => {
    gsap.set(card, { width: defaultWidth });
    const content = card.querySelectorAll('ul, img, p');
    gsap.set(content, { opacity: 0, display: 'none' });
  });

  cards.forEach((card, index) => {
    const content = card.querySelectorAll('ul, img, p');

    const handleMouseEnter = () => {
      // Expandir la card actual
      gsap.to(card, {
        width: expandedWidth,
        duration: 0.5,
        ease: 'power2.out'
      });

      // Mostrar contenido
      gsap.to(content, {
        opacity: 1,
        display: 'block',
        duration: 0.5,
        delay: 0.3, // Espera un poco para que se expanda antes de mostrar
      });

      // Mantener las demás en su ancho por defecto y ocultar su contenido
      cards.forEach((otherCard, otherIndex) => {
        if (otherIndex !== index) {
          const otherContent = otherCard.querySelectorAll('ul, img, p');

          gsap.to(otherCard, {
            width: defaultWidth,
            duration: 0.5,
            ease: 'power2.out'
          });

          gsap.to(otherContent, {
            opacity: 0,
            display: 'none',
            duration: 0.3
          });
        }
      });
    };

    const handleMouseLeave = () => {
      // Volver card al ancho por defecto
      gsap.to(card, {
        width: defaultWidth,
        duration: 0.5,
        ease: 'power2.out'
      });

      // Ocultar contenido
      gsap.to(content, {
        opacity: 0,
        display: 'none',
        duration: 0.3
      });
    };

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);
  });

  return () => {
    cards.forEach((card) => {
      if (card) {
        card.removeEventListener('mouseenter', () => {});
        card.removeEventListener('mouseleave', () => {});
      }
    });
  };
}, []);


  return (
    <div className="flex container__otherServices">
      {Services.map((services, index) => (
        <div 
          key={index} 
          ref={(el) => (cardsRef.current[index] = el)}
          className="container__otherServices-card"
        >
          <span>{services.number}</span>
          <h3>{services.title}</h3>
          <ul>
            {services.items.value.map((value, valueIndex) => (
              <li key={valueIndex}>{value}</li>
            ))}
          </ul>
          <img src={services.urlImage} alt={services.title} />
          <p>{services.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CardOtherServices;
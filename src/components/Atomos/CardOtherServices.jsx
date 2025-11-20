import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Services } from "../../utils/bd";

const CardOtherServices = () => {
  const cardsRef = useRef([]);
  const defaultWidth = 400;
  const expandedWidth = 830;

  useEffect(() => {
    const cards = cardsRef.current;

    // Estado inicial
    cards.forEach((card) => {
      gsap.set(card, { width: defaultWidth });

      const content = card.querySelectorAll('img, p'); // UL ya NO va aquí
      const number = card.querySelector('span');
      const img = card.querySelector('img');
      const listItems = card.querySelectorAll('li');
      const ul = card.querySelector('ul');

      gsap.set(content, { opacity: 0, display: 'none' });
      gsap.set(ul, { opacity: 0 }); // ⬅ ocultar UL al inicio (pero visible para los LI)
      gsap.set(number, { fontSize: '1rem' });

      gsap.set(img, { 
        clipPath: 'circle(0% at 50% 50%)',
        scale: 0.8,
        opacity: 0
      });

      gsap.set(listItems, { 
        x: -30,
        opacity: 0
      });

      gsap.set(card.querySelector('p'), {
        y: 20,
        opacity: 0
      });
    });

    cards.forEach((card, index) => {
      const content = card.querySelectorAll('img, p');
      const number = card.querySelector('span');
      const img = card.querySelector('img');
      const listItems = card.querySelectorAll('li');
      const paragraph = card.querySelector('p');
      const ul = card.querySelector('ul');
      let isAnimating = false;

      const handleMouseEnter = () => {
        if (isAnimating) return;
        isAnimating = true;

        gsap.to(card, {
          width: expandedWidth,
          duration: 1,
          ease: 'power2.out'
        });

        gsap.to(number, {
          fontSize: '2rem',
          duration: 0.8,
          ease: 'back.out(1.2)'
        });

        gsap.set(content, { display: 'block' }, 0.3);

        // ⬅ Mostrar UL antes de los LI
        gsap.to(ul, {
          opacity: 1,
          duration: 0.4,
          delay: 0.35,
          ease: 'power2.out'
        });

        gsap.to(listItems, {
          x: 0,
          opacity: 1,
          duration: 0.6,
          delay: 0.4,
          ease: 'power2.out',
          stagger: 0.08,
          onComplete: () => { isAnimating = false; }
        });

        gsap.to(img, {
          clipPath: 'circle(100% at 50% 50%)',
          scale: 1,
          opacity: 1,
          duration: 1,
          delay: 0.5,
          ease: 'expo.out'
        });

        gsap.to(paragraph, {
          y: 0,
          opacity: 1,
          duration: 0.7,
          delay: 0.7,
          ease: 'power2.out'
        });

        cards.forEach((otherCard, otherIndex) => {
          if (otherIndex !== index) {
            const otherContent = otherCard.querySelectorAll('img, p');
            const otherNumber = otherCard.querySelector('span');
            const otherImg = otherCard.querySelector('img');
            const otherListItems = otherCard.querySelectorAll('li');
            const otherParagraph = otherCard.querySelector('p');
            const otherUl = otherCard.querySelector('ul');

            gsap.killTweensOf([otherCard, otherContent, otherNumber, otherImg, otherListItems, otherParagraph, otherUl]);

            gsap.to(otherCard, {
              width: defaultWidth,
              duration: 0.5,
              ease: 'power2.out'
            });

            gsap.to(otherNumber, {
              fontSize: '1rem',
              duration: 0.3,
              ease: 'power2.out'
            });

            gsap.to(otherContent, {
              opacity: 0,
              display: 'none',
              duration: 0.3
            });

            // ⬅ Ocultar UL de otras tarjetas
            gsap.to(otherUl, {
              opacity: 0,
              duration: 0.3
            });

            gsap.set(otherImg, {
              clipPath: 'circle(0% at 50% 50%)',
              scale: 0.8,
              opacity: 0
            });

            gsap.set(otherListItems, {
              x: -30,
              opacity: 0
            });

            gsap.set(otherParagraph, {
              y: 20,
              opacity: 0
            });
          }
        });
      };

      const handleMouseLeave = () => {
        gsap.killTweensOf([card, content, number, img, listItems, paragraph, ul]);
        isAnimating = false;

        gsap.to(card, {
          width: defaultWidth,
          duration: 0.5,
          ease: 'power2.out'
        });

        gsap.to(number, {
          fontSize: '1rem',
          duration: 0.3,
          ease: 'power2.out'
        });

        gsap.to(img, {
          clipPath: 'circle(0% at 50% 50%)',
          scale: 0.8,
          opacity: 0,
          duration: 0.4,
          ease: 'power2.in'
        });

        gsap.to(listItems, {
          x: -30,
          opacity: 0,
          duration: 0.3,
          ease: 'power2.in',
          stagger: 0.04
        });

        // ⬅ Ocultar UL al salir
        gsap.to(ul, {
          opacity: 0,
          duration: 0.3,
          ease: 'power2.in'
        });

        gsap.to(paragraph, {
          y: 20,
          opacity: 0,
          duration: 0.3,
          ease: 'power2.in'
        });

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
          className="container__otherServices-card flex destock-only-container"
        >
          <span>{services.number}</span>
          <h3>{services.title}</h3>

          <div className='flex'>
            <ul className='flex flex-col flex-1'>
              {services.items.value.map((value, valueIndex) => (
                <li key={valueIndex}>
                  <div className='viñeta'></div>
                  {value}
                </li>
              ))}
            </ul>

            <img src={services.urlImage} alt={services.title} />
          </div>

          <p>{services.description}</p>
        </div>
      ))}
      {Services.map((services, index) => (
        <div 
          key={index} 

          className="container__otherServices-card flex mobile-only-container"
        >
          <span>{services.number}</span>
          <h3>{services.title}</h3>

          <div className='flex container-colum'>
            <ul className='flex flex-col flex-1'>
              {services.items.value.map((value, valueIndex) => (
                <li key={valueIndex}>
                  <div className='viñeta'></div>
                  {value}
                </li>
              ))}
            </ul>

            <img src={services.urlImage} alt={services.title} />
          </div>

          <p>{services.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CardOtherServices;

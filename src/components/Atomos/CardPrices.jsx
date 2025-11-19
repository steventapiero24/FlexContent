import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { tarifas } from "../../utils/bd";

gsap.registerPlugin(ScrollTrigger);

const CardPrices = () => {
  const cardsRef = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => "+=" + containerRef.current.offsetHeight * 1, 
          scrub: 1.2,
          pin: true,
          markers: false,
        },
      });

      cards.forEach((card, i) => {
        tl.fromTo(
          card,
          { y: 200, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power4.out",
          },
          i * 0.5 
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="flex flex-center justify-center container__precio">
      {tarifas.map((tarifa, index) => (
        <div
          key={index}
          ref={(el) => (cardsRef.current[index] = el)}
          className="flex flex-col card-prices flex-nowrap"
        >
          <h2>{tarifa.title}</h2>
          <p>{tarifa.descriptions}</p>
          <ul className="flex flex-col">
            {tarifa.includes.list.map((item, itemIndex) => (
              <li key={itemIndex}>
                <div className="item-card"></div>
                {item}
              </li>
            ))}
          </ul>
          <p>{tarifa.result}</p>
          <span>{tarifa.price}€</span>
          <span className="entrega">{tarifa.Entrega}</span>
        </div>
      ))}
    </div>
  );
};

export default CardPrices;

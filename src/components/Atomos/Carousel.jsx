import { useEffect, useState, useRef } from 'react';
import { motion as Motion, useMotionValue, useTransform } from 'motion/react';
// replace icons with your own if needed
import { FiCircle, FiCode, FiFileText, FiLayers, FiLayout } from 'react-icons/fi';


const DEFAULT_ITEMS = [
  {
    title: 'Andrea Tapiero',
    description: 'Manicurista y nail artist',
    reseña: "Todo un profesional, mi marca de uñas nunca se había visto tan bien como con su trabajo. Muy recomendable para quienes buscan calidad y creatividad y no saben mucho de diseño.",
    id: 1,
    icon: <FiFileText className="carousel-icon" />,
    image: "/flexemprende/img/nelanails.webp"
  },
  {
    title: 'Laura Méndez',
    description: 'Directora de Marketing – Truvant',
    id: 2,
    reseña: "Nos crearon una identidad visual moderna y una web rápida que ha duplicado nuestras reservas online. El contenido para redes transmite exactamente la sensación de aventura que queríamos. Fue un antes y un después en nuestra marca",
    icon: <FiCircle className="carousel-icon" />,
    image: "/flexemprende/img/truvant.webp"
  },
  {
    title: 'Sergio Villalba',
    description: 'Bitacora',
    id: 3,
    reseña: "Lo que más nos sorprendió fue la estrategia visual que plantearon. Gracias a sus diseños y gestión de redes, ahora recibimos consultas todos los días. Son un equipo que realmente entiende el sector turístico.",
    icon: <FiLayers className="carousel-icon" />,
    image: "/flexemprende/img/bitacora.webp"
  },
  {
    title: 'Gloria Isabel',
    description: 'Futuro valor',
    id: 4,
    reseña: "Necesitábamos una imagen profesional para competir en el mercado educativo. El branding, la web y la estrategia de contenido fueron exactamente lo que buscábamos. Ahora nuestros cursos tienen identidad, son fáciles de encontrar y se vean profesionales.",
    icon: <FiLayout className="carousel-icon" />,
    image: "/flexemprende/img/futurovalor.webp"
  },
  {
    title: 'World Vision',
    description: 'Valentina Gonzales',
    id: 5,
    reseña: "El cambio de nuestra marca fue total. Nuevos colores, nuevo logo y una web que por fin refleja calidad. Las fotos y creatividades para campañas han disparado las ventas de gafas",
    icon: <FiCode className="carousel-icon" />,
    image: "/flexemprende/img/worldvision.webp"
  }
];

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: 'spring', stiffness: 300, damping: 30 };

export default function Carousel({
  items = DEFAULT_ITEMS,
  baseWidth = 300,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
  round = false,
  className = ""
}) {
  const containerPadding = 16;
  const itemWidth = baseWidth - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;

  const carouselItems = loop ? [...items, items[0]] : items;
  const [currentIndex, setCurrentIndex] = useState(0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  const containerRef = useRef(null);
  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  useEffect(() => {
    if (autoplay && (!pauseOnHover || !isHovered)) {
      const timer = setInterval(() => {
        setCurrentIndex(prev => {
          if (prev === items.length - 1 && loop) {
            return prev + 1;
          }
          if (prev === carouselItems.length - 1) {
            return loop ? 0 : prev;
          }
          return prev + 1;
        });
      }, autoplayDelay);
      return () => clearInterval(timer);
    }
  }, [autoplay, autoplayDelay, isHovered, loop, items.length, carouselItems.length, pauseOnHover]);

  const effectiveTransition = isResetting ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationComplete = () => {
    if (loop && currentIndex === carouselItems.length - 1) {
      setIsResetting(true);
      x.set(0);
      setCurrentIndex(0);
      setTimeout(() => setIsResetting(false), 50);
    }
  };

  const handleDragEnd = (_, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      if (loop && currentIndex === items.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(prev => Math.min(prev + 1, carouselItems.length - 1));
      }
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      if (loop && currentIndex === 0) {
        setCurrentIndex(items.length - 1);
      } else {
        setCurrentIndex(prev => Math.max(prev - 1, 0));
      }
    }
  };

  const dragProps = loop
    ? {}
    : {
        dragConstraints: {
          left: -trackItemOffset * (carouselItems.length - 1),
          right: 0
        }
      };

  return (
    <div
      ref={containerRef}
      className={`carousel-container ${className} ${round ? 'round' : ''}`}
      style={{
        width: `${baseWidth}px`,
        ...(round && { height: `${baseWidth}px`, borderRadius: '50%' })
      }}
    >
      <Motion.div
        className="carousel-track"
        drag="x"
        {...dragProps}
        style={{
          width: itemWidth,
          gap: `${GAP}px`,
          perspective: 1000,
          perspectiveOrigin: `${currentIndex * trackItemOffset + itemWidth / 2}px 50%`,
          x
        }}
        onDragEnd={handleDragEnd}
        animate={{ x: -(currentIndex * trackItemOffset) }}
        transition={effectiveTransition}
        onAnimationComplete={handleAnimationComplete}
      >
        {carouselItems.map((item, index) => {
          const range = [-(index + 1) * trackItemOffset, -index * trackItemOffset, -(index - 1) * trackItemOffset];
          const outputRange = [90, 0, -90];
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const rotateY = useTransform(x, range, outputRange, { clamp: false });
          return (
            <Motion.div
              key={index}
              className={`carousel-item ${round ? 'round' : ''}`}
              style={{
                width: itemWidth,
                height: round ? itemWidth : '100%',
                rotateY: rotateY,
                ...(round && { borderRadius: '50%' })
              }}
              transition={effectiveTransition}
            >
              <div className={`carousel-item-header ${round ? 'round' : ''}`}>
                <span className="carousel-icon-container">{item.icon}</span>
              </div>
              {/* render image for this carousel item when provided */}
              {item.image && (
                <div className="carousel-item-image">
                  <img src={item.image} alt={item.title || 'carousel image'} />
                </div>
              )}
              <div className='carousel-item-description-container'>
                {item.reseña}
              </div>
              <div className="carousel-item-content">
                <div className="carousel-item-title">{item.title}</div>
                <p className="carousel-item-description">{item.description}</p>
              </div>
            </Motion.div>
          );
        })}
      </Motion.div>
      <div className={`carousel-indicators-container ${round ? 'round' : ''}`}>
        <div className="carousel-indicators">
          {items.map((_, index) => (
            <Motion.div
              key={index}
              className={`carousel-indicator ${currentIndex % items.length === index ? 'active' : 'inactive'}`}
              animate={{
                scale: currentIndex % items.length === index ? 1.2 : 1
              }}
              onClick={() => setCurrentIndex(index)}
              transition={{ duration: 0.15 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

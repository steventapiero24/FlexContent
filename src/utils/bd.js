export const images = [
  {
      url: '/img/motion.webp',
    alt: 'motion graphics'
  },
  {
    url: '/img/branding.webp',
    alt: 'branding'
  },
  {
    url: '/img/web.webp',
    alt: 'web design'
  },
  {
    url: '/img/woman.webp',
    alt: 'Imagen 1'
  },
  {
    url: '/img/ste.webp',
    alt: 'Imagen 1'
  },
  {
    url: '/img/product.webp',
    alt: 'Imagen 1'
  },
  {
    url: '/img/idbangular.webp',
    alt: 'Imagen 1'
  },
  {
    url: '/img/futuro-valor.webp',
    alt: 'Imagen 1'
  },
];

// Proyectos organizados por categoría. Cada categoría contiene un array de tres proyectos.
export const projectsCard = {
  "Desarrollo": [
    {
      titulo: "Banco interamericano de desarrollo",
      imagen: "/img/reactcartera.webp",
      descripcion: "Maquetacion y desarrollo front end de plataforma de video bajo demanda para clientes corporativos."
    },
    {
      titulo: "Instituto de ciberseguridad de España",
      imagen: "/img/idsob.webp",
      descripcion: "Secuencia de introducción animada para canal de YouTube."
    },
    {
      titulo: "Banco interamericano de desarrollo",
      imagen: "/img/idbangular.webp",
      descripcion: "Composición de efectos visuales CGI para video corporativo."
    }
  ],
  "diseño web": [
    {
      titulo: "clickerbait",
      imagen: "/img/idsob.webp",
      enlace: "https://clickerbait.com/",
      descripcion: "Web corporativa responsiva construida con React injectado en wordpress y optimizada para SEO."
    },
    {
      titulo: "Tu solucion medica",
      imagen: "/img/seguros.webp",
      enlace: "https://tusolucionmedica.com/inicio/",
      descripcion: "E-commerce con formularios, pasarela de pago y diseño centrado en la experiencia de usuario."
    },
    {
      titulo: "Restaurante Gericht",
      imagen: "/img/git.webp",
      enlace: "https://glittering-restaurant-stevent.netlify.app/",
      descripcion: "Portafolio interactivo con animaciones y soporte para contenido multimedia."
    }
  ],
  "diseño grafico": [
    {
      titulo: "Identidad visual Giarcampus",
      imagen: "/img/giarcampus.webp",
      enlace: "https://www.behance.net/gallery/177665549/Brand-Giarcampus",
      descripcion: "Diseño de logo e identidad para marca educativa giarcampus, con manual de marca."
    },
    {
      titulo: "Animacion en 2D y 3D Magical dinner",
      imagen: "/img/personaje.webp",
      enlace: "https://www.behance.net/gallery/148239067/Magical-dinner",
      descripcion: "Desde el proceso de diseño de personajes hasta la animacion final, para video promocional de restaurante."
    },
    {
      titulo: "Identidad visual Kuates",
      imagen: "/img/kuates.webp",
      enlace: "https://www.behance.net/gallery/187542849/Kuates-brand",
      descripcion: "Diseño de revista digital con tipografía personalizada y maquetación."
    }
  ],
  "motiongraphics y video": [
    {
      titulo: "Documental Río",
      imagen: "/img/projects/video1.jpg",
      enlace: "https://rio-documental.com",
      descripcion: "Grabación y edición de documental ambiental."
    },
    {
      titulo: "Sesión de producto Lunar",
      imagen: "/img/projects/video2.jpg",
      enlace: "https://lunar-products.com",
      descripcion: "Fotografía y video de productos con iluminación profesional."
    },
    {
      titulo: "Spot publicitario Eclipse",
      imagen: "/img/projects/video3.jpg",
      enlace: "https://eclipse-ad.com",
      descripcion: "Producción completa de spot para campaña televisiva."
    }
  ]
};


export const imagesBenefits = [
  {
    url: "/img/socialmedia.webp",
    title: "React, Angular, UXUI",
    description: [
      "Front end con React y Angular",
      "Maquetacion con bibliotecas de componentes",
      "Consumo de APIs y servicios web",
      "Creacion de prototipos interactivos en Figma",
      "Creacion de sistemas de diseño",
    ],
    link: "https://www.gjulieta.com/"
  },
  {
    url: "/img/design.webp",
    title: "Diseño web",
    description: ["Diseño de interfaces (UX/UI)",
      "Prototipado y diseño responsive",
      "Codigo nativo o Wordpress",
      "Pasarelas de pago y tiendas online",
      "Escalables y optimizadas para SEO"
    ],
    link: "https://www.gjulieta.com/"
  },
  {
    url: "/img/strategy.webp",
    title: "Diseño grafico",
    description: ["Creación de identidades visuales",
      "Diseño de piezas gráficas",
      "Desarrollo de sistemas visuales y guías de estilo",
      "Enfoque en claridad visual y comunicación efectiva",
      "Ilustración",
    ],
    link: "https://www.gjulieta.com/"
  },
  {
    url: "/img/camerascine.webp",
    title: "Producción de video",
    description: ["Pre producción",
      "Producción",
      "Post producción",
      "Edición",
      "Etalonaje"
    ],
    link: "https://www.gjulieta.com/"
  },
]


export const Services = [
  {
    number: "001",
    title: "Experiencia de usuario y prototipado",
    description: "Diseño enfocado en la navegacion, accebilidad y usabilidad.",
    urlImage: "/img/uiux.webp",
    items: {
      value: [
        "Protipado en Figma",
        "Maquetacion de diseño en Angular y react",
        "Asesoria en UX/UI",
      ]
    }
  },
  {
    number: "002",
    title: "generacion de contenido con IA",
    description: "Generacion de imagenes y videos con inteligencia artificial",
    urlImage: "/img/ia.webp",
    items: {
      value: [
        "Midjourney",
        "Stable diffusion",
        "DALLE",
      ]
    }
  },
  {
    number: "003",
    title: "Meta, Email, etc, Analytics",
    description: "Pauta publicitaria, generacion de leads, análisis de datos",
    urlImage: "/img/meta-analitycs.webp",
    items: {
      value: [
        "Instagram Ads",
        "Facebook Ads",
        "Google Ads",
        "Analytics",
      ]
    }
  },
  {
    number: "004",
    title: "Animación y motion graphics",
    description: "Animacion 2D y motion graphics para videos y presentaciones",
    urlImage: "/img/animation.webp",
    items: {
      value: [
        "After effects",
        "Cinema 4D",
        "Blender",
      ]
    }
  },
  {
    number: "005",
    title: "Grabacion y Edicion de video",
    description: "Grabacion y edicion profesional de video",
    urlImage: "/img/camera.webp",
    items: {
      value: [
        "Pre produccion",
        "Produccion",
        "Post produccion",
        "Edicion",
        "Etalonaje",
      ]
    }
  },
]

export const Accordion = [
  {
    question: "¿Qué incluye exactamente el servicio de 600 €/mes?",
    answer: "Incluye estrategia de contenido, diseño de publicaciones, grabación y edición de videos, creación de reels, gestión de redes sociales y optimización del perfil de tu marca. Es un servicio completo para que tu negocio tenga una presencia digital profesional sin preocuparte por nada.",
  },
  {
    question: "¿Cuántas publicaciones recibo al mes?",
    answer: "Entre 8 y 12 piezas de contenido (carruseles, imágenes o diseños) + 4 videos grabados y editados + 4 reels adicionales creados a partir de contenido existente o grabado. sin embargo podrian aumentar si tienes requerimientos de impresion, flyers o promosionales.",
  },
  {
    question: "¿Cuántas redes sociales gestionas con este pack?",
    answer: "Generalmente 1 red principal (Instagram, Tik tok), donde revisemos que sea mejor el enfoquem pero podemos usar ese mismo contenido para repetir en Facebook o TikTok, si es relevante para tu negocio o crear varioaciones, todo depende de tus necesidades.",
  },
  {
    question: "¿Tienes permanencia o contrato mínimo?",
    answer: "No. Trabajo mes a mes, sin permanencia. Si te funciona, seguimos; si no, puedes cancelar cuando quieras. Recuerda que en redes minimo son 2 a 3 meses para ver resultads en tu negocio.",
  },
  {
    question: "¿Cómo funciona la grabación de los videos?",
    answer: "Cada mes se realiza una sesión de grabación (en tu local o en mi estudio). Grabamos contenido suficiente para crear varios videos y reels durante el mes. Si estás fuera de mi zona, podemos coordinar grabación online o enviarme videos para editarlos.",
  },
  {
    question: "¿Editas videos que yo grabo con mi móvil?",
    answer: "Sí. Si tú grabas contenido durante el mes, yo me encargo de editarlo, optimizarlo y adaptarlo a tu estilo visual.",
  },
  {
    question: "¿Cómo sé qué vas a publicar cada mes?",
    answer: "Antes de comenzar cada mes, te entrego un calendario editorial, donde verás: temas, fechas de publicación, estilo visual, ideas principales y nada se publica sin tu aprobación.",
  },
  {
    question: "¿Puedo pedir revisiones o cambios?",
    answer: "Sí. Tienes 2 rondas de cambios por cada pieza de contenido o video, para asegurar que todo quede perfecto.",
  },
  {
    question: "¿Cuándo recibo los contenidos del mes?",
    answer: "Entre la primera y segunda semana del mes, dependiendo de la grabación y estrategia. Los posts y videos se van programando para que tú no tengas que preocuparte por nada.",
  },
  {
    question: "¿Puedo pedir contenido adicional?",
    answer: "Por supuesto. Si necesitas contenido extra (más videos, más publicaciones o diseño adicional), puedo añadirlo con una tarifa extra accesible.",
  },
  {
    question: "¿Qué necesito para empezar?",
    answer: "Nada complicado solo: Tu logo o identidad actual (si tienes), acceso a tus redes sociales, una reunión inicial de 20 minutos para entender tu negocio, el primer mes pago, yo me encargo del resto.",
  },
  {
    question: "¿Cuánto tardan en verse resultados?",
    answer: "Normalmente, los primeros cambios se ven desde el primer mes: Mejor estética, mejor engagement, más visitas al perfil, mejor percepción del negocio, el crecimiento sostenido empieza a verse entre 2 y 3 meses, dependiendo del sector. ",
  },
  {
    question: "¿Qué pasa si no tengo marca o no tengo página web?",
    answer: "Perfecto, también puedo ayudarte con eso. Puedo crear tu branding y tu página web en para que tengas una presencia online, si quieres solo esto podemos manejarlo como servicio adicional sin compromiso de adquirir el pack completo.",
  },
]


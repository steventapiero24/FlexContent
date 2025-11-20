import { ScrollSmoother } from 'gsap/ScrollSmoother';


// Función para manejar el scroll suave con GSAP
    const handleScroll = (e, target) => {
        e.preventDefault();
        const smoother = ScrollSmoother.get();
        if (smoother) {
            smoother.scrollTo(target, true, "top 100px"); // El "top 100px" deja espacio para el nav
        }
    };

const Footer = () => {
    return (
        <div className="container container-footer flex flex-col">
            <h2>Contacto</h2>
            <div className="container__footer-content flex  flex-between">
                <div className="flex flex-1 flex-col container__footer-menu">
                     <li>
                            <a href="#hero" onClick={(e) => handleScroll(e, "#hero")}>
                                Inicio
                            </a>
                        </li>
                        <li>
                            <a href="#proyectos" onClick={(e) => handleScroll(e, "#proyectos")}>
                                Que incluye
                            </a>
                        </li>
                        <li>
                            <a href="#sobre-nosotros" onClick={(e) => handleScroll(e, "#sobre-nosotros")}>
                                Sobre nosotros
                            </a>
                        </li>
                        <li>
                            <a href="#precios" onClick={(e) => handleScroll(e, "#precios")}>
                                Tarifa
                            </a>
                        </li>
                        <li>
                            <a href="#comparacion" onClick={(e) => handleScroll(e, "#comparacion")}>
                                FAQs
                            </a>
                        </li>
                        <li>
                            <a href="#otros-servicios" onClick={(e) => handleScroll(e, "#otros-servicios")}>
                                Otros servicios
                            </a>
                        </li>
                        <li>
                            <a href="#contacto" onClick={(e) => handleScroll(e, "#contacto")}>
                                Contacto
                            </a>
                        </li>
                </div>

                <div className="flex flex-col flex-1">
                    <div className="flex flex-col footer__contact-text">
                        <a href="">flexemprende@gmail.com</a>
                        <a href="">+34 61 405 4834</a>
                    </div>
                    <div className="flex footer__contact-redes">
                        <a href="">instagram</a>
                        <a href="">facebook</a>
                        <a href="">Linkeding</a>
                    </div>

                </div>
            </div>
            <div className="container__footer-text">
                <span>¿ CREAMOS JUNTOS?</span>
            </div>
            <div className="container__footer-reserved flex flex-center">
                Todos los derechos reservados realizada por Flexemprende
            </div>
        </div>
    )
}

export default Footer
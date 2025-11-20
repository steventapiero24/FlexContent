// Nav.jsx - Con scroll suave de GSAP
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import Logo from '../../public/img/logo.svg';
import '../pages/Home.css';

const Nav = () => {
    const logoRef = useRef(null);
    const menuRef = useRef(null);
    const contactRef = useRef(null);

    useEffect(() => {
        // Establecer estado inicial ANTES de animar
        gsap.set(logoRef.current, { y: -50, opacity: 0 });
        gsap.set(menuRef.current.querySelectorAll('li'), { y: -30, opacity: 0 });
        gsap.set(contactRef.current.querySelectorAll('li'), { y: -30, opacity: 0 });

        // Ahora animar
        const tl = gsap.timeline();

        tl.to(logoRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out'
        })
        .to(menuRef.current.querySelectorAll('li'), {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out'
        }, '-=0.4')
        .to(contactRef.current.querySelectorAll('li'), {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: 'power2.out'
        }, '-=0.5');
    }, []);

    // Función para manejar el scroll suave con GSAP
    const handleScroll = (e, target) => {
        e.preventDefault();
        const smoother = ScrollSmoother.get();
        if (smoother) {
            smoother.scrollTo(target, true, "top 100px"); // El "top 100px" deja espacio para el nav
        }
    };

    return (
        <div className='flex flex-center'>
            <div className='flex flex-center flex-between container_menu'>
                <div ref={logoRef} className='container_menu-img'>
                    <img src={Logo} alt="logo"/>
                </div>
                <div ref={menuRef} className='menu'>
                    <ul>
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
                    </ul>
                </div>
                <div ref={contactRef} className='menu__contact'>
                    <ul className='flex-nowrap flex flex-center'>
                        <li>
                            <a className='btn btn-primary' href="https://wa.me/34614054834?text=Hola,%20me%20gustaría%20obtener%20más%20información"
        target="_blank"
        rel="noopener noreferrer"
                            >WhatsApp</a>
                        </li>
                        <li>
                            <a className='btn btn-secondary' href="tel:+34614054834">LLamada</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )       
}   

export default Nav
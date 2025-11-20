import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
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

    return (
        <div className='flex flex-center'>
            <div className='flex flex-center flex-between container_menu'>
                <div ref={logoRef} className='container_menu-img'>
                    <img src={Logo} alt="logo"/>
                </div>
                <div ref={menuRef} className='menu'>
                    <ul>
                        <li>
                            <a href="">Inicio</a>
                        </li>
                        <li>
                            <a href="#queincluye">Que incluye</a>
                        </li>
                        <li>
                            <a href="">Sobre nosotros</a>
                        </li>
                        <li>
                            <a href="">Tarifa</a>
                        </li>
                        <li>
                            <a href="">FAQs</a>
                        </li>
                        <li>
                            <a href="">Otros servicios</a>
                        </li>
                        <li>
                            <a href="">Contacto</a>
                        </li>
                    </ul>
                </div>
                <div ref={contactRef} className='menu__contact'>
                    <ul className='flex-nowrap flex flex-center' >
                        <li>
                            <a className='btn btn-primary' href="">WhatsApp</a>
                        </li>
                        <li>
                            <a className='btn btn-secondary' href="">LLamada</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )       
}   

export default Nav
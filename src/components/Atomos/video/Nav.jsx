// Nav.jsx - Con scroll suave de GSAP
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import '../../../pages/Home.css';

const Nav = ({
    logoSrc = `${import.meta.env.BASE_URL}img/logo.svg`,
    logoLink = '/',
    menuItems = []
}) => {
    const logoRef = useRef(null);
    const menuRef = useRef(null);
    const contactRef = useRef(null);

    useEffect(() => {
        gsap.set(logoRef.current, { y: -50, opacity: 0 });
        gsap.set(menuRef.current.querySelectorAll('li'), { y: -30, opacity: 0 });
        gsap.set(contactRef.current.querySelectorAll('li'), { y: -30, opacity: 0 });

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

    const handleScroll = (e, target) => {
        e.preventDefault();
        const smoother = ScrollSmoother.get();
        if (smoother) {
            smoother.scrollTo(target, true, 'top 100px');
        }
    };

    return (
        <div className='flex flex-center'>
            <div className='flex flex-center flex-between container_menu'>
                <div ref={logoRef} className='container_menu-img'>
                    <Link to={logoLink}>
                        <img src={logoSrc} alt='logo' />
                    </Link>
                </div>
                <div ref={menuRef} className='menu'>
                    <ul>
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                {item.to ? (
                                    <Link to={item.to}>{item.label}</Link>
                                ) : (
                                    <a href={item.href} onClick={(e) => handleScroll(e, item.href)}>
                                        {item.label}
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
                <div ref={contactRef} className='menu__contact'>
                    <ul className='flex-nowrap flex flex-center'>
                        <li>
                            <a className='btn btn-primary' href='https://wa.me/34614054834?text=Hola,%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n' target='_blank' rel='noopener noreferrer'>WhatsApp</a>
                        </li>
                        <li>
                            <a className='btn btn-secondary' href='tel:+34614054834'>LLamada</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Nav

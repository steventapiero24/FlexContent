import React from 'react';
import ImageTrail from '../ImageTrail';
import { images } from '../../../utils/bd';
import CircularText from '../CircularText';

const Hero = () => {
    return (
        <div className='container overflow-hidden relative container__hero'>
            <ImageTrail
                items={images.map(i => i.url)}
                variant={1}
                subtitle='Diseñador visual - motion designer.'
                title='Steven Tapiero'
                description='“Lo funcional es mejor que lo bello, porque lo que funciona bien permanece en el tiempo”.'
                scrollText='Realiza Scroll para descubrir mis proyectos'
            />
        </div>
    );
};

export default Hero;

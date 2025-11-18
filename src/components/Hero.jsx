import React from 'react';
import ImageTrail from './Atomos/ImageTrail';
import { images } from '../utils/bd';
import CircularText from './Atomos/CircularText';

const Hero = () => {
    return (
        <div className='container overflow-hidden relative container__hero'>
            <ImageTrail items={images.map(i => i.url)} alt={images.map(i => i.alt)} variant={1} />
        </div>
    );
};

export default Hero;

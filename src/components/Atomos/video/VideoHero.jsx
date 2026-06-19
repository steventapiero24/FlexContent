import React from 'react';
import ImageTrail from '../ImageTrail';
import { images } from '../../../utils/bd';

const VideoHero = () => {
    return (
        <div className='container overflow-hidden relative container__hero'>
            <ImageTrail
                items={images.map(i => i.url)}
                variant={1}
                subtitle='Edición & Producción de video.'
                title='Steven Tapiero'
                description='Produccion de videos que generan engagement y convierten.'
                scrollText='Descubre cómo tus videos pueden destacar en redes sociales.'
            />
        </div>
    );
};

export default VideoHero;

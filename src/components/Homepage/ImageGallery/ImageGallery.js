import React from 'react';
import './ImageGallery.css';
import ImageGallery from 'react-image-gallery';

import s1_1 from '../../image/s1_1.jpg';
import s1_2 from '../../image/s1_2.jpg';
import s1_3 from '../../image/s1_3.jpg';
import s1_4 from '../../image/s1_4.jpg';
import s1_5 from '../../image/s1_5.jpg';


const useImageGallery = () => {


    const orignal_height = '500px';
    const images = [
        {
            original: s1_1,
            originalHeight: orignal_height,
            thumbnail: s1_1,
        },
        {
            original: s1_2,
            thumbnail: s1_2,
            originalHeight: orignal_height,
        },
        {
            original: s1_3,
            thumbnail: s1_3,
            originalHeight: orignal_height,
        },
        {
            original: s1_4,
            thumbnail: s1_4,
            originalHeight: orignal_height,
        },
        {
            original: s1_5,
            thumbnail: s1_5,
            originalHeight: orignal_height,
        },
    ];

    return (
        <div>
            <ImageGallery items={images} />
        </div>
    );
}

export default useImageGallery;
import React, { Component } from 'react';
import './Gallery.css';

import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';

const images = [
    {
        thumbnail: '1.png',
        original: '1.png',
        className:'img'
    },
    {
        thumbnail: '2.png',
        original: '2.png',
        className:'img'
    },
    {
        thumbnail: '3.png',
        original: '3.png',
        className:'img'
    },
    {
        thumbnail: '4.png',
        original: '4.png',
        className:'img'
    },
    {
        thumbnail: '5.png',
        original: '5.png',
        className:'img'
    },
    {
        thumbnail: '6.png',
        original: '6.png',
        className:'img'
    },
    {
        thumbnail: '7.png',
        original: '7.png',
        className:'img'
    },
    {
        thumbnail: '8.png',
        original: '8.png',
        className:'img'
    },
    {
        thumbnail: '9.png',
        original: '9.png',
        className:'img'
    },
    {
        thumbnail: '10.png',
        original: '10.png',
        className:'img'
    }
]


class Gallery extends Component {
    render() {

        return (
            <div className='gallery'>
                <ImageGallery originalClass='img' items={images} />
            </div>
        )

    }
}

export default Gallery;
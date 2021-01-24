import React from 'react';
import PropTypes from 'prop-types';
import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';


const ImageGallery = (({ photos }) => (
        <ul className={s.imageGallery}>
            (photos.map(tags => (
            <ImageGalleryItem
            />)  
        </ul>
    )
);
    

ImageGallery.propTypes = {
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
};

export default ImageGallery;
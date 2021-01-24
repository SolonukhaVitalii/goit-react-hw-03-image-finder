import React from 'react';
//import PropTypes from 'prop-types';
import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';


const ImageGallery = props => (
    <ul className={s.imageGallery}>
        <ImageGalleryItem />
    </ul>
);
    

ImageGallery.propTypes = {
    
};

export default ImageGallery;
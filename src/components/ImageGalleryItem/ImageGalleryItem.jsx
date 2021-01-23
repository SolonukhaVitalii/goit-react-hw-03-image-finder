import React from 'react';
//import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = props => {
    return (
        <li className={s.ImageGalleryItem}>
            <img src="" alt="" className={s.image} />
        </li>
    );
};

ImageGalleryItem.propTypes = {
    
};

export default ImageGalleryItem;
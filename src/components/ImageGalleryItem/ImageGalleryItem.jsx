import React from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ photos, onClick }) => {
    return (
        photos.map(({ id, tags, largeImageURL, webformatURL }) => (
            <li className={s.item} key={id}>
                <img
                    src={webformatURL}
                    alt={tags}
                    data-source={largeImageURL}
                    className={s.image}
                    onClick={() => onClick(largeImageURL)}
                />
            </li>
        )));
};

ImageGalleryItem.defaultProps = {
    
};

ImageGalleryItem.propTypes = {
    photos: PropTypes.array
};

export default ImageGalleryItem;
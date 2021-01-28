import React from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({
    id,
    webformatURL,
    largeImageURL,
    onImageClick
}) {
    return (
      <li className={s.ImageGalleryItem} key={id} onClick={onImageClick}>
        <img className={s.ImageGalleryItemImage}
          src={webformatURL}
          data-source={largeImageURL}
          alt=""
        />
      </li>
    )
  };

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onImageClick: PropTypes.func.isRequired,
};
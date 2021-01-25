import React from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import s from './ImageGallery.module.css';

const ImageGallery = ({ imagesArr, onImageClick }) => (
  <ul className={s.ImageGallery}>
    <ImageGalleryItem imagesArr={imagesArr} onImageClick={onImageClick} />
  </ul>
);

export default ImageGallery;
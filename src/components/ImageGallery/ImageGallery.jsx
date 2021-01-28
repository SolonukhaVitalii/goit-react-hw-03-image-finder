import React from 'react';
import PropTypes from 'prop-types';
import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ imagesArr, onImageClick }) => {
  return (
    <ul className={s.ImageGallery}> {
      imagesArr.map((elem) => (
        <ImageGalleryItem
          key={elem.id}
          id={elem.id}
          webformatURL={elem.webformatURL}
          largeImageURL={elem.largeImageURL}
          onImageClick={onImageClick}
        />
      ))}
    </ul>
  )};

ImageGallery.propTypes = {
  imagesArr: PropTypes.array.isRequired,
  onImageClick: PropTypes.func.isRequired,

};

export default ImageGallery;
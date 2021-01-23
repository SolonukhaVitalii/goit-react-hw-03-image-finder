import React, { Component } from 'react';
import s from './App.module.css';
import Button from './components/Button';
import ImageGallery from './components/ImageGallery';
import ImageGalleryItem from './components/ImageGalleryItem';
import Loader from './components/Loader';
import Modal from './components/Modal';
import Searchbar from './components/Searchbar';


class App extends Component {

  state = {
    img: []
  }

  render() { 
    return (
      <div className={s.app}>
        <Searchbar />
        <ImageGallery />
        <ImageGalleryItem />
        <Modal />
        <Button />
        <Loader />
      </div>
    );
  };
};

export default App;
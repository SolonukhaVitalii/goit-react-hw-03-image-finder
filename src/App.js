import React, { Component } from 'react';
import s from './App.module.css';
import { ToastContainer } from 'react-toastify';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import ImageGalleryItem from './components/ImageGalleryItem';
import Modal from './components/Modal';
import Button from './components/Button';
import Loader from './components/Loader';
import photoApi from './components/Services/PhotoApi';


export default class App extends Component {
  
  state = {
    photoName: ' ',
    loading: false,
    error: null,
  }

  componentDidMount() {
    this.setState({ loading: true });

    photoApi
      .fetchphotoWithQery('react')
      .then(photoName => this.setState({ photoName }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false}));
  };

  componentDidUpdate() {

  };

  handleFormSubmit = photoName => {
    this.setState({ photoName });
  };
  
  toggleModal = () => {
    this.setState(({ schowModal }) => (
      { schowModal: !schowModal }));
  };

  render() { 
    const { schowModal, photoName } = this.state;
    return (
      <div className={s.app}>
        <Searchbar
          onSubmit={this.handleFormSubmit}
        />
        {photoName && (<ImageGallery />)}
        {schowModal && (<Modal onClose={this.toggleModal} />)}
        <ImageGalleryItem 
          photoName={photoName}
          /*id={this.state.photoName.id}
          alt={this.state.photoName.tags}
          data-source={this.state.photoName.largeImageURL}
          onClick={() => (this.state.photoName.largeImageURL)}*/
        />
        <Button />
        <Loader />
        <ToastContainer />
        
      </div>
    );
  };
};
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

  componentDidMount() {

  }
  componentDidUpdate() {

  }

  toggleModal = () => {
    this.setState(({ schowModal }) => ({
      schowModal: !schowModal,
    }));
  };

  render() { 
    const { schowModal } = this.state;
    return (
      <div className={s.app}>
        <Searchbar />
        <ImageGallery />
        {schowModal && (<Modal onClose={this.toggleModal}><ImageGalleryItem
          onClick={this.toggleModal}/></Modal>
        )}
        <Button />
        <Loader />
      </div>
    );
  };
};

export default App;
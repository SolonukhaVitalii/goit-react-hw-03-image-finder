import React, { Component } from 'react';
import s from './App.module.css';
import { ToastContainer } from 'react-toastify';
import Searchbar from './components/Searchbar';
import ImageGalleryItem from './components/ImageGalleryItem';
import Button from './components/Button';
import Loader from './components/Loader';



export default class App extends Component {
  
  state = {
    photoName: ' ',
  }

  componentDidMount() {

  };

  componentDidUpdate() {

  };

  handleFormSubmit = photoName => {
    this.setState({ photoName });
  };
  
  render() { 
    
    return (
      <div className={s.app}>
        <Searchbar
          onSubmit={this.handleFormSubmit}
        />
        <ImageGalleryItem 
          photoName={this.state.photoName}
        />
        <Button />
        <Loader />
        <ToastContainer />
        
      </div>
    );
  };
};
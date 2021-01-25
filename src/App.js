import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import s from './App.module.css';
import PhotoApi from './PhotoApi';
import Searchbar from './components/Searchbar';
import ImageGalleryItem from './components/ImageGalleryItem';
import Button from './components/Button';
import Loader from './components/Loader';



export default class App extends Component {
  
  state = {
    photo: ''
  }

  componentDidMount() {
    (<PhotoApi />)
      .then(res => res.json())
      .then(photo => this.setState({ photo }));
  };

  componentDidUpdate() {

  };

  handleFormSubmit = photo => {
    this.setState({ photo });
  };
  
  render() { 
    
    return (
      <div className={s.app}>
        {this.state.photo && (<Searchbar onSubmit={this.handleFormSubmit} />)}
        <ImageGalleryItem photo={this.state.photo} />
        <Button />
        <Loader />
        <ToastContainer autoClose={3000} />
      </div>
    );
  };
};
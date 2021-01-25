import React, { Component } from 'react';
import s from './App.module.css';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Loader from './components/Loader';
import Error from './components/Error';
import Modal from './components/Modal';
import api from './services/api';

export default class App extends Component {
  state = {
    imagesArr: [],
    currentPage: 1,
    searchQuery: '',
    isLoadingArr: false,
    isLoadingImg: false,
    error: null,
    largeImageLink: '',
    imageName: '',
    noResults: false,
  };

  componentDidUpdate = async (prevProps, prevState) => {
    if (prevState.searchQuery !== this.state.searchQuery) {
      await this.fetchImages();
      if (this.state.imagesArr.length === 0) {
        this.setState({ noResults: true });
      }
    }
  };
  
  onSubmitSearch = searchQuery => {
    if (searchQuery !== this.state.searchQuery) {
      this.setState({
        searchQuery,
        currentPage: 1,
        imagesArr: [],
        error: null,
        noResults: false,
      });
    }
  };

  onClickLoadMore = async () => {
    await this.fetchImages();

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  onImageClick = (largeImageLink, imageName) => {
    this.setState({
      largeImageLink,
      imageName,
      isLoadingImg: true,
    });
  };

  onCloseModal = () => {
    this.setState({
      largeImageLink: null,
    });
  };

  onLoadLargeImg = () => {
    this.setState({ isLoadingImg: false });
  };

  fetchImages = async () => {
    const { currentPage, searchQuery } = this.state;
    const options = { currentPage, searchQuery };

    this.setState({ isLoadingArr: true, error: null });

    await api
      .fetchImages(options)
      .then(hits => {
        this.setState(prevState => ({
          imagesArr: [...prevState.imagesArr, ...hits],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => {
        this.setState({ isLoadingArr: false });
      });
  };

  render() {
     const {
      imagesArr,
      isLoadingArr,
      isLoadingImg,
      error,
      largeImageLink,
      imageName,
      noResults,
      searchQuery,
    } = this.state;
    const shouldRenderloadMoreBtn = imagesArr.length > 0 && !isLoadingArr;
    
   return (
      <div className={s.App}>
        {largeImageLink && (
          <Modal onClose={this.onCloseModal}>
            <>
              <Loader isLoading={isLoadingImg} position="center" />
              <img
                onLoad={this.onLoadLargeImg}
                src={largeImageLink}
                alt={imageName}
              />
            </>
          </Modal>
        )}
        <Searchbar onSubmit={this.onSubmitSearch} />
        {noResults && (
          <Error text={`Your search ${searchQuery} did not match any image.`} />
        )}
        <ImageGallery imagesArr={imagesArr} onImageClick={this.onImageClick} />
        <Loader isLoading={isLoadingArr} position="bottom" />
        {error && <Error text="Something went wrong. Please try again." />}
        {shouldRenderloadMoreBtn && <Button onClick={this.onClickLoadMore} />}
      </div>
    );
  }
};

import React, { Component } from 'react';
import s from './Searchbar.module.css';
import { toast } from 'react-toastify';
import photoApi from '../Services/PhotoApi';
import Modal from '../Modal';
import ImageGallery from '../ImageGallery';

class Searchbar extends Component {

    state = {
        photoName: ' ',
        loading: false,
        error: null,
    };

    componentDidMount() {
    this.setState({ loading: true });

    photoApi
      .fetchphotoWithQery('react')
      .then(photoName => this.setState({ photoName }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false}));
    };

    toggleModal = () => {
        this.setState(({ schowModal }) => (
        { schowModal: !schowModal }));
    };

    hendleNameChange = e => {
        const { photoName, value } = e.currentTarget;
        this.setState({ [photoName]: value.toLowerCase() });
    };

    hendleSubmit = e => {
        e.preventDefault();
        if (this.state.photoName.trim() === '') {
           return toast.error('Введіть правильне імя !');
        }
        this.props.onSubmit(this.state.photoName);
        this.setState({ photoName: '' });
    }; 
    
    render() {
        const { schowModal, photoName } = this.state;
        return (
            <header className={s.searchbar}>
                <form className={s.form} onSubmit={this.handleSubmit}>
                    <button type="submit" className={s.button}>
                        <span className={s.buttonLabel}>Search</span>
                    </button>
                    <input
                        className={s.input}
                        type="text"
                        name="photoName"
                        autoComplete="off"
                        value={this.state.photoName}
                        onChange={this.handleNameChange}
                    />
                </form>
                {photoName && (<ImageGallery />) }
                {schowModal && (<Modal onClose={this.toggleModal} />)}
            </header>
        );
    };
};

export default Searchbar;
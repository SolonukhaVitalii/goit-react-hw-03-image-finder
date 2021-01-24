import React, { Component } from 'react';
import s from './Searchbar.module.css';
import { toast } from 'react-toastify';

class Searchbar extends Component {

    state = {
        photoName: '',
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
                        //autofocus
                        //placeholder="Search images and photos"
                        value={this.state.photoName}
                        onChange={this.handleNameChange}
                    />
                </form>
            </header>  
        );
    };
};

export default Searchbar;
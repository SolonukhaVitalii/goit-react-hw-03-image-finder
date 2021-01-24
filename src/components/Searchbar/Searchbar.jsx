import React, { Component } from 'react';
import s from './Searchbar.module.css';

class Searchbar extends Component {

    state = {
        photoName: '',
    }

    hendleChange = e => {
        const { photoName, value } = e.currentTarget;
        this.setState({ [photoName]: value }); 
    }

    hendleSubmit = e => {
        e.preventDefault();
        this.setState({ photoName: '' });
    }
    
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
                        autocomplete="off"
                        //autofocus
                        //placeholder="Search images and photos"
                        value={this.state.photoName}
                        onChange={this.handleChange}
                    />
                </form>
            </header>  
        );
    };
};

export default Searchbar;
import React from 'react';
import PropTypes from 'prop-types';
import s from './Searchbar.module.css';

const Searchbar = ({ onSubmit }) => {
    return (
        <header className={s.Searchbar}>
            <form className={s.form}>
                <button type="submit" className={s.button}>
                    <span className={s.buttonLabel}>Search</span>
                </button>
                <input
                    className={s.input}
                    type="text"
                    autocomplete="off"
                    autofocus
                    placeholder="Search images and photos"
                />
            </form>
        </header>  
    );
};

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

export default Searchbar;
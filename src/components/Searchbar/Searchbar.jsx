import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Searchbar.module.css';

class Searchbar extends Component {
    state = {
        inputValue: '',
    };

    handleSubmitForm = e => {
        const { onSubmit } = this.props;
        const { inputValue } = this.state;
        
        e.preventDefault();
        onSubmit(inputValue);
        this.setState({ inputValue: '' });
    };
    
    handleChangeInput = ({ currentTarget }) => { 
        this.setState({ inputValue: currentTarget.value });
    };
    
    render() {
        const { inputValue } = this.state;
        return (
            <header className={s.Searchbar}>
                <form className={s.Searchform} onSubmit={this.handleSubmitForm}>
                    <button type="submit" className={s.SearchFormButton}>
                        <span className={s.SearchFormButtonLabel}></span>
                    </button>
                    <input
                        className={s.SearchFormInput}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={inputValue}
                        onChange={this.handleChangeInput}
                    />
                </form>
            </header>
        );
    };
};

Searchbar.ptopTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
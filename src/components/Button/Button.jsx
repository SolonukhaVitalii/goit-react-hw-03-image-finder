import React from 'react';
//import PropTypes from 'prop-types';
import s from './Button.module.css';

const Button = props => {

window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth',
});
    
    return (
       <button type="submit" className={s.button}>Load more</button>
    );
};

Button.propTypes = {
    
};

export default Button;
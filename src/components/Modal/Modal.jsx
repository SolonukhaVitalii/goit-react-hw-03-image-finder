import React from 'react';
//import PropTypes from 'prop-types';
import s from './Modal.module.css';

const Modal = props => {
    return (
        <div className={s.overlay}>
            <div className={s.modal}>
                <img src="" alt="" />
            </div>
        </div>
    );
};

Modal.propTypes = {
    
};

export default Modal;
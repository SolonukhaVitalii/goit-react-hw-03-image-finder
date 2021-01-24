import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
    componentDidMount() {
        console.log('Modal Mou');
        window.addEventListener('keydown', this.handleKeyDown);
    };

    componentWillUnmount() {
        console.log('Modal Un');
        window.removeEventListener('keydown', this.handleKeyDown);
    };

    handleKeyDown = e => {
        if (e.code === 'Escape') {
            console.log('Закрить');
            this.props.onClose();
        }
    };

    handleOverlayClick = e => {
        if (e.currentTarget === e.target) {
            this.props.onClose();
        }
    };

    render() {
        return createPortal(
            <div className={s.overlay} onClick={this.handleOverlayClick}>
                <div className={s.modal}>{this.props.children}</div>
            </div>, modalRoot,);
    };
}
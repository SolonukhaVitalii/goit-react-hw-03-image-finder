import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {

    componentDidMount() {
        console.log('Modal');

        window.addEventListener('keydown', e => {
            if (e.code === 'Escape') {
                console.log('Закрить');
                this.props.onClose();
            }
        });
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div className={s.overlay}>
                <div className={s.modal}>{this.props.children}</div>
            </div>, modalRoot);
    } 
}

import React, { Component } from 'react';
import s from './ImageGalleryItem.module.css';

export default class ImageGalleryItem extends Component {
    componentDidMount() {

    }
    componentDidUpdate() {

    }
    
    render() {
        return (
            <li className={s.item}>
                <img className={s.image}
                    src=""
                    alt=""
                />
                {this.props.photoName}
            </li>
        );
    };
};
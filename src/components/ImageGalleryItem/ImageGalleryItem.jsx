import React, { Component } from 'react';
import s from './ImageGalleryItem.module.css';

export default class ImageGalleryItem extends Component {

    state = {
        photo: null,
        loading: false,
    }

    componentDidMount() {

    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.photoName !== this.props.photoName) {
            this.setState({ loading: true});
            fetch()
                .then(res => res.json())
                .then(photo => this.setState({ photo }))
                .finally(() => this.setState({ loading: false }));
        }
    }
    
    render() {
        const { loading, photo } = this.state;
        const { photoName } = this.props;
        return (
            <li className={s.item}>
                <img className={s.image}
                    src=""
                    alt=""
                />
                {loading && <div>Загружаем</div>}
                {!photoName && <div>Введите</div>}
                {photo && <div>{this.state.photo.name}</div>}
            </li>
        );
    };
};
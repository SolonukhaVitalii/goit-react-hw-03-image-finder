import React from 'react';
import Loaders from "react-loader-spinner";
//import PropTypes from 'prop-types';
import s from './Loader.module.css';

const Loader = props => {
    return (
        <div className={s.App}>
            <header className={s.Appheader}>
                <div className="container">
                    <div className="row">
                        <div className={s.item} title="Puff">
                            <Loaders type="Puff" color="#00BFFF" height={100} width={100} timeout={3000} />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
};

Loader.propTypes = {
    
};

export default Loader;
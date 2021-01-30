import React from 'react';
import PropTypes from 'prop-types';
import Loaders from "react-loader-spinner";
import s from './Loader.module.css';

const Loader = ({ isLoading }) => (
    <>
        <Loaders className={s.Loader}
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={1000}
            loading={isLoading} />
    </>
);

Loader.propTypes = {
    isLoading: PropTypes.bool.isRequired, 
};

export default Loader;
import React, { Fragment, useEffect, useContext } from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import AppContext from '../../context/test-app/AppContext';

const SearchItem = () => {
    const appContext = useContext(AppContext);

    const { searchItem, getSearchItem } = appContext;

    const {
        search,
        productName,
        productImg,
        productLink,
        productPrice,
        createdAt,
        lastModified,
        brand,
        site,
        user
    } = searchItem;

    return (
        <Fragment>
            <div className='card grid-2'>
                <div className='all-center'>
                    <img
                        src={productImg ? productImg : defaultImg}
                        className='round-img'
                        alt=''
                        style={{ width: '150px' }}
                    />
                    <h1>{productName}</h1>
                    <h3>Price: {productPrice}</h3>
                    <a href={productLink} className='btn btn-dark my-1'>
                        Link to the item on the original site
                    </a>
                </div>
                <div>
                    <h2>Searched item: {search}</h2>
                    <h3>Brand: {brand}</h3>
                    <h3>Site where the item was found: {site}</h3>
                    <h4>Original date of the search: {createdAt}</h4>
                    <h4>Last search: {lastModified}</h4>
                    <h6>Searched by user: {user}</h6>
                </div>
            </div>
        </Fragment>
    );
};

export default SearchItem;

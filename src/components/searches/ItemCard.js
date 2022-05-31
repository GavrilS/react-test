import React from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ItemCard = ({ searchItem: { productName, productImg, productPrice, productLink } }) => {
    return (
        <div className="card text-center">
            <img
                src={ productImg ? productImg : defaultImg }
                alt=""
                className="round-img"
                style={{ width: '60px' }}
            />
            <h3>{productName}</h3>
            <h3>{productPrice}</h3>
            <a href={productLink} className='btn btn-dark my-1'>
                Link
            </a>
        </div>
    );
};

ItemCard.propTypes = {
    searchItem: PropTypes.object.isRequired
};

export default ItemCard;

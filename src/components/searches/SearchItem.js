import { React, Fragment } from "react";
import PropTypes from 'prop-types';

const SearchItem = (props) => {
    const defaultImg = "";

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
    } = props.searchItem;

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

SearchItem.propTypes = {
    searchItem: PropTypes.object.isRequired
};

export default SearchItem;

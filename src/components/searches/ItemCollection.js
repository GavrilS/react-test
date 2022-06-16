import React, { useContext, useEffect } from "react";
import ItemCard from './ItemCard';
import AppContext from "../../context/test-app/appContext";

const ItemCollection = () => {
    const appContext = useContext(AppContext);

    const { itemCollection, getItemCollection } = appContext;

    useEffect(() => {
        getItemCollection();
    }, []);

    return(
        <div style={itemStyle}>
            {itemCollection.map(searchItem => (
                <ItemCard key={searchItem.id} searchItem={searchItem} />
            ))}
        </div>
    );
};

const itemStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
};

export default ItemCollection;

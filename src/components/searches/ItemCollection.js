import React, { useContext, useEffect } from "react";
import ItemCard from './ItemCard';
import AppContext from "../../context/test-app/appContext";

const ItemCollection = () => {
    const appContext = useContext(AppContext);

    // const { itemCollection, getItemCollection } = appContext;

    // useEffect(() => {
    //     console.log("Item collection current state:")
    //     console.log(itemCollection)
    //     getItemCollection();
    // }, []);
    let itemCollection = [
        {
            "id": "test",
            "search": "Tablet Samsung Galaxy",
            "productName": "Таблет Samsung Galaxy Tab A7 Lite, Octa-Core, 8.7, 3GB RAM, 32GB, 4G, Gray",
            "productImg": "https://s13emagst.akamaized.net/products/37864/37863798/images/res_e857d5b447090f84d610384e48e75056.jpg?width=450&height=450&hash=4A530C83121B2B46A7914F427C51B320",
            "productLink": "https://www.emag.bg/tablet-samsung-galaxy-tab-a7-lite-octa-core-8-7-3gb-ram-32gb-4g-gray-sm-t225nzaaeue/pd/D5PWWNMBM/?ref=prod_CMP-29168_5423_57934",
            "productPrice": 319.99,
            "createdAt": "06-12-2021 12:33:45",
            "lastModified": "06-12-2021 12:33:45",
            "brand": "samsung",
            "site": "emag.bg",
            "user": "0"
        },
        {
            "id": "test2",
            "search": "Tablet Samsung Galaxy",
            "productName": "Таблет Samsung Galaxy Tab A7 Lite, Octa-Core, 8.7, 3GB RAM, 32GB, 4G, Gray",
            "productImg": "https://s13emagst.akamaized.net/products/37864/37863798/images/res_e857d5b447090f84d610384e48e75056.jpg?width=450&height=450&hash=4A530C83121B2B46A7914F427C51B320",
            "productLink": "https://www.emag.bg/tablet-samsung-galaxy-tab-a7-lite-octa-core-8-7-3gb-ram-32gb-4g-gray-sm-t225nzaaeue/pd/D5PWWNMBM/?ref=prod_CMP-29168_5423_57934",
            "productPrice": 319.99,
            "createdAt": "06-12-2021 12:33:45",
            "lastModified": "06-12-2021 12:33:45",
            "brand": "samsung",
            "site": "emag.bg",
            "user": "0"
        },
        {
            "id": "test3",
            "search": "Tablet Samsung Galaxy",
            "productName": "Таблет Samsung Galaxy Tab A7 Lite, Octa-Core, 8.7, 3GB RAM, 32GB, 4G, Gray",
            "productImg": "https://s13emagst.akamaized.net/products/37864/37863798/images/res_e857d5b447090f84d610384e48e75056.jpg?width=450&height=450&hash=4A530C83121B2B46A7914F427C51B320",
            "productLink": "https://www.emag.bg/tablet-samsung-galaxy-tab-a7-lite-octa-core-8-7-3gb-ram-32gb-4g-gray-sm-t225nzaaeue/pd/D5PWWNMBM/?ref=prod_CMP-29168_5423_57934",
            "productPrice": 319.99,
            "createdAt": "06-12-2021 12:33:45",
            "lastModified": "06-12-2021 12:33:45",
            "brand": "samsung",
            "site": "emag.bg",
            "user": "0"
        }
    ]


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

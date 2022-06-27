import React, { createContext, useReducer } from "react";
import itemContext from "./itemContext";
import itemReducer from "./itemReducer";
import {
    SEARCH_ITEMS,
    CLEAR_ITEMS
} from '../types';


const ItemState = (props) => {
    const initialState = {
        itemList: [
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
                "search": "Tablet Samsun Galaxy",
                "productName": "Таблет Samsun Galaxy Tab A7 Lite, Octa-Core, 8.7, 3GB RAM, 32GB, 4G, Gray",
                "productImg": "https://s13emagst.akamaized.net/products/37864/37863798/images/res_e857d5b447090f84d610384e48e75056.jpg?width=450&height=450&hash=4A530C83121B2B46A7914F427C51B320",
                "productLink": "https://www.emag.bg/tablet-samsung-galaxy-tab-a7-lite-octa-core-8-7-3gb-ram-32gb-4g-gray-sm-t225nzaaeue/pd/D5PWWNMBM/?ref=prod_CMP-29168_5423_57934",
                "productPrice": 319.99,
                "createdAt": "06-12-2021 12:33:45",
                "lastModified": "06-12-2021 12:33:45",
                "brand": "samsun",
                "site": "emag.bg",
                "user": "0"
            }
        ]
    };

    const [state, dispatch] = useReducer(itemReducer, initialState);

    // Search Items
    const searchItems = text => {
        let itemsToReturn = [];
        const term = text.toLowerCase();
        state.itemList.forEach(elem => {
            // if (elem[search].toLowerCase().indexOf(term) !== -1 || elem[productName].toLowerCase().indexOf(term) !== -1
            //     || elem[brand].toLowerCase().indexOf(temr) !== -1 || elem[site].toLowerCase().indexOf(term) !== -1) {
            //     itemsToReturn.push(elem);
            // }
            Object.entries(elem).forEach(([key, value]) => {
                if (key === 'search' || key === 'productName' || key === 'brand' || key === 'site') {
                    if (value.indexOf(term) != -1) {
                        itemsToReturn.push(elem);
                    }
                }
            });
            console.log("ELEM in for each in searchItems is:!!!!!!!!!!!!!!!!!!!!!");
            console.log(elem);
        });
        // console.log("!!!!!!!!!!!!STATE FROM state");
        // console.log(state.itemList);

        dispatch({
            type: SEARCH_ITEMS,
            payload: itemsToReturn
        });
    };

    // Clear items
    const clearItemList = () => {
        let itemsToReturn = [
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
                "search": "Tablet Samsun Galaxy",
                "productName": "Таблет Samsun Galaxy Tab A7 Lite, Octa-Core, 8.7, 3GB RAM, 32GB, 4G, Gray",
                "productImg": "https://s13emagst.akamaized.net/products/37864/37863798/images/res_e857d5b447090f84d610384e48e75056.jpg?width=450&height=450&hash=4A530C83121B2B46A7914F427C51B320",
                "productLink": "https://www.emag.bg/tablet-samsung-galaxy-tab-a7-lite-octa-core-8-7-3gb-ram-32gb-4g-gray-sm-t225nzaaeue/pd/D5PWWNMBM/?ref=prod_CMP-29168_5423_57934",
                "productPrice": 319.99,
                "createdAt": "06-12-2021 12:33:45",
                "lastModified": "06-12-2021 12:33:45",
                "brand": "samsun",
                "site": "emag.bg",
                "user": "0"
            }
        ];

        dispatch({
            type: CLEAR_ITEMS,
            payload: itemsToReturn
        });
    };

    return (
        <itemContext.Provider
            value={{
                itemList: state.itemList,
                searchItems,
                clearItemList
            }}
        >
            {props.children}
        </itemContext.Provider>
    );
};

export default ItemState;

import React, { useReducer } from "react";
import AppContext from "./appContext";
import AppReducer from "./appReducer";
import {
    GET_ITEMS
} from "../types";

const AppState = props => {
    const initialState = {
        searchItem: {},
        itemCollection: [
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
    }

    const [state, dispatch] = useReducer(AppReducer, initialState);

    // component actions here!!!
    const getSearchItem = () => {
        
    };

    const getItemCollection = () => {
        let items = [
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
        ];

        dispatch({
            type: GET_ITEMS,
            payload: items
        });
    };


    return <AppContext.Provider
        value={{
            searchItem: state.searchItem,
            itemCollection: state.itemCollection,
            getSearchItem,
            getItemCollection
        }}
    >
        {props.children}
    </AppContext.Provider>
}

export default AppState;

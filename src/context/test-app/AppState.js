import React, { useReducer } from "react";
import AppContext from "./appContext";
import AppReducer from "./appReducer";
import {

} from "../types";

const AppState = props => {
    const initialState = {
        searchItem: {},
        itemCollection: []
    }

    const [state, dispatch] = useReducer(AppReducer, initialState);

    // component actions here!!!
    const getSearchItem = () => {

    };

    const getItemCollection = () => {

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

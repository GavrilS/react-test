import React, { useReducer } from "react";
import AppContext from "./appContext";
import AppReducer from "./appReducer";
import {

} from "../types";

const AppState = props => {
    const initialState = {

    }

    const [state, dispatch] = useReducer(AppReducer, initialState);

    // component actions here!!!



    return <AppContext.Provider
        value={{

        }}
    >
        {props.children}
    </AppContext.Provider>
}

export default AppState;

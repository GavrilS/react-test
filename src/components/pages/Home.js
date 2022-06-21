import { React, Fragment } from "react";
import ItemCollection from "../searches/ItemCollection";
import Search from "../searches/Search";

const Home = () => {
    return (
        <Fragment>
            <Search />
            <ItemCollection />
        </Fragment>
    );
};

export default Home;

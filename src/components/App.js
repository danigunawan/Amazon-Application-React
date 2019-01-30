import React from "react";
import "../styles/App.css";
import ProductShowPage from "./ProductShowPage";
import ProductIndexPage from "./ProductIndexPage";
import BootTable from "./BootTable";

import productsData from "../productsData";
import productData from "../productData";
import tableData from "../tableData";

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAtom } from '@fortawesome/free-solid-svg-icons';
import Fa from "./Fa";

library.add(faAtom);


const App = () => {
    // console.log(tableData);
    return (
        <div>
            <span style={{padding: "5px", fontSize: "32px"}}>
                <FontAwesomeIcon icon="atom" />
                Amazon Application React Version
                <Fa kind={"canadian-maple-leaf"} size={"1x"} faSpin={false} />
            </span>
            <ProductIndexPage products={productsData} />
            <ProductShowPage product={productData} />
            <BootTable tableData={tableData} striped={true} bordered={true} condensed={false} hover={true} />
        </div>
    );
};

export default App;
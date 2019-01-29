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

library.add(faAtom);

const App = () => {
    // console.log(tableData);
    return (
        <div>
            <a href="" style={{padding: "0 5px"}}><FontAwesomeIcon icon="" /> Amazon Application React Version<br/><br/></a>
            <BootTable tableData={tableData} striped={true} bordered={true} condensed={false} hover={true} />
            <ProductIndexPage products={productsData} />
            <ProductShowPage product={productData} />
        </div>
    );
};

export default App;
import React from "react";
import "../styles/App.css";
import ProductShowPage from "./ProductShowPage";
import ProductIndexPage from "./ProductIndexPage";
// import BootTable from "./BootTable";

import productsData from "../productsData";
import productData from "../productData";
// import tableData from "../tableData";

const App = () => {
    // console.log(tableData);
    return (
        <div>
            {/* <BootTable data={tableData} /> */}
            <ProductIndexPage products={productsData} />
            <ProductShowPage product={productData} />
        </div>
    );
};

export default App;
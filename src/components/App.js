import React from "react";
import "../styles/App.css";
import ProductShowPage from "./ProductShowPage";
import ProductIndexPage from "./ProductIndexPage";

import productsData from "../productsData";
import productData from "../productData";

const App = () => {
    return (
        <div>
            {/* <ProductIndexPage products={productsData} /> */}
            <ProductShowPage product={productData} />
        </div>
    );
};
export default App;
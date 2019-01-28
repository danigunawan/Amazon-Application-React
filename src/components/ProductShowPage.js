import React from "react";
import ProductDetails from "./ProductDetails";
// import ReviewDetails from "./ReviewDetails";
import ReviewList from "./ReviewList"

const ProductShowPage = props => {
    return (
        <main>
            <ProductDetails {...props.product} />
            <h2>Reviews</h2>
            <ReviewList reviews={props.product.reviews} />
        </main>

    );
};

export default ProductShowPage;
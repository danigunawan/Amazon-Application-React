import React from "react";

const ProductDetails = props => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <p>{props.price}</p>
            <p>
                <small>Created: {props.created_at.toLocaleString()}</small>
                <small>Last Edited: {props.updated_at.toLocaleString()}</small>
            </p>
        </div>
    );
};

export default ProductDetails;
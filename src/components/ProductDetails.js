import React from "react";

const ProductDetails = props => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <p>Price: {props.price}</p>
            <p>Sale Price: {props.sale_price}</p>
            <p>Favorites Count:{props.favourites_count}</p>
            <p>Tags: {props.tag_names.split(", ")}</p>
            <p>{props.author.full_name}</p>
            <p>Seller can be reached at: {props.author.email}</p>
            <p>
                <small>Created: {props.created_at.toLocaleString()}</small>
                <small>Last Edited: {props.updated_at.toLocaleString()}</small>
            </p>
        </div>
    );
};

export default ProductDetails;
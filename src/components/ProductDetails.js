import React from "react";

const ProductDetails = props => {
    return (
        <div style={{
            backgroundColor: "lightblue",
            borderRadius: "10px",
            paddingLeft: "5px"
        }}>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <p>Price: {props.price}</p>
            <p>Sale Price: {props.sale_price}</p>
            <p>Favorites Count:{props.favourites_count}</p>
            <p>Tags: {props.tag_names.split(", ")}</p>
            <p>{props.author.full_name}</p>
            <p>Seller can be reached at: {props.author.email}</p>
            <p style={{ padding: "5px 0"}} >
                <small>Created: {props.created_at.toLocaleString()}</small>
                <span style={{ padding: "0 5px"}} >•</span>
                <small>Last Edited: {props.updated_at.toLocaleString()}</small>
            </p>
        </div>
    );
};

export default ProductDetails;
import React from "react";

const ProductIndexPage = props => {
    return (
        <main>
            <h1>Products</h1>
            <ul style={{
                padding: 0,
                listStyle: "none"
            }}>
                {props.products.map(product => {
                    <li key={product.id}>
                        <a href="#ignore-me">{product.title}</a>
                    </li>
                })}
            </ul>
        </main>
    );
};

export default ProductIndexPage;
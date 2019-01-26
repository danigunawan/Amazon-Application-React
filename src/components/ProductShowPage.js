import React from "react";
import ProductDetails from "./ProductDetails";
import ReviewDetails from "./ReviewDetails";

const ProductShowPage = () => {
    return (
        <main>
            <ProductDetails 
                title="OG OG OG OG"
                description="anti-inflammatory effects on layer cortex of the brain"
                price="30"
                created_at={new Date()}
                updated_at={new Date()}
            />
            <h2>Reviews</h2>
            <ReviewDetails 
                body="Of all the rooms to burn in your uncle's home...the kitchen! Are you mad, boy?"
                author={{full_name: "Ulises Wisozk"}}
                created_at={new Date()}
            />
        </main>

    );
};

export default ProductShowPage;
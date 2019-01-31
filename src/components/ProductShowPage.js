import React, { Component } from "react";
import ProductDetails from "./ProductDetails";
// import ReviewDetails from "./ReviewDetails";
import ReviewList from "./ReviewList"

import { Product } from "../requests";

class ProductShowPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // product: {...this.props.product}
            product: null
        };

        this.deleteProduct = this.deleteProduct.bind(this);

        this.deleteReview = this.deleteReview.bind(this);
    }

    componentDidMount() {
        // const id = this.props.match.params.id;

        Product.one(5589).then(product => {
            this.setState({
                product: product,
                loading: false
            })
        })
    }

    deleteProduct() {
        console.log("Deleting a product");
        this.setState({ product: null });
    }

    deleteReview(id) {
        this.setState((state) => ({
            product: {
                ...state.product,
                reviews: state.product.reviews.filter(r => r.id !== id)
            }
        }));
    }

    render () {
        if (this.state.loading) {
            return (
                <main>
                    <h2>Loading the product...</h2>
                </main>
            )
        }

        if (!this.state.product) {
            return (
                <h2>Product doesn't exist anymore!</h2>
            );
        }
        return (
            <main>
                <h1>The product you are viewing right now is: </h1>
                <ProductDetails {...this.state.product} />
                <button onClick={this.deleteProduct} >Delete</button>

                <h1>Reviews</h1>
                <ReviewList reviews={this.state.product.reviews} onReviewDeleteClick={this.deleteReview} />
            </main>
    
        );
    };
};

export default ProductShowPage;
import React, { Component } from "react";
import ProductDetails from "./ProductDetails";
// import ReviewDetails from "./ReviewDetails";
import ReviewList from "./ReviewList"

class ProductShowPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            product: {...this.props.product}
        }

        this.deleteProduct = this.deleteProduct.bind(this);

        this.deleteReview = this.deleteReview.bind(this);
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
        if (!this.state.product) {
            return (
                <h2>Product doesn't exist anymore!</h2>
            );
        }
        return (
            <main>
                <ProductDetails {...this.state.product} />
                <button onClick={this.deleteProduct} >Delete</button>
                <h2>Reviews</h2>
                <ReviewList reviews={this.state.product.reviews} onReviewDeleteClick={this.deleteReview} />
            </main>
    
        );
    }
};

export default ProductShowPage;
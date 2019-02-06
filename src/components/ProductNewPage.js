import React, { Component } from "react";
import NewProductForm from "./NewProductForm";
import { Product } from "../requests";


class ProductNewPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // product: null
        };

        // this.handleSubmit = this.handleSubmit.bind(this);
        this.createProduct = this.createProduct.bind(this);
    }

    // handleSubmit(event) {
    //     event.preventDefault();

    //     const { currentTarget } = event;
    //     const formData = new FormData(currentTarget);

    //     this.state.onSubmit({
    //         title: formData.get("title"),
    //         description: formData.get("description"),
    //         price: formData.get("price")
    //     });

    //     Product.create(formData).then(productFromServer => {
    //         this.props.history.push(`/products/${productFromServer.id}`);
    //     });
    //     // currentTarget.reset();
    // }

    createProduct(params) {
        Product
            .create(params)
            .then(data => {
                this.props.history.push(`/products/${data.id}`);

            });
    }

    render() {
        return (
            <main>
                <h1>New Product Form Page</h1>
                <NewProductForm onSubmit={this.createProduct} /> 
                {/* <form style={{margin: "5px"}} className="ProductForm form-group" onSubmit={this.handleSubmit} >
                    <div>
                        <label className="label-control" htmlFor="title">Title</label>
                        <input className="form-control" type="title" name="title" />
                    </div>
                    <div>
                        <label className="label-control" htmlFor="description">Description</label>
                        <input className="form-control" type="description" name="description" />
                    </div>
                    <div>
                        <label className="label-control" htmlFor="price">Price</label>
                        <input className="form-control" type="price" name="price" />
                    </div>
                    <br/>
                    <div>
                        <input className="btn btn-primary" type="submit" value="Submit Product" />
                    </div>
                </form> */}
            </main>
        );
    }
}

export default ProductNewPage;
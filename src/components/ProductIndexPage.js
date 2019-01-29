import React, { Component } from "react";
import NewProductForm from "./NewProductForm";

class ProductIndexPage extends Component {
constructor(props) {
    super(props);

    this.state= {
        products: [ ...this.props.products ]
    }

    this.createProduct = this.createProduct.bind(this);
}

deleteProduct(id) {
    this.setState((state, props) => ({
        products: state.products.filter(p => p.id !== id)
    }))
}

createProduct(params) {
    this.setState((state) => ({
        products: [
            {
                id: Math.max(...state.products.map(p => p.id)) + 1,
                ...params
            },
            ...state.products
        ]
    }));
}

render() {
    return (
        <main>
            <NewProductForm onSubmit={this.createProduct} />
            <h1>Products</h1>
            <ul style={{
                padding: 0,
                listStyle: "none"
            }}>
                {this.state.products.map(product => (
                    <li key={product.id}>
                        <a href="#ignore-me">{product.title}</a> <br/>
                        <small>    
                            <button style={{margin: "5px"}} onClick={ event => {
                                this.deleteProduct(product.id);
                            }} >Delete</button>
                        </small>
                    </li>
                ))}
            </ul>
        </main>
    );
}
};

export default ProductIndexPage;
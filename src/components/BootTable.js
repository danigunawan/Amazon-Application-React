import React, { Component } from "react";
import {Table} from "react-bootstrap";
// import tableData from "../tableData";
import { Product } from "../requests";

class BootTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // tableData: [...tableData],
            products: null,
            stripped: true,
            bordered: true,
            condensed: true,
            hoverRows: true
        }
    }

    componentDidMount() {
        console.log("Component did mount!");
        Product.all().then(products => {
            const newProducts = products.map((product) => {
                delete product.author;
                delete product.reviews;
                return product
            }
            )

            this.setState({
                products: newProducts
            });
        });
    }
    render() {
        if (!this.state.products) {
            return (
                <main>
                    <h1>Table loading...</h1>
                </main>
            )
        }
        return (
            <Table striped={this.state.stripped} bordered={this.state.bordered} condensed={this.state.condensed} hover={this.state.hoverRows} >
                <thead>
                    <tr>
                        <th>#</th>
                        {Object.keys(this.state.products[0]).map((columnName) => <th key={columnName} >{columnName}</th> )}
                    </tr>
                </thead>
                <tbody>
                    {this.state.products.map((product, index) => {
                        // console.log(product);
                         return <tr key={index} >
    
                            <td>{index+1}</td>

                            {Object.keys(product).map((propName, indexNew) => {
                                // console.table(product[propName]);
                                return <td key={indexNew} >{product[propName]}</td>
                            })}
                        
                        </tr>
                    })}
                </tbody>
            </Table>
        );
    }
};

export default BootTable;
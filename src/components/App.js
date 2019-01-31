import React, { Component } from "react";
import "../styles/App.css";
import ProductShowPage from "./ProductShowPage";
import ProductIndexPage from "./ProductIndexPage";
import BootTable from "./BootTable";

import productsData from "../productsData";
import productData from "../productData";
import tableData from "../tableData";

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAtom } from '@fortawesome/free-solid-svg-icons';

import Fa from "./Fa";

import { Product } from "../requests";
import { Session } from "../requests";

library.add(faAtom);

// window.Product = Product;
// window.Session = Session;


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: null
        }
    }

    componentDidMount() {
        Session
        .create({email: "js@winterfell.gov", password: "daenerystargaryen"})
        .then((user) => {
            this.setState({
                currentUser: user
            });
        });
    }

    render () {

        return (
            <div>
                <span style={{padding: "5px", fontSize: "32px"}}>
                    <FontAwesomeIcon icon="atom" />
                    
                    Amazon Application React Version
                    
                    <Fa kind={"canadian-maple-leaf"} size={"1x"} faSpin={true} />
                </span>
                <BootTable tableData={tableData} striped={true} bordered={false} condensed={true} hover={false} />
                
                {/* <ProductIndexPage products={productsData} /> */}
                <ProductIndexPage />
                {/* <ProductShowPage product={productData} /> */}
                <ProductShowPage />
            </div>
        );
    }
};

export default App;
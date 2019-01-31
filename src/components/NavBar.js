import React from "react";
import { NavLink } from "react-router-dom";

import Fa from "./Fa";

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAtom } from '@fortawesome/free-solid-svg-icons';
library.add(faAtom);

const NavBar = props => {
    return (
        <nav>
            <span style={{padding: "5px", fontSize: "32px"}}>
                <FontAwesomeIcon icon="atom" />

                <NavLink to="/products">
                Amazon Application React Version
                </NavLink>  
                        
                <Fa kind={"canadian-maple-leaf"} size={"2x"} faSpin={true} />
            
            </span>
            <NavLink to="/" >Home</NavLink> <span> | </span>
            <NavLink to="/products" >Products</NavLink> <span> | </span>
            <NavLink to="/productstable">Table of the Products</NavLink> <span> | </span>
            <NavLink to="/products/new">New Product Form</NavLink>
        </nav>
    );
}

export default NavBar
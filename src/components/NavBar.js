import React from "react";
import { NavLink } from "react-router-dom";

import Fa from "./Fa";

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAtom } from '@fortawesome/free-solid-svg-icons';

library.add(faAtom);

const NavBar = props => {
    const { currentUser, onSignOut = () => {} } = props;

    const handleSignOutClick = event => {
        event.preventDefault();

        onSignOut();
    }

    return (
        <nav>
            {/* <span style={{padding: "5px", fontSize: "32px"}}> */}
                <Fa kind={"canadian-maple-leaf"} size={"1x"} faSpin={true} />
            
                <a href="#not-used" className="fa-spin" styling={{fontSize: "5px"}}>
                    <FontAwesomeIcon icon="atom" />
                </a>
            
                <NavLink to="/products">Amazon Application React Version</NavLink>  
            {/* </span> */}

            <NavLink to="/" >Home</NavLink>
            <NavLink to="/products" >Products</NavLink>
            <NavLink to="/productstable">Table of the Products</NavLink>
            <NavLink to="/products/new">New Product Form</NavLink>

            {
                currentUser ? (
                    <>
                    <span style={{marginLeft: "auto"}} >Hi, {currentUser.full_name}</span>
                    <a href="#not-used" onClick={handleSignOutClick} >Sign Out</a>
                    </>
                ) : (
                    <NavLink to="/sign_in" style={{marginLeft: "auto"}}>Sign In</NavLink>
                )
            }
        </nav>
    );
}

export default NavBar
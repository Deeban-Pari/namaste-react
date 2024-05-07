import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";


const Header=()=>{
    const [btnLogin,setBtnLogin]=useState("Login");
    console.log('Header rendered');

    // if the dependency array => useEffect is called on every render
    // if dependency array is empty = [] => useEffect is called on initial render (just once)
    // dependency array is optional not mandatory
    // if dependency array is [btnLogin] => called everytime btnLogin is updated
    useEffect(()=>{
        console.log('useEffect Called');
    },[btnLogin])
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{ btnLogin ==="Login" ? setBtnLogin("Logout") : setBtnLogin("Login")}}>{btnLogin}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;
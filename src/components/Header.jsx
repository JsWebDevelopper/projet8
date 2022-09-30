import React from 'react';
import {NavLink} from "react-router-dom"; 
import "../styles/header.css";
import logo from '../000/logo.svg'

const Header = () => {
    return (
        <div>
            <div className="Navigation">
                <span><img src={logo}  alt="" /></span>
                <ul>
                    <li><NavLink to="/">Acceuil</NavLink></li>
                    <li><NavLink to="/about">A Propos</NavLink></li>

                </ul>
            </div>
        </div>
    );
};

export default Header;
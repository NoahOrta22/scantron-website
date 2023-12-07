import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Navbar.css";

export const Navbar = () => {
    return (
        <nav className='nav'>
            <Link to="/home" className='site-title'>Home</Link>
            <ul>
                <li>
                    <NavLink to="/submit-scantron">Submit Scantron</NavLink>
                </li>
                <li>
                    <NavLink to="/">Logout</NavLink>
                </li>
            </ul>
        </nav>
    );
};
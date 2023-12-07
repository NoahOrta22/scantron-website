import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Navbar } from "../components/navbar/Navbar";

export const HomePage = () => {

    const navigate = useNavigate();

    const handleLogOutClick = () => {
        // navigates back to root
        navigate("/");
    }

    return (
        <>
            {/* <Navbar /> */}
            <div>
                <h1>This is the homepage</h1>
                <button type='button' onClick={handleLogOutClick}>Logout</button>
                {/* <nav>
                    <ul>
                        <li>
                            <Link to="/submit-scantron">Submit Scantron</Link>
                        </li>
                        <li>
                            <Link to="/">Logout</Link>
                        </li>
                    </ul>
                </nav> */}
            </div>
        </>
       
        
    );
};
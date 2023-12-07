import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Navbar } from "../components/navbar/Navbar";

export const HomePage = () => {
  const navigate = useNavigate();

  const handleLogOutClick = () => {
    // navigates back to root
    navigate("/");
  };

  return (
    <>
      <div>
        <h1>This is the homepage</h1>
        <button type="button" onClick={handleLogOutClick}>
          Logout
        </button>
      </div>
    </>
  );
};

import React from "react";
import "./../Style/header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <li className="logo">Portfolio</li>
    
    
      <nav className="navbar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </nav>
    </div>
  );
};

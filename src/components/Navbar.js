import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";
import logo from "../assets/logo.png";


function Navbar() {
  return (
    <div>
      <nav className="nav">
        <div className="container">
          <div className="logo">
            <Link to="/">
              <img className="logo" src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="main_list">
            <ul className="navlinks">
              <li>
                <Link to="/">Sneakers</Link>
              </li>
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/Contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Link className="log" to="/Login">
        <button className="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            ></path>
          </svg>
          <div className="text">Log In</div>
        </button>
      </Link>
    </div>
  );
}

export default Navbar;

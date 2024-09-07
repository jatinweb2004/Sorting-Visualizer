
import './Navbar.css';
import { NavLink } from 'react-router-dom';

import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = (props) => {
  
    const inputRef = useRef(null);
  const [Target, setTarget] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Define the function you want to trigger when Enter is pressed
  const handleSubmit = () => {
    console.log(Target);
    const url = `/search?target=${Target}`;
    // Navigate to the constructed URL
    window.location.href = url;
    setTarget("");
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };



  return (
    <nav className="navbar">
      <div
        className={`hamburger ${isOpen ? "" : "ham-active"}`}
        onClick={toggleMenu}
      >
        <div className="hamburger-span">
          <span className={`hamburger-span-line ${isOpen ? "open" : ""}`} />
          <span className={`hamburger-span-line ${isOpen ? "open" : ""}`} />
          <span className={`hamburger-span-line ${isOpen ? "open" : ""}`} />
        </div>
        <div className={`ham-heading ${isOpen ? "ham-heading-active" : ""}`}>
          Sorting Visualizer
        </div>
      </div>
      <div className={`nav-items ${isOpen ? "open" : ""}`}>
        <div className="campus" onClick={toggleMenu}>
          Sorting Visualizer
        </div>
        <hr className="horizontal-line" />
        <Link
          to="/"
          className={`home`}
        >
          {isOpen ? "About" : "Sorting Visualizer"}
        </Link>


        <Link
          to={`/Bubble`}
          className={`myprofile ${
            location.pathname === `/Bubble` ? "active" : ""
          }`}
        >
          Bubble Sort
        </Link>

        <Link
          to={`/Merge`}
          className={`myprofile ${
            location.pathname === `/Merge` ? "active" : ""
          }`}
        >
          Merge Sort
        </Link>

        <Link
          to={`/Quick`}
          className={`myprofile ${
            location.pathname === `/Quick` ? "active" : ""
          }`}
        >
          Quick Sort
        </Link>

        <Link
          to={`/Heap`}
          className={`myprofile ${
            location.pathname === `/Heap` ? "active" : ""
          }`}
        >
          Heap Sort
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

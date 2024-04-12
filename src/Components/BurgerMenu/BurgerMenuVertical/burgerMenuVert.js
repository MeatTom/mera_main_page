import React, { useState } from 'react';
import './burgerMenuVert.css';
import SearchBar from "../../SearchBar/searchBar";

const BurgerMenuVert = ({ children }) => {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!open);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="burger-menu-container">
            <button className={`burger-menu-button ${open ? 'open' : ''}`} onClick={toggleMenu}>
                <span className="spinner diagonal part-1"></span>
                <span className="spinner horizontal"></span>
                <span className="spinner diagonal part-2"></span>
            </button>
            <div className={`menu ${open ? 'menu-open' : ''}`}>
                {/*<button className="close-button" onClick={handleClose}>x</button>*/}
                <ul className="sidebarMenuInner">
                    <li>{children}</li>
                </ul>
            </div>
        </div>
    );
};

export default BurgerMenuVert;

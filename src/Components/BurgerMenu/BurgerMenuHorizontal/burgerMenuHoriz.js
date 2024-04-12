import React, { useState } from 'react';
import './burgerMenuHoriz.css';

const BurgerMenuHoriz = (props) => {
    const [open, setOpen] = useState(false);

    return (
        <div
            className={`container ${open ? 'change' : ''}`}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            <div className="burger burger1"></div>
            <div className="burger burger2"></div>
            <div className="burger burger3"></div>
            <a href={props.href} className="menu-text">{props.title}</a>
            {open && (
                <div className="submenu">
                    {props.children.map((item, index) => (
                        <div className="submenu-item" key={index}>
                            {item}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default BurgerMenuHoriz;

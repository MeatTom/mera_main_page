import React from 'react';
import './searchBar.css';

const SearchBar = () => {
    return (
        <div className="search-bar">
            <input className="search-bar-input" type="text" placeholder="Поиск" />
            <div className="search-button">
            <img src="https://i.yapx.ru/XUEVG.png"></img>
            </div>
        </div>
    );
};

export default SearchBar;

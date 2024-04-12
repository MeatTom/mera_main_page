import React from "react";
import BurgerMenuHoriz from "../BurgerMenu/BurgerMenuHorizontal/burgerMenuHoriz";
import './header.css'
import SearchBar from "../SearchBar/searchBar";
import BurgerMenuVert from "../BurgerMenu/BurgerMenuVertical/burgerMenuVert";

const Header = () => {
    return (
        <header className="header">
            <nav>
                <ul>
                    <BurgerMenuHoriz title="Продукция" href="/products">
                        <a href="/product1">Расходомеры</a>
                        <a href="/product2">Реле потока</a>
                        <a href="/product2">Наличие на складе</a>
                    </BurgerMenuHoriz>
                    <BurgerMenuHoriz title="MERA">
                        <a href="/about1">О компании</a>
                        <a href="/about2">Документы</a>
                        <a href="/about2">Новости</a>
                        <a href="/about2">Сотрудничество</a>
                        <a href="/about2">Опыт эксплуатации</a>
                        <a href="/about2">Тех. поддержка</a>
                    </BurgerMenuHoriz>
                    <a className="item-nav" href="/contacts">КОНТАКТЫ</a>
                </ul>
                <ul className="contact-info">
                    <img className="header-phone item-nav" src="https://i.yapx.ru/XUEU9.png" alt="phone"></img>
                    <li className="contact-details">
                        <a className="head-phone " href="tel:88126770507">+7 (812) 677-05-77</a>
                        <a href="mailto:info@mera-russia.com" className="head-mail">info@mera-russia.com</a>
                    </li>
                </ul>
                <SearchBar className="search-bar"/>
                <BurgerMenuVert>
                    <li><a href="/products">Продукция</a></li>
                    <li><a href="/about">MERA</a></li>
                    <li><a href="/contacts">КОНТАКТЫ</a></li>
                </BurgerMenuVert>
            </nav>
        </header>
    );
};

export default Header;

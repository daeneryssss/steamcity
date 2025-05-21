import React from "react";
import "./components.css";
import { NavLink } from "react-router-dom";

import logo from "../images/logo.jpg";
import instagramlogo from "../images/instagram.png";
import telegramlogo from "../images/telegram.png";

const Header = ({ }) => {
    return (
        <header className="PageHeader">
            <ul className="Menu">
                <li className="MenuItem"><NavLink to="/" end className={({ isActive }) => isActive ? "MenuItemLink ActiveLink" : "MenuItemLink"}>Головна</NavLink></li>
                <li className="MenuItem"><NavLink to="/about" end className={({ isActive }) => isActive ? "MenuItemLink ActiveLink" : "MenuItemLink"}>Про нас</NavLink></li>
                <li className="MenuItem"><NavLink to="/reviews" end className={({ isActive }) => isActive ? "MenuItemLink ActiveLink" : "MenuItemLink"}>Відгуки</NavLink></li>
                <li className="MenuItem"><NavLink to="/contacts" end className={({ isActive }) => isActive ? "MenuItemLink ActiveLink" : "MenuItemLink"}>Контакти</NavLink></li>
            </ul>
            <a href="/" className="HeaderLogo"><img src={logo} alt="Logo" className="HeaderLogoImage" /></a>
            <section className="RightSideMenu">
                <a href="/authorize" className="AutorizationButton">Авторизація</a>
                <div className="DecorText"></div>
                <section className="LogoSection">
                    <a href=""><img src={instagramlogo} alt="Instagram" className="LogoImage" /></a>
                    <a href=""><img src={telegramlogo} alt="Telegram" className="LogoImage" /></a>
                </section>
            </section>
        </header>
    )
};

export default Header;
import React from "react";
import "./components.css";
import logo from "../images/logo.jpg";
import instagramlogo from "../images/instagram.png";
import telegramlogo from "../images/telegram.png";

const Header = ({ }) => {
    return (
        <header className="PageHeader">
            <ul className="Menu">
                <li className="MenuItem"><a href="/" className="MenuItemLink">Головна</a></li>
                <li className="MenuItem"><a href="/about" className="MenuItemLink">Про нас</a></li>
                <li className="MenuItem"><a href="/reviews" className="MenuItemLink">Відгуки</a></li>
                <li className="MenuItem"><a href="/contacts" className="MenuItemLink">Контакти</a></li>
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
'use client'
import { useState } from 'react';
import korzina from '@/app/content/bascket.png';
import logo from '@/app/content/В.О.svg';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="container">
      <div className="left-header">
        <img src={logo.src} alt="" className="header-logo" />
        <div className="burger-icon" onClick={toggleMenu}>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </div>
        <p className="menu-catalog">Каталог</p>
      </div>
      <div className={`center-header ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li className="menu-hotbar"><a href="#">Заказать</a></li>
          <li className="menu-hotbar"><a href="#">О нас</a></li>
          <li className="menu-hotbar"><a href="#">Контакты</a></li>
        </ul>
      </div>
      <div className="right-header">
        <img src={korzina.src} alt="" className="korzina" />
        <p>(0)</p>
      </div>
    </header>
  );
}

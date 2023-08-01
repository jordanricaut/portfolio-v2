import React from "react";
import Image from "next/image";
import Logo from "../../../public/logo.png";

export default function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="container container--1280">
          <div className="header__main">
            <a href="#">
              <Image src={Logo} alt="Logo" width={55} height={55} />
            </a>
            <nav className="header__nav">
              <li>
                <ul>
                  <a href="#about">A Propos</a>
                </ul>
                <ul>
                  <a href="#cpt">Compétences</a>
                </ul>
                <ul>
                  <a href="#projets">Projets</a>
                </ul>
                <ul>
                  <a href="#activites">Activités</a>
                </ul>
                <ul>
                  <a href="#contact">Contact</a>
                </ul>
              </li>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

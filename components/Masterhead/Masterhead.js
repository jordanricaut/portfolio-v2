import React, { useEffect } from "react";
import Header from "./Header/Header";
import $ from "jquery";

export default function Masterhead() {


  return (
    <>
      <Header />
      <section className="masterhead">
        <div className="container container--1280">
          <div className="masterhead__wrapper">
            <div className="masterhead__texte">
              <span>Bonjour, je suis</span>
              <h1>Jordan Ricaut</h1>
              <span>Développeur web frontend freelance</span>
            </div>
            <div className="masterhead__image"></div>
          </div>
        </div>
        <div className="scroll-link">
          <svg
            className="mouse"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 76 130"
            preserveAspectRatio="xMidYMid meet"
          >
            <g fill="none" fillRule="evenodd">
              <rect
                width="70"
                height="118"
                x="1.5"
                y="1.5"
                stroke="#001122"
                strokeWidth="3"
                rx="36"
              />
              <circle
                className="scroll"
                cx="36.5"
                cy="31.5"
                r="4.5"
                fill="#001122"
              />
            </g>
          </svg>
        </div>
      </section>
    </>
  );
}

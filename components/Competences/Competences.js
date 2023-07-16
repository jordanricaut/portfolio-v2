import React, { useEffect, useState } from "react";
import $ from "jquery";
import axios from "axios";

export default function Competences(props) {
  useEffect(() => {
    // COULEUR BORDURE
    const blocElement = document.querySelectorAll(
      ".cpt__content__element"
    );
    const blocElementArray = Array.from(blocElement);
    blocElementArray.forEach((element) => {
      if (element.getAttribute("data-cpt") === "dev") {
        element.style.borderTopColor = "#157CBD";
      }
      if (element.getAttribute("data-cpt") === "fram") {
        element.style.borderTopColor = "#BD9915";
      }
      if (element.getAttribute("data-cpt") === "design") {
        element.style.borderTopColor = "#007020";
      }
    });
    // FIN BORDURE COULEUR
  }, []);

  function recupElementCpt() {
    const blocElement = document.querySelectorAll(
      ".cpt__content__element"
    );
    const blocElementArray = Array.from(blocElement);

    return blocElementArray;
  }

  function displayAllCpt() {
    const el = recupElementCpt();
    el.forEach((element) => {
      if (element.getAttribute("data-cpt") == "dev" || "fram" || "design") {
        element.style.display = "flex";
      }
    });
  }

  function displayCptDev() {
    const el = recupElementCpt();
    el.forEach((element) => {
      if (element.getAttribute("data-cpt") != "dev") {
        element.style.display = "none";
      } else {
        element.style.display = "flex";
      }
    });
  }

  function displayCptFramework() {
    const el = recupElementCpt();
    el.forEach((element) => {
      if (element.getAttribute("data-cpt") != "fram") {
        element.style.display = "none";
      } else {
        element.style.display = "flex";
      }
    });
  }

  function displayCptDesign() {
    const el = recupElementCpt();
    el.forEach((element) => {
      if (element.getAttribute("data-cpt") != "design") {
        element.style.display = "none";
      } else {
        element.style.display = "flex";
      }
    });
  }

  return (
    <section className="cpt" id="cpt">
      <div className="container container--1280">
        <div className="cpt__wrapper">
          <h3>
            <span>02.</span> Compétences
          </h3>
            <div className="cpt__tri">
              <button
                onClick={displayAllCpt}
                className="cpt__tri__bouton"
              >
                <span>Toutes</span>
              </button>
              <button
                onClick={displayCptDev}
                className="cpt__tri__bouton"
              >
                <span>Languages Dev</span>
              </button>
              <button
                onClick={displayCptFramework}
                className="cpt__tri__bouton"
              >
                <span>Frameworks / Librairies</span>
              </button>
              <button
                onClick={displayCptDesign}
                className="cpt__tri__bouton"
              >
                <span>Design</span>
              </button>
            </div>

            <div className="cpt__content">
              <div className="cpt__content__wrapper">
              <div className="cpt__content__element" data-cpt="dev">
                  <div className="cpt__content__element__img cpt__content__element__img--html"></div>
                  <p>HTML & CSS</p>
                </div>
                <div className="cpt__content__element" data-cpt="dev">
                  <div className="cpt__content__element__img cpt__content__element__img--js"></div>
                  <p>Javascript</p>
                </div>
                <div className="cpt__content__element" data-cpt="dev">
                  <div className="cpt__content__element__img cpt__content__element__img--php"></div>
                  <p>PHP</p>
                </div>
                <div className="cpt__content__element" data-cpt="dev">
                  <div className="cpt__content__element__img cpt__content__element__img--sql"></div>
                  <p>MYSQL / MONGODB</p>
                </div>
                <div className="cpt__content__element" data-cpt="fram">
                  <div className="cpt__content__element__img cpt__content__element__img--boot"></div>
                  <p>BOOTSTRAP</p>
                </div>
                <div className="cpt__content__element" data-cpt="fram">
                  <div className="cpt__content__element__img cpt__content__element__img--sass"></div>
                  <p>SASS</p>
                </div>
                <div className="cpt__content__element" data-cpt="fram">
                  <div className="cpt__content__element__img cpt__content__element__img--react"></div>
                  <p>React (Native) / Redux</p>
                </div>
                <div className="cpt__content__element" data-cpt="fram">
                  <div className="cpt__content__element__img cpt__content__element__img--backjs"></div>
                  <p>NODEJS / EXPRESS JS</p>
                </div>
                <div className="cpt__content__element" data-cpt="fram">
                  <div className="cpt__content__element__img cpt__content__element__img--wp"></div>
                  <p>WORDPRESS</p>
                </div>
                <div className="cpt__content__element" data-cpt="fram">
                  <div className="cpt__content__element__img cpt__content__element__img--git"></div>
                  <p>GIT</p>
                </div>
                <div className="cpt__content__element" data-cpt="design">
                  <div className="cpt__content__element__img cpt__content__element__img--figma"></div>
                  <p>Figma</p>
                </div>
                <div className="cpt__content__element" data-cpt="design">
                  <div className="cpt__content__element__img cpt__content__element__img--adobe"></div>
                  <p>Photoshop / Illustrator</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}

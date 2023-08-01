import React, { useEffect, useState } from "react";

export default function Projets() {
  return (
    <section className="projets" id="projets">
      <div className="container container--1280">
        <div className="projets__wrapper">
          <h3>
            <span>03.</span> Mes derniers projets
          </h3>
          <div className="projets__contenu">
            {/* PREMIER */}
            <div className="projets__contenu__bloc">
              <div className="projets__contenu__bloc__lien">
                <a
                  href="#"
                  target="_blank"
                  className="projets__contenu__bloc__lien__icon projets__contenu__bloc__lien__icon--externe"
                  aria-label="Lien vers l'ancien portfolio"
                ></a>
              </div>
              <h3>Portfolio V1</h3>
              <p className="projets__contenu__bloc__texte">
                Création de mon portfolio sous Wordpress avec la création d'un
                thème personnalisé avec l'intégration d'une maquette
              </p>
              <div className="projets__contenu__bloc__motcle">
                <p>Wordpress</p>
                <p>ACF</p>
                <p>Thème</p>
                <p>PHP</p>
                <p>Intégration</p>
              </div>
            </div>
            {/* DEUXIEME */}
            <div className="projets__contenu__bloc">
              <div className="projets__contenu__bloc__lien">
                <a
                  href="https://thebatchculture.com/"
                  target="_blank"
                  className="projets__contenu__bloc__lien__icon projets__contenu__bloc__lien__icon--externe"
                  aria-label="Lien vers le site thebatchculture.com"
                ></a>
              </div>
              <h3>The Batch Culture</h3>
              <p className="projets__contenu__bloc__texte">
                Création d’un thème WordPress à partir d’une maquette pour une
                entreprise de vente de cafés. Integration de WooCommerce ainsi
                qu'un système de notation des produits
              </p>
              <div className="projets__contenu__bloc__motcle">
                <p>Wordpress</p>
                <p>ACF</p>
                <p>Thème</p>
                <p>PHP</p>
                <p>Intégration</p>
                <p>WooCommerce</p>
              </div>
            </div>
            {/* TROISIEME */}
            <div className="projets__contenu__bloc">
              <div className="projets__contenu__bloc__lien">
                <a
                  href="https://github.com/jordanricaut/RGF_Bot"
                  target="_blank"
                  className="projets__contenu__bloc__lien__icon projets__contenu__bloc__lien__icon--github"
                  aria-label="Lien vers le repertoire github du projet du bot discord"
                ></a>
              </div>
              <h3>Bot Discord</h3>
              <p className="projets__contenu__bloc__texte">Création d’un bot discord permettant d'utiliser des commandes personnalisés ainsi qu'automatisé des messages</p>
              <div className="projets__contenu__bloc__motcle">
                <p>BackEnd</p>
                <p>NodeJS</p>
                <p>API</p>
                <p>DiscordJS</p>
              </div>
            </div>
            {/* QUATRIEME */}
            <div className="projets__contenu__bloc">
              <div className="projets__contenu__bloc__lien">
                <a
                  href="https://github.com/jordanricaut?tab=repositories"
                  target="_blank"
                  className="projets__contenu__bloc__lien__icon projets__contenu__bloc__lien__icon--github"
                  aria-label="Lien vers les repertoire de la formation openclassroom"
                ></a>
              </div>
              <h3>Formation OpenClassroom</h3>
              <p className="projets__contenu__bloc__texte">Multiples projets pour l'apprentisage de différents languages et librairies.</p>
              <div className="projets__contenu__bloc__motcle">
                <p>BackEnd</p>
                <p>FrontEnd</p>
                <p>Javascript</p>
                <p>React</p>
                <p>Redux</p>
                <p>HTML</p>
                <p>CSS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container container--1280">
        <div className="about__wrapper">
          <h3>
            <span>01.</span> A Propos
          </h3>
          <div className="about__content">
            <p>
              Je suis développeur web Frontend en freelance dans la région de
              Vannes, à votre disposition pour répondre à tout type de projets
              de création de sites internet vitrine, e-commerce, de
              développement spécifique ou d’applications web.
            </p>
            <p>
              Passionné par les technologies Web, je mets mes compétences au
              service de vos besoins dans divers domaines.
            </p>
            <p>
              Je réalise vos projets web sur mesure avec soin et
              professionnalisme afin de fournir un service de qualité. En
              recherche permanente de projet de tous domaines, n’hésitez pas à
              me contacter pour discuter du votre. 
            </p>
            <p>Je vous invite à découvrir
              mon profil, mes compétences ainsi que mes différentes réalisations
              à travers ce site web</p>
          </div>
          <a className="cta" href="/doc/CV_Jordan_Ricaut.pdf">
            <span>Mon CV</span>
          </a>
        </div>
      </div>
    </section>
  );
}

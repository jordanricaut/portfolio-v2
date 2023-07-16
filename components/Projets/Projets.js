import React, { useEffect, useState } from "react";

export default function Projets() {
  const [projets, setProjets] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/projets")
      .then((res) => {
        return res.json();
      })
      .then((parsed) => {
        setProjets(parsed);
      });
  }, []);
  return (
    <section className="projets" id="projets">
      <div className="container container--1280">
        <div className="projets__wrapper">
          <h3>
            <span>03.</span> Mes derniers projets
          </h3>
          <div className="projets__contenu">
            {projets.map((bloc) => {
              return (
                <div key={bloc.nom} className="projets__contenu__bloc">
                  <div className="projets__contenu__bloc__lien">
                    {bloc.lien.map((l) => {
                      if (l.externe && l.repertoire) {
                        return (
                          <>
                            <a href={l.externe} key={l.externe} target="_blank" className="projets__contenu__bloc__lien__icon projets__contenu__bloc__lien__icon--externe"></a>
                            <a href={l.repertoire} key={l.repertoire} target="_blank" className="projets__contenu__bloc__lien__icon projets__contenu__bloc__lien__icon--github"></a>
                          </>
                        );
                      } else if (l.externe) {
                        return <a href={l.externe} key={l.externe} target="_blank" className="projets__contenu__bloc__lien__icon projets__contenu__bloc__lien__icon--externe"></a>;
                      } else if (l.repertoire) {
                        return <a href={l.repertoire} key={l.repertoire} target="_blank" className="projets__contenu__bloc__lien__icon projets__contenu__bloc__lien__icon--github"></a>;
                      }
                    })}
                  </div>
                  <h3>{bloc.nom}</h3>
                  <p className="projets__contenu__bloc__texte">{bloc.texte}</p>
                  <div className="projets__contenu__bloc__motcle">
                    {bloc.motcle.map((mot) => {
                      return <p key={mot}>{mot}</p>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

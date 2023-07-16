import Masterhead from '@/components/Masterhead/Masterhead';
import About from '@/components/About/About';
import React from 'react';
import Competences from '@/components/Competences/Competences';
import Projets from '@/components/Projets/Projets';
import Activites from '@/components/Activites/Activites';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';

export default function Accueil() {
  return (
    <>
    <Masterhead/>
    <About/>
    <Competences/>
    <Projets/>
    <Activites/>
    <Contact/>
    <Footer/>
    </>
  )
}

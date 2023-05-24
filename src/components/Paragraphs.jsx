import React, { useEffect, useState } from 'react';
import '../assets/stylesheet/Paragraphs.css';
import Typed from "react-typed";


function Paragraphs() {

  return (
    <div>
      <div className="paragraph">
        <h5 align="center" className="p-3">
        <Typed
          strings={[
            "Nous offrons une sélection de matériel informatique à des prix imbattables.",
            "Explorez l'innovation avec notre matériel informatique de qualité.",
            "Votre satisfaction est notre priorité"
          ]}
          typeSpeed={100}
          showCursor={false}
          loop
        />
        </h5>
      </div>
    </div>
  );
}

export default Paragraphs;


function Paragraphsecond() {
  return (
    <div>
        <div className='paragraph'>
             <h5 align="center" className='p-3'> 
             Notre politique de retour sous deux semaines vous garantit une tranquillité absolue.
            </h5>
      </div>
    </div>
  )
}

export  {Paragraphsecond}


function Paragraphthird() {
  return (
    <div>
        <div className='paragraph'>
        <h5 align="center" className='p-3'> 
            Les produits de Networkleed sont synonymes de qualité, de fiabilité et de performance.
        </h5>
      </div>
    </div>
  )
}

export  {Paragraphthird}
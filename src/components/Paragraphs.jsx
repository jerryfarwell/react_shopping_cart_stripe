import React from 'react';
import '../assets/stylesheet/Paragraphs.css';


function Paragraphs() {

  return (
    <div>
      <div className="paragraph">
        <h5 align="center" className="p-3">
          Nous offrons une sélection de matériel informatique à des prix imbattables.
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
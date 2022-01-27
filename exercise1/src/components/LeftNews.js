import React from 'react';
import logo from '../leftkuva.png';

export default function LeftNews() {
  return  <div className="leftColumn">
              <h1>Koronavirus</h1>
              <img src={logo} alt="Leftkuva" width="100%"/>
              <h3 className='red'>HS seuraa</h3>
              <div className='leftText'>
              <span className='blue bold'>Päivittyvä seuranta | </span>
              <span className='bold'>STM: Parasetamolia tai deksametasonia on kulkeutunut lehmien päästöjen kautta koululaitoksien keittiöihin</span>
              </div>             
          </div>;
}

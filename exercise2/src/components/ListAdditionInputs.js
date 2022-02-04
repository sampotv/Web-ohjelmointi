import React, { useState } from 'react';
import './ListAdditionInputs.module.css';



export default function ListAdditionInputs(props) {

    const [ quantity, setQuantity ] = useState(0);

    function getRandomInt(max) {
        return Math.floor(Math.random() * max+1);
      }
    
  return <div className='row'>

        <button onClick={ () => props.onAddClick(getRandomInt(8), props.descriptionFieldValue)}>Lisää</button>
  </div>;
}

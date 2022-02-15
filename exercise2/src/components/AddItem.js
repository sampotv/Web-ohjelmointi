import React, { useState } from 'react';import React, { useState } from 'react';

export default function AddItem(props) {

  return <div>
         <button onClick={ () => props.onAddClick(quantity, props.descriptionFieldValue)}>Lisää</button>
  </div>;
}
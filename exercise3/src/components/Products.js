import React from 'react';

export default function Products(props) {
  return <div className='item'>
        <div><h1>{props.name}</h1></div>
        <img src={props.image} alt=""/>
        <div>{props.price}</div>        
  </div>;
}

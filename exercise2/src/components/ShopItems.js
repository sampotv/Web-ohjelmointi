import React from 'react';

export default function ShopItems(props) {
  return <div>
    <ul>      
        {
            props.listItems.map((item, index) => {       
              return <li className="item" key={index}> { item.qty } { item.name }  </li>                         
            })
        }
    </ul> 
  </div>;
}
import React from 'react';

export default function ShopButtons(props) {
  return <div className=''>
          <button className="row" onClick={ ()=> props.buy(1) }>Kalja</button>
          <button className="row" onClick={ ()=> props.buy(2) }>Bisse</button>
          <button className="row" onClick={ ()=> props.buy(3) }>Kerma</button>
          <button className="row" onClick={ ()=> props.buy(4) }>Nakki</button>
  </div>;
}
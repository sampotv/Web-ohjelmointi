import React from 'react'
import Products from './Products'

export default function ProductListView(props) {
  return (
    <div className='main'>
        {props.products.map(p=> <Products name={p.title} image={p.image} price={p.price}/>)}
    </div>
  )
}

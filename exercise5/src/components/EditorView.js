import React, { useState } from 'react'

export default function EditorView(props) {
const [img, setImg] = useState("")
const [title, setTitle] = useState("")
const [price, setPrice] = useState("")
  return (
    <div>
        <h1>EditorView</h1>
        <h3>Lisää uusi tuote</h3>
        <form>
            <div>Nimi <input type="text" input value={title} onChange={(event) => setTitle(event.currentTarget.value)}/></div>
            <div>Hinta <input type="text" input value={price} onChange={(event) => setPrice(event.currentTarget.value)}/></div>
            <div>Tuotteen kuvan URL<input type="text" value={img} onChange={(event) => setImg(event.target.value)}/></div>
            <button onClick={()=>props.createProduct({
                    img,title,price
                      })}>Tallenna uusi tuote</button>
        </form>

                      <div><br></br><h3>Poista tuote</h3></div>
        {props.products.map(p=> <div>{p.title} <button onClick={() => props.onItemDelete(p)}>Poista tuote</button></div>)}
    </div>
  )
}

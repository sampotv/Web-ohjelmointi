import React from 'react'

export default function EditorView(props) {
  return (
    <div>
        <h1>EditorView</h1>
        <form>
            <div>Nimi <input type="text" value={props.title}/></div>
            <div>Hinta <input type="text" value={props.price}/></div>
            <button>Tallenna</button>
        </form>


        {props.products.map(p=> <div>{p.title} <button onClick={() => props.onItemDelete(p)}>Poista tuote</button></div>)}
    </div>
  )
}

import './App.css';
import Products from './components/Products'
import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';
import ProductListView from './components/ProductListView';
import EditorView from './components/EditorView';


function App() {

  const[editorModeOn, setEditorModeOn] = useState(false);
  const [products, setProducts] = useState([]);
  useEffect(() => {
      const getData = async () => {
        const results = await axios.get('./data.json');

        setProducts(results.data.products);
      }
      getData();

  }, []);
const onItemDelete = (item) => {
  let newProds = [...products];
  let deletedItemIndex = newProds.findIndex(p => p.id === item.id);
  newProds.splice(deletedItemIndex, 1);
  setProducts(newProds);
}
let output = <ProductListView products={products}/>;
if(editorModeOn == true){
  output = <EditorView products={products} onItemDelete={ onItemDelete}/>;
}


  return (
    

      <div>
            <button onClick={ () => setEditorModeOn(!editorModeOn)}>Admin Mode Toggle</button>
            {output}
            </div>
    
    
  );
}

export default App;


import './App.css';
import Title from './components/Title'
import ShoppingListContent from './components/ShoppingListContent';
import ListAdditionInputs from './components/ListAdditionInputs'
import { useState } from 'react';
import ShopItems from './components/ShopItems';
import ShopButtons from './components/ShopButtons';


function App() {

  const [ counterValue, setCounterValue ] = useState(0);
  const [ shoppingListItems, setShoppingListItems ] = useState([
    {
      id: 1,
      name: 'Kalja',
      qty: 0,
      isChecked: true
    },
    {
      id: 2,
      name: 'Maito',
      qty: 0,
      isChecked: true
    },
    {
      id: 3,
      name: 'Kerma',
      qty: 0,
      isChecked: true
    },
    {
      id: 4,
      name: 'Nakki',
      qty: 0,
      isChecked: true
    },
  ]);


  const addListItems = (id) => {

    let random = Math.floor((Math.random() *8)+1)
    let newShoppingListItems = [...shoppingListItems]
    let result = newShoppingListItems.findIndex(i => i.id === id)

      if (result !== -1) {
        let additions = {...newShoppingListItems[result]}
        additions.qty= additions.qty + random;
        newShoppingListItems[result] = additions;
        setShoppingListItems(newShoppingListItems)

      }
  }
  
  return (
    <div className="shoppingList">
      <Title />

      
      <ShopItems listItems={shoppingListItems}/>
          <ShopButtons buy={addListItems}/>

    </div>
  );
}

export default App;

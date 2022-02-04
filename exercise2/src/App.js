
import './App.css';
import Title from './components/Title'
import ShoppingListContent from './components/ShoppingListContent';
import ListAdditionInputs from './components/ListAdditionInputs'
import { useState } from 'react';

function App() {

  //Haetaan palvelimelta ostoslistan sisältö
  const [ counterValue, setCounterValue ] = useState(0);
  const [ shoppingListItems, setShoppingListItems ] = useState([
    {
      id: 1,
      name: 'maitoa',
      qty: 4,
      isChecked: true
    },
    {
      id: 2,
      name: 'leipää',
      qty: 5,
      isChecked: true
    },
    {
      id: 3,
      name: 'juustoa',
      qty: 2,
      isChecked: true
    },
  ]);

  const [description, setDescription] = useState("");



  const onListAddition = (getRandomInt) => {
    let newShoppingListItems = [...shoppingListItems, {  
      id: shoppingListItems.length, 
      name: 'Kalja',
      qty : getRandomInt,
      isChecked : false  
     }]; 
     setShoppingListItems(newShoppingListItems);
  }
  const onListAddition2 = (getRandomInt) => {
    let newShoppingListItems = [...shoppingListItems, {  
      id: shoppingListItems.length, 
      name: 'Bisse',
      qty : getRandomInt,
     }]; 
     setShoppingListItems(newShoppingListItems);
  }
  const onListAddition3 = (getRandomInt) => {
    let newShoppingListItems = [...shoppingListItems, {  
      id: shoppingListItems.length, 
      name: 'Kossu',
      qty : getRandomInt,

     }]; 
     setShoppingListItems(newShoppingListItems);
  }
  const onListAddition4 = (getRandomInt) => {
    let newShoppingListItems = [...shoppingListItems, {  
      id: shoppingListItems.length, 
      name: 'Jallu',
      qty : getRandomInt,
     }]; 
     setShoppingListItems(newShoppingListItems);
  }
  
  return (
    <div className="shoppingList">
      <Title />

      
      <ShoppingListContent listItems={ shoppingListItems } 

      descriptionFieldValue={ description }
      /> 
      <div className='row'>
      <ListAdditionInputs onAddClick={ onListAddition } />
       <ListAdditionInputs onAddClick={ onListAddition2} />
       <ListAdditionInputs onAddClick={ onListAddition3} />
       <ListAdditionInputs onAddClick={ onListAddition4} />
       </div>

    </div>
  );
}

export default App;

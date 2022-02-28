import './App.css';
import Products from './components/Products'
import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';


function App() {

  const [products, setProducts] = useState([]);
  useEffect(() => {
      const getData = async () => {
        const results = await axios.get('./data.json');

        setProducts(results.data.products);
      }
      getData();

  }, []);

  const [name, setName] = useState('');

  const [foundProd, setFoundProd] = useState(products);

  const filter = (e) => {
    const keyword = e.target.value;

    console.log("testi");
    // if (keyword !== '') {
    //   const results = products.filter((products) => {
    //     return products.title.toLowerCase().startsWith(keyword.toLowerCase());
    // });
    //   setFoundProd(results);
    // } else {
    //   setFoundProd(products);
      
    // }

    setName(keyword);
  };

  let filteredProducts = products.filter(product=>product.title.includes(name))

  return (
    <div className="">
        <div className="">
          <input
            type="search"
            value={name}
            onChange={filter}
            className="input"
            placeholder="Filter"
          />

          <div className="main">
            
             { filteredProducts.length ?  filteredProducts.map((products) => (
                <div key={products.id} className="item">
                  <img src={products.image} />
                  <p className="">{products.title} </p>
                  <p className="">{products.price} </p>
                </div>
          )): <div><h1>Ei osumia</h1></div> }
        </div>

      
    </div>
    </div>
    
  );
}
/* <div className="main">
            { products.map(p => <Products name={p.title} image={p.image} price={p.price}/> )}
            </div> */
export default App;

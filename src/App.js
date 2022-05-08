
import './App.css';
import PokeApi from './components/PokeApi';
import { useState, useEffect } from 'react';
import axios from 'axios';


function App() {

  const [pokemon, setPokemon] = useState([])
  const [isFalse, setIsFalse] = useState(false)
  

  useEffect(()=>{
    axios.get('https://pokeapi.co/api/v2/pokemon').then(res =>{
      setPokemon(res.data.results.map(p => p.name))
    })

  }, [])

  const fetchButton = () =>{
    setIsFalse(!isFalse);
    console.log(isFalse);
  }
  

  return (
    <div className="App">
      <header className="App-header">
        <button className="btn-btn-primary" onClick={fetchButton}>{isFalse ? "Collapse": "Fetch Pokemon" }</button>
        {isFalse ? <PokeApi pokemon={pokemon}/> : ""}
        
        
      </header>
    </div>
  );
}

export default App;

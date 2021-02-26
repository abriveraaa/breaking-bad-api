import React, { useState, useEffect } from 'react';
import Header from './component/ui/Header'
import Search from './component/ui/Search'
import CharacterGrid from './component/character/CharacterGrid'
import './App.css';
import axios from 'axios';

const App = () => {
  const [ getItem, setItem] = useState([])
  const [ getLoading, setLoading] = useState(true)
  const [ query, setQuery] = useState('')

  useEffect(() => {
    const fetchItem = async() => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      setItem(result.data)
      setLoading(false)
    }
    fetchItem()
    
  }, [query])

  return (
    <div className="container">
      <Header/>
      <Search getQuery={(q) => setQuery(q)}/>
      <CharacterGrid 
        loading={getLoading} 
        items={getItem}/>
    </div>
  );
}

export default App;
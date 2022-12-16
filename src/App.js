import { useState, useEffect } from 'react';

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";


const API_KEY = process.env.REACT_APP_API_KEY;

export default function App() {
  const [films, setFilms] = useState([])
  const [value, setValue] = useState('')
  const [filter, setFilter] = useState('all')
  const [loading, setLoading] =useState(false)

  async function fetchURL() {
    setLoading(true)
    setFilms('')
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${value=== ''? 'bleach': `${value}`}${filter=== 'all'?'':`&type=${filter}`}`)
    const data = await response.json()
    setFilms(data.Search)
    setLoading(false)
  }

  useEffect(() => {
    fetchURL()
  }, [filter])

  async function onSearch (e) {
    e.preventDefault()
    await fetchURL()
  }
  async function onFilter (e) {
    setFilter((e.target.value)) 
  }

  return (
    <>
      <Header />
      <Main loading={loading}
      filter={filter}
      onFilter={onFilter}
      onSearch={onSearch}
      setValue={setValue}
      value={value}
      films={films} />
      <Footer />
    </>

  );
}


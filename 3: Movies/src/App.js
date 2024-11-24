import React from 'react'
import { useEffect, useState } from 'react'
import MoviesCard from './Components/MoviesCard'
import "./App.css"
import SearchIcon from "./Components/search.svg"

const App = () => {

  const url = 'https://www.omdbapi.com/?i=tt3896198&apikey=e9f1c090';
  
    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
      searchMovies('superman');
  
  
    }, []);

  const searchMovies = async (tittle) => {
    const response = await fetch(`${url}&s=${tittle}`);
    const data = await response.json();

    setMovies(data.Search);
  };



  return (
    <div className='app'>
      <h1>Movies World</h1>
      <div className='search'>
        <input placeholder='Search Movie'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value) }

        />
        <img
          src={SearchIcon}
          alt='Search Icon'
          onClick={() => searchMovies(searchTerm)}
        />

      </div>
      {/* <div className='container'>

      </div> */}

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MoviesCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}

    </div>
  )
}

export default App

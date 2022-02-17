import React, { useContext } from 'react';
import Movies from '../components/Movies';
import { moviesContext } from '../context/MoviesContext';
import "../css/home.css"

export default function Home() {
    const {movies} = useContext(moviesContext)
    return <div className='page'>
          <h1>MOVIES</h1>
        {console.log(movies)}
        <Movies movies={movies}/>
    </div>;
}

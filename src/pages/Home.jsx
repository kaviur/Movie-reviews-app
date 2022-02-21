import React, { useContext, useEffect, useState } from 'react';
import Movies from '../components/Movies';
import { moviesContext } from '../context/MoviesContext';
import "../css/home.css"


export default function Home() {

    //const [topTen, setTopTen] = useState([])

    

    const {movies} = useContext(moviesContext)
    return <div className='page'>
          <h1>MOVIES</h1>
        <Movies movies={movies}/>
    </div>;
}

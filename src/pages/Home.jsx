import React, { useContext, useEffect, useState } from 'react';
import Movies from '../components/Movies';
import { moviesContext } from '../context/MoviesContext';
import "../css/home.css"


export default function Home() {

    const [topTen, setTopTen] = useState([])

    useEffect(()=>{
        fetch("https://cinemalis-342015.rj.r.appspot.com/movies/ranking/-1")
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setTopTen(data)
        })
        .catch(error=>console.log(error))
        
    },[])


    const {movies} = useContext(moviesContext)

    return <div className='page'>
            <h1>MOVIES</h1>
            <Movies movies={movies}/>
            <Movies movies={topTen}/>
        </div>;
}

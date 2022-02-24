import React, { useEffect, useState, useContext } from 'react';
import Movies from '../components/Movies';
import "../css/home.css"
import { moviesContext } from '../context/MoviesContext';


export default function Home() {

    const [topTen, setTopTen] = useState([])
    const [estrenos, setEstrenos] = useState([])
    const [theWorst, setTheWorst] = useState([])
    const {movies} = useContext(moviesContext)

    useEffect(()=>{
        fetch("https://cinemalis-342015.rj.r.appspot.com/movies/ranking/-1")
        .then(res=>res.json())
        .then(data=>{
            setTopTen(data)
        })
        .catch(error=>console.log(error))
        
    },[])

    useEffect(()=>{
        fetch("https://cinemalis-342015.rj.r.appspot.com/movies/ranking/1")
        .then(res=>res.json())
        .then(data=>{
            setTheWorst(data)
        })
        .catch(error=>console.log(error))
        
    },[])

    useEffect(()=>{
        fetch("https://cinemalis-342015.rj.r.appspot.com/movies/last/2022")
        .then(res=>res.json())
        .then(data=>{
            setEstrenos(data)
        })
        .catch(error=>console.log(error))
        
    },[])
    

    return <div className='page'>
            {console.log(movies)}
            <h1>Todas las películas</h1>
            <Movies movies={movies}/>
            <h1>Mejor Rankeadas</h1>
            <Movies movies={topTen}/>
            <h1>Peor Rankeadas</h1>
            <Movies movies={theWorst}/>
            <h1>Estrenos</h1>
            <Movies movies={estrenos}/>

        </div>;
}

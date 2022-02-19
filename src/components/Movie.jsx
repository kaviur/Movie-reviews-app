import React from 'react';
import {Link} from 'react-router-dom'
import "../css/home.css"

export default function Movie({movie}) {
    return <article className='movie'>
        {/* Bloque contenedor */}
        <Link to={"/details/"+movie._id}><h2 className='movie__title'>{movie.name}</h2></Link>
        <img className='movie__image' src={movie.banner} alt={movie.title}></img>
        <div className='box'>
        </div>
        </article>

}

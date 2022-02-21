import React from 'react';
import {Link} from 'react-router-dom'
import "../css/home.css"
import Stars from './Stars';

export default function Movie({movie}) {
    return <article className='movie'>
        <Link to={"/details/"+movie._id}><h2 className='movie__title'>{movie.name}</h2></Link>
        {/* <div className="movie_stars">{isNaN(movie.stars/movie.numberOfReviews)?0:movie.stars/movie.numberOfReviews}</div> */}
        <div className="movie_stars"><Stars rating={movie.rating}/></div>
        <img className='movie__image' src={movie.poster} alt={movie.title}></img>
        <div className='box'>
        </div>
        </article>

}

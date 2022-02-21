import React, { useContext, useRef, useState } from 'react';
import { useParams ,Navigate} from 'react-router-dom';
import Reviews from '../components/Reviews';
import StarRating from '../components/StarRating';
import Stars from '../components/Stars';
import { moviesContext } from '../context/MoviesContext';

export default function Details() {
  const {id} = useParams()
  const {movies,reviews,addReview,deleteReview,loading} = useContext(moviesContext)
  const comentario = useRef()
  const titulo_comentario = useRef()
  const [rating, setRating] = useState(0)

  const movie = movies.filter(movie=>movie._id===id)[0]

  if(!movie && !loading){
    return <Navigate to="/notfound"/>
  }

  const stars = (value)=>{
    setRating(value)
  }

  const add = ()=>{
    let comment = comentario.current.value.trim()
    let title_comment = titulo_comentario.current.value.trim()

    if(comment){
      addReview(movie,rating,comment,title_comment)
      comentario.current.value = ''
      titulo_comentario.current.value = ''
    }
  }

  const removeReview = (id) => {
    deleteReview(id)
  }

  return loading?<p>Loading...</p>:<div>
      {console.log(reviews)}
      <div className='container'> 
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-12 mt-5">
              </div>
              <div className="col-4">
              <img className='pt-4 movie__image' src={movie.poster} alt={movie.title}></img>
              </div>
              <div className="col-8 p-4">
                <h1>{movie.name} </h1>
                <div className="mt-3">
                  <p>{movie.description}</p>
                  <p>Fecha de lanzamiento: {movie.year}</p>
                  <Stars rating={movie.rating}/>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 mt-5">
            <div className="reviews">
              {
                console.log(movie.numberOfReviews)
              }
              {
              reviews.map(
              review=>{
                if(review.idMovie===id){
                  return <Reviews key={review.id} review={review} removeReview={removeReview}/>
                }
              })
              }
            </div>
            <div className="form_comment mt-5">
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Escribe un título para tu opinión</label>
                <input className="form-control" ref={titulo_comentario} type="text"></input>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Deja tu opinión</label>
                <textarea className="form-control" ref={comentario} id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>

              <StarRating stars={stars}/>
              
              <button onClick={add}>Agregar review</button>
            </div>
          </div>
        </div>     
      </div>
  </div>;
}

import React, { useContext, useRef } from 'react';
import { useParams ,Navigate} from 'react-router-dom';
import Movie from '../components/Movie';
import Reviews from '../components/Reviews';
import StarRating from '../components/StarRating';
import { moviesContext } from '../context/MoviesContext';

export default function Details() {
  const {id} = useParams()
  const {movies,reviews,addReview,loading} = useContext(moviesContext)
  const comentario = useRef()
  const titulo_comentario = useRef()
  const rating = useRef()

  const movie = movies.filter(movie=>movie._id===id)[0]

  if(!movie && !loading){
    return <Navigate to="/notfound"/>
  }

  const add = ()=>{
    let comment = comentario.current.value.trim()
    let title_comment = titulo_comentario.current.value.trim()

    if(comment){
      let stars = rating.current.value
      addReview(movie,stars,comment,title_comment)
      comentario.current.value = ''
    }
  }

  return loading?<p>Loading...</p>:<div>
      {console.log(reviews)}
      <div className='container'> 
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-12 mt-5">
              <h1>{movie.name} </h1>
              </div>
              <div className="col-4">
              <img className='pt-4 movie__image' src={movie.banner} alt={movie.title}></img>
              </div>
              <div className="col-8 p-4">
                <p>{movie.description}</p>
                <p>Fecha de lanzamiento: {movie.year}</p>
                <p>{movie.rating}</p>
              </div>
            </div>
          </div>
          <div className="col-12 mt-5">
            <div className="form_comment">
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Escribe un título para tu opinión</label>
                <input className="form-control" ref={titulo_comentario} type="text"></input>
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                <textarea className="form-control" ref={comentario} id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>

              <StarRating />

              <select ref={rating}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>
              <button onClick={add}>Agregar review</button>
            </div>

            <div className="reviews mt-5">
              {
              reviews==0?<p>Esta película aún no tiene reviews</p>:reviews.map(
              review=>review.idMovie===id
              &&<Reviews key={review.id} review={review}/>)
              }
            </div>

          </div>
        </div>     
      </div>
  </div>;
}

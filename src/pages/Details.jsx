import React, { useContext, useRef } from 'react';
import { useParams ,Navigate} from 'react-router-dom';
import Movie from '../components/Movie';
import Reviews from '../components/Reviews';
import { moviesContext } from '../context/MoviesContext';

export default function Details() {
  const {id} = useParams()
  const {movies,reviews,addReview,loading} = useContext(moviesContext)
  const comentario = useRef()
  const rating = useRef()

  const movie = movies.filter(movie=>movie._id===id)[0]

  if(!movie && !loading){
    return <Navigate to="/notfound"/>
  }

  const add = ()=>{
    let comment = comentario.current.value
    let stars = rating.current.value
    addReview(movie,stars,comment)
  }

  return loading?<p>Loading...</p>:<div>
      <p>Details {id}</p>
      <Movie movie={movie}></Movie>
      {console.log(reviews)}
      <div>
        <input ref={comentario} type="text"></input>
        <select ref={rating}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        <button onClick={add}>Agregar review</button>
      </div>

      <table className="table">
            <thead>
                Reviews
            </thead>
            <tbody>
      {reviews?.map(
        review=>review.idMovie===id
        &&<Reviews key={review.id} review={review}/>)
      }
      </tbody>
      </table>

      {/* Mostrar comentarios */}
  </div>;
}

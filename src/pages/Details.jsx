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
      <p>Details {id}</p>
      <Movie movie={movie}></Movie>
      {console.log(reviews)}
      <div className='container'>       
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

        {reviews?.map(
        review=>review.idMovie===id
        &&<Reviews key={review.id} review={review}/>)}
      </div>
  </div>;
}

import React, { useContext, useRef, useState } from 'react';
import { userContext } from '../context/UserContext'
import { useParams ,Navigate} from 'react-router-dom';
import Reviews from '../components/Reviews';
import StarRating from '../components/StarRating';
import Stars from '../components/Stars';
import { moviesContext } from '../context/MoviesContext';
import "../css/details.css"
import Swal from 'sweetalert2'

export default function Details() {
  //const Swal = require('sweetalert2')
  const {id} = useParams()
  const {setNumberReviews,movies,reviews,addReview,deleteReview,loading} = useContext(moviesContext)
  const comentario = useRef()
  const titulo_comentario = useRef()
  const [rating, setRating] = useState(0)
  const [userCommented, setUserCommented] = useState(false)
  const {user} = useContext(userContext)

  const movie = movies.filter(movie=>movie._id===id)[0]
  const numberOfReviews = reviews.filter(review=>review.idMovie === id).length
  setNumberReviews(numberOfReviews)

  if(!movie && !loading){
    return <Navigate to="/notfound"/>
  }

  const stars = (value)=>{
    setRating(value)
  }

  function uniqueId(prefix) {
    var id = + new Date() + '-' + Math.floor(Math.random() * 1000);
    return prefix ? prefix + id : id;
  }

  const removeReview = (user)=> {
    if( loading === false ){
      deleteReview(user)
    }
  }

  const add = ()=>{

    if(user.logged !== true){
      Swal.fire({
        title: '<strong>Login requerido</strong>',
        icon: 'info',
        html:
          'Si tienes una cuenta ' +
          '<a href="/login">Inicia sesión</a> ' +
          'para poder comentar. Si no estás registrado, puedes crear una aquí: '+
          '<a href="/signup">Crear cuenta</a> ',
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Cerrar',
        confirmButtonAriaLabel: 'Thumbs up, great!',
      })
    }else{
      const tiempoTranscurrido = Date.now();
      const hoy = new Date(tiempoTranscurrido);
      const date = hoy.toLocaleDateString();
      let comment = comentario.current.value.trim()
      let title_comment = titulo_comentario.current.value.trim()
      
      if( userCommented === true ){
        Swal.fire('Lo siento, sólo puedes agregar una review')
      }else{
        if(comment){
          const id = uniqueId('id_')
          addReview(id,movie,rating,comment,title_comment,user.name,date)
          comentario.current.value = ''
          titulo_comentario.current.value = ''
          setUserCommented(true)
        }
      }
    }
  }

  return loading?<p>Loading...</p>:<div>
      {console.log(reviews)}
      <div className='container'> 
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-12 mt-5">
              </div>
              <div className="col-sm-12 col-md-6">
              <img className='pt-4 movie__image' src={movie.poster} alt={movie.title}></img>
              </div>
              <div className="col-sm-12 col-md-6 p-4">
                <h1>{movie.name} </h1>
                <div className="descrption mt-3">
                  <p>{movie.description}</p>
                  <br />
                  <div className="numberOfReviews">Esta película tiene {numberOfReviews} {numberOfReviews==1?"review":"reviews"}</div>
                  <hr />
                  <p>Fecha de lanzamiento: {movie.year}</p>
                  <hr />
                  <div className='starts'>
                  <Stars rating={movie.rating}/>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 mt-5">
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

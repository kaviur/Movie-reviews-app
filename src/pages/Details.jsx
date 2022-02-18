import React, { useContext, useRef } from 'react';
import { useParams ,Navigate} from 'react-router-dom';
import Movie from '../components/Movie';
import Reviews from '../components/Reviews';
import { moviesContext } from '../context/MoviesContext';
//import NotFound from './NotFound';

export default function Details() {
  const {id} = useParams()
  const {movies,reviews,addReview,loading} = useContext(moviesContext)
  const comentario = useRef()
  const rating = useRef()
  //const navigate = useNavigate()

  const movie = movies.filter(movie=>movie._id===id)[0]

  // if(!movie){
  //   return <NotFound/>
  // }
  if(!movie && !loading){
    return <Navigate to="/notfound"/>
  }

  function StarIcon(props) {
       const { fill = 'none' } = props;
       return (
         <svg class="w-6 h-6" fill={fill} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
       );
     }

function RatingIcon(props) {
       const {
              index,
              rating,
              hoverRating,
              onMouseEnter,
              onMouseLeave,
              onSaveRating,
  } = props;
  const fill = React.useMemo(() => {
         if (hoverRating >= index) {
                return 'yellow';
              } else if (!hoverRating && rating >= index) {
                     return 'yellow';
              }return 'none';
}, 
[rating, hoverRating, index]);
return (
      <div 
      className="cursor-pointer"
      onMouseEnter={() => onMouseEnter(index)} 
      onMouseLeave={() => onMouseLeave()} 
      onClick={() => onSaveRating(index)}>
       <StarIcon fill={fill} />
</div>
)
}

const SuComentario = () =>{
       let comment = comentario.current.value
       addReview(movie,comment)
}
return loading?<p>Loading...</p>:<div>
      <p>Details {id}</p>
      <Movie movie={movie}></Movie>
      {console.log(reviews)}
      <div>
      <input ref={comentario} type="text"></input>
      <button onClick={SuComentario}>Agregar review</button>
      </div>

      {/* && (and): Operador de cortocircuito */}
      {/* || (or)*/}
      <table class="table">
            <thead>
                Tabla
            </thead>
            <tbody>
      {reviews.map(
        review=>review.idMovie===id
        &&<Reviews key={review.id} review={review}/>)
      }
      </tbody>
        </table>

      {/* Mostrar comentarios */}
  </div>;
}

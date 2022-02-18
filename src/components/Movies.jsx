import Movie from "./Movie";
import "../css/home.css"

export default function Movies({movies}) {
    return <section className='movies'>
        {movies.map(movie=><Movie key={movie._id} movie={movie}/>)}
    </section>
  }
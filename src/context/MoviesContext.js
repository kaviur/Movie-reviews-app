import React,{createContext, useEffect, useReducer, useState} from 'react';
import moviesReducer, { moviesInitialState } from '../reducers/moviesReducer';
import reviewsReducer, { reviewsInitialState } from '../reducers/reviewsReducer';

export const moviesContext = createContext()

export default function MoviesContext({children}) {

    const [movies,setMovies] = useReducer(moviesReducer,moviesInitialState)
    const [reviews,dispatchReviews] = useReducer(reviewsReducer,reviewsInitialState)
    const [loading,setLoading] = useState(true)

    const addReview = (movie,stars,comment)=>{
        setMovies({type:'addStars',movie,stars})
        dispatchReviews({type:'addReview',idMovie:movie._id,comment})
        // setReviews([...reviews,{id:reviews.length,idMovie:movie.id,comment}])
    }

    useEffect(()=>{
        fetch("https://backendtzul.rj.r.appspot.com/movies")
        .then(res=>res.json())
        .then(data=>{
            const {movies} = data;
            console.log(data)
            setMovies({type:"addMovies",movies})
            setLoading(false)
        })
        .catch(error=>setLoading(false))
    },[])

    return <moviesContext.Provider value={{loading,movies:movies.movies,addReview,reviews:reviews.reviews}}>
        {children}
    </moviesContext.Provider>
}

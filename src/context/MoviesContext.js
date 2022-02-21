import React,{createContext, useEffect, useReducer, useState} from 'react';
import moviesReducer, { moviesInitialState } from '../reducers/moviesReducer';
import reviewsReducer, { reviewsInitialState } from '../reducers/reviewsReducer';

export const moviesContext = createContext()

export default function MoviesContext({children}) {

    const [pelis,setPelis] = useReducer(moviesReducer,moviesInitialState)
    const [reviews,dispatchReviews] = useReducer(reviewsReducer,reviewsInitialState)
    const [loading,setLoading] = useState(true)

    const addReview = (movie,stars,comment,title_comment)=>{
        setPelis({type:'addStars',movie,stars})
        dispatchReviews({type:'addReview',idMovie:movie._id,stars,comment,title_comment})
    }

    const deleteReview = (idReview)=>{
        dispatchReviews({type:'deleteReview',idReview})
    }

    useEffect(()=>{
        fetch("https://backendtzul.rj.r.appspot.com/movies")
        .then(res=>res.json())
        .then(data=>{
            const {movies} = data;
            //console.log(data)
            setPelis({type:"addMovies",movies})
            setLoading(false)
        })
        .catch(error=>setLoading(false))
    },[])

    return <moviesContext.Provider value={{loading,movies:pelis.movies,addReview,deleteReview,reviews:reviews.reviews}}>
        {children}
    </moviesContext.Provider>
}

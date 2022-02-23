import React,{createContext, useEffect, useReducer, useState} from 'react';
import moviesReducer, { moviesInitialState } from '../reducers/moviesReducer';
import reviewsReducer, { reviewsInitialState } from '../reducers/reviewsReducer';

export const moviesContext = createContext()

export default function MoviesContext({children}) {

    const [movies,setMovies] = useReducer(moviesReducer,moviesInitialState)
    const [reviews,dispatchReviews] = useReducer(reviewsReducer,reviewsInitialState)
    const [loading,setLoading] = useState(true)
    const [numberReviews,setNumberReviews] = useState(0)


    const addReview = (id,movie,stars,comment,title_comment,username,date)=>{
        setMovies({type:'addStars',movie,stars})
        dispatchReviews({type:'addReview',id,idMovie:movie._id,stars,comment,title_comment,username,date})
    }

    const deleteReview = (username)=>{
        dispatchReviews({type:'deleteReview',username})
    }

    useEffect(()=>{
        fetch("https://cinemalis-342015.rj.r.appspot.com/movies")
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setMovies({type:"addMovies",movies:data})
            //console.log(movies.movies);
            setLoading(false)
        })
        .catch(error=>setLoading(false))
        
    },[])


    useEffect(()=>{
        fetch("https://cinemalis-342015.rj.r.appspot.com/reviews")
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            data.map(review=>dispatchReviews({type:'addReview',id:review._id,idMovie:review.movieId,stars:review.rating,comment:review.text,title_comment:'Sin título',username:review.userName,date:review.date}))
        })
        .catch(error=>console.log(error))
        
    },[])


    return <moviesContext.Provider value={{setNumberReviews,loading,movies:movies.movies,addReview,deleteReview,reviews:reviews.reviews}}>
        {children}
    </moviesContext.Provider>
}


export const moviesInitialState = {
    movies:[]
}

export default function moviesReducer(state,action){
    let newState;
    const {type} = action
    switch(type){
        case 'addStars':
            const {movie,estrellas} = action
            movie.stars = movie.stars + estrellas
            movie.num++
            movie.rating = movie.stars/movie.num
            newState = {movies:[...state.movies]}
            break;
        case 'ratingApi':
            const {estrellasApi} = action
            movie.stars = estrellasApi
            //movie.numReviews++
            newState = {movies:[...state.movies]}
            break;
        case 'addMovies':
            const {_id,year,rating,numReviews,stars,poster,name,description,createdAt,banner} = action
            let num = numReviews +1
            newState = {movies:[...state.movies,{_id,year,rating,num,stars:rating,poster,name,description,createdAt,banner}]}
            break;
        default:
            newState = state;
    }

    return newState
}
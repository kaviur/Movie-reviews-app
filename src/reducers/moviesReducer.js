
export const moviesInitialState = {
    movies:[]
}

export default function moviesReducer(state,action){
    let newState;
    const {type} = action
    switch(type){
        case 'addStars':
            const {movie,estrellas} = action
            movie.stars = movie.stars + parseInt(estrellas)
            movie.numReviews++
            newState = {movies:[...state.movies]}
            break;
        case 'addMovies':
            const {id,year,rating,numReviews,stars,poster,name,description,createdAt,banner} = action
            newState = {reviews:[...state.reviews,{id,year,rating,numReviews,stars,poster,name,description,createdAt,banner}]}
            break;
        default:
            newState = state;
    }

    return newState
}

export const moviesInitialState = {
    movies:[]
}

export default function moviesReducer(state,action){
    let newState;
    const {type,payload} = action
    switch(type){
        case 'addStars':
            const {movie,stars} = action
            movie.stars = movie.stars + parseInt(stars)
            movie.numberOfReviews++
            newState = {movies:[...state.movies]}
            break;
        case 'addMovies':
            const {movies} = action
            newState = {movies}
            break;
        case 'topTen':
            //const {topTen} = action
            newState = {movies:[...state.movies]}
            break;
            break;
        default:
            newState = state;
    }

    return newState
}
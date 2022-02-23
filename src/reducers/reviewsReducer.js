export const reviewsInitialState = {
    reviews:[]
}

export default function reviewsReducer(state,action){
    let newState;
    switch(action.type){
        case 'addReview':
            const {idMovie,stars,comment,title_comment} = action
            const tiempoTranscurrido = Date.now();
            const hoy = new Date(tiempoTranscurrido);
            const fecha = hoy.toLocaleDateString();

            newState = {reviews:[...state.reviews,{id:state.reviews.length,idMovie,stars,comment,title_comment,fecha}]}
            break;
        case 'addR':
            const {reviews} = action
            newState = {reviews}
            break;
        case 'deleteReview':
            const {idReview} = action
            //TODO: da error
            newState = {reviews:state.reviews.filter(review=>review.id !== idReview)};
            //newState = state
            break;
        default:
            newState=state;
            break;
    }

    return newState
}
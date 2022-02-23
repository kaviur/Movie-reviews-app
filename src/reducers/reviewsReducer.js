export const reviewsInitialState = {
    reviews:[]
}

export default function reviewsReducer(state,action){
    let newState;
    switch(action.type){
        case 'addReview':
            const {id,idMovie,stars,comment,title_comment,username,date} = action

            newState = {reviews:[...state.reviews,{id,idMovie,stars,comment,title_comment,username,date}]}
            break;
        case 'addR':
            const {reviews} = action
            newState = {reviews}
            break;
        case 'deleteReview':
            const {user} = action
            //TODO: da error
            newState = {reviews:state.reviews.filter(review=>review.username !== user)};
            break;
        default:
            newState=state;
            break;
    }

    return newState
}
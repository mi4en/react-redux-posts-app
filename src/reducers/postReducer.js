import {FETCH_POSTS, NEW_POST} from '../actions/types'

const initialState = {
    items: [],
    item: {}
}

export default function (state = initialState, action) {
    switch(action.type) {
        case FETCH_POSTS:
            console.log('dispatch action from FETCH_POSTS reducer')
            return {
                ...state,
                items: action.payload
            }
        case NEW_POST:
                console.log('dispatch action NEW_POST from reducer')
                return {
                    ...state,
                    item: action.payload
                }
        default:
            return state;
            
    }
}
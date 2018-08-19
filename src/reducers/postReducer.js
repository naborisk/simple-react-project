import { NEW_POST, DELETE_POST } from '../actions/types'

const initialState = {
    items: [],
    item: {}
}

export default function(state = initialState, action) {
    switch(action.type){

        case NEW_POST:
            return {
                ...state,
                item: action.payload
            }

        case DELETE_POST:
            return state.items.filter((id) => id !== action.id)
            
        default:
         return state
    }
}
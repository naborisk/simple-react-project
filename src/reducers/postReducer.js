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
            console.log(state.items)
            console.log(action.payload)

            return {
                items: state.items.filter(({id}) => id !== action.payload)
            }

        default:
         return state
    }
}
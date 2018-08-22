import { NEW_POST, DELETE_POST, EDIT_POST , UPDATE_POST } from '../actions/types'

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
            return {
                items: state.items.filter(({id}) => id !== action.payload)
            }
        case EDIT_POST:
            return {
                items: state.items.map((post) => post.id === action.payload ? {...post, editPost: !post.editPost}: post )
            }
        case UPDATE_POST:
            //console.log(action.payload)
            //console.log(state.items.map(post => post === action.payload ? {...post, body: action.payload.body, editPost: !post.editPost} : post ))
            return{
                items: state.items.map(post => post.id === action.payload.id ? action.payload : post )
            }

        default:
         return state
    }
}
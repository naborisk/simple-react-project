import { NEW_POST, DELETE_POST } from './types'

export const createPost = (postData) => dispatch => {
    console.log(dispatch)
    dispatch({
        type: NEW_POST,
        payload: postData
    })
}

export const deletePost = (id) => dispatch => {
    console.log(dispatch)
    dispatch({
        type: DELETE_POST,
        payload: id
    })
}

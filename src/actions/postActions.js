import { NEW_POST, DELETE_POST, EDIT_POST, UPDATE_POST } from './types'

export const createPost = (postData) => dispatch => {
    dispatch({
        type: NEW_POST,
        payload: postData
    })
}

export const deletePost = (id) => dispatch => {
    dispatch({
        type: DELETE_POST,
        payload: id
    })
}

export const editPost = (id) => dispatch => {
    console.log('editPost')
    dispatch({
        type: EDIT_POST,
        payload: id
    })
}

export const updatePost = (post) => dispatch => {
    dispatch({
        type: UPDATE_POST,
        payload: post
    })
}
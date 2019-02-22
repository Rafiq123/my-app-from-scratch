import CONSTANTS from '../constants';
const { FETCH_POSTS, ADD_POSTS, SHOW_TOAST } = CONSTANTS;

import axios from 'axios';

export const fetchPosts = () => async dispatch => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
    dispatch({
        type: FETCH_POSTS,
        payload: data
    });
}

export const addPost = (input) => async dispatch => {
    const { data } = await axios.post('https://jsonplaceholder.typicode.com/posts', input);
    console.log(data);
    dispatch({
        type: ADD_POSTS,
        payload: data
    });
}

export const showToast = (input) => dispatch => {
    dispatch({
        type: SHOW_TOAST,
        payload: input
    });
}


import CONSTANTS from '../constants';
const { FETCH_POSTS, ADD_POSTS } = CONSTANTS;

import axios from 'axios';

export const fetchPosts = () => async dispatch => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
    dispatch({
        type: FETCH_POSTS,
        payload: data
    })
}
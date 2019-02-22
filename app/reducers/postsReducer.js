import CONSTANTS from '../constants';
const { FETCH_POSTS, ADD_POSTS } = CONSTANTS;


const initialState = {
    posts: [],
    post : {
        title: '',
        userId: '',
        body: ''
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                posts: action.payload
            }
        case ADD_POSTS:
            return {
                ...state,
                post : action.payload
            }
        default:
            return state;
    }
}
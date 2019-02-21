import CONSTANTS from '../constants';
const { FETCH_POSTS, ADD_POSTS } = CONSTANTS;


const initialState = {
    items: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state;
    }
}
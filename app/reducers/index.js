import { combineReducers } from 'redux';

import postsReducer from './postsReducer';
import dialogReducer from './dialogReducer';

export default combineReducers({
    posts: postsReducer,
    dialog: dialogReducer
});
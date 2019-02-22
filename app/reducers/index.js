import { combineReducers } from 'redux';

import postsReducer from './postsReducer';
import dialogReducer from './dialogReducer';
import toastReducer from './toastReducer';

export default combineReducers({
    posts: postsReducer,
    dialog: dialogReducer,
    toast : toastReducer
});
import CONSTANTS from '../constants';
const { SHOW_TOAST } = CONSTANTS;

const initialState = {
    open: false,
    message: '',
    vertical: 'top',
    horizontal: 'right'
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SHOW_TOAST:
            return {
                ...state,
                open: action.payload.open,
                message: action.payload.message,
                vertical: action.payload.vertical,
                horizontal: action.payload.horizontal
            }
        default:
            return state;
    }
}

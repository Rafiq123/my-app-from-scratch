import CONSTANTS from '../constants';
const { DIALOG_UPDATE } = CONSTANTS;

const initialState = {
    dialogStatus: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case DIALOG_UPDATE:
            return {
                ...state,
                dialogStatus: action.payload
            }
        default:
            return state;
    }
}
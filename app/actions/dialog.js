import CONSTANTS from '../constants';
const { DIALOG_UPDATE } = CONSTANTS;

export const updateDialog = (data) => dispatch => {
    dispatch({
        type: DIALOG_UPDATE,
        payload: data
    })
}
import {CONSTANTS} from "./index";
import {v4 as uuidv4} from 'uuid';

export const addList = title => {
    return (dispatch, getState) => {
        const boardID = getState().activeBoard;
        const id = uuidv4();
        dispatch({
            type: CONSTANTS.ADD_LIST,
            payload: {title, boardID, id}
        });
    };
};

export const editTitle = (listID, newTitle) => {
    return {
        type: CONSTANTS.EDIT_LIST_TITLE,
        payload: {
            listID,
            newTitle
        }
    };
};

export const deleteList = listID => {
    return (dispatch, getState) => {
        const boardID = getState().activeBoard;
        return dispatch({
            type: CONSTANTS.DELETE_LIST,
            payload: {
                listID,
                boardID
            }
        });
    };
};

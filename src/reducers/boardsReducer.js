import {CONSTANTS} from "../actions";

const initialState = {
    "board-0": {
        id: "board-0",
        lists: ["list-0"],
        title: 'My board'
    }
};

const boardsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.ADD_LIST: {
            const {boardID, id} = action.payload;
            const board = state[boardID];
            const newListID = `list-${id}`;
            board.lists = [...board.lists, newListID];
            return {...state, [boardID]: board};
        }

        case CONSTANTS.DRAG_HAPPENED: {
            const {boardID} = action.payload;
            const board = state[boardID];
            const lists = board.lists;
            const {
                droppableIndexEnd,
                droppableIndexStart,

                type
            } = action.payload;

            if (type === "list") {
                const pulledOutList = lists.splice(droppableIndexStart, 1);
                lists.splice(droppableIndexEnd, 0, ...pulledOutList);
                board.lists = lists;

                return {...state, [boardID]: board};
            }
            return state;
        }
        case CONSTANTS.DELETE_LIST: {
            const {listID, boardID} = action.payload;
            const board = state[boardID];
            const lists = board.lists;
            board.lists = lists.filter(id => id !== listID);
            return {...state, [boardID]: board};
        }

        case CONSTANTS.ADD_BOARD: {
            const {title, id} = action.payload;
            const newID = `board-${id}`;
            const newBoard = {
                id: newID,
                title,
                lists: []
            };

            return {...state, [newID]: newBoard};
        }

        default:
            return state;
    }
};

export default boardsReducer;

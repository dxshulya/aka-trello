import {CONSTANTS} from "../actions";

const initialState = {
    "list-0": {
        id: "list-0",
        cards: ["card-0"],
        title: "Список",
        board: "board-0"
    }
};

const listsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.ADD_LIST: {
            const {title, id} = action.payload;
            const newList = {
                title: title,
                id: `list-${id}`,
                cards: []
            };

            return {...state, [`list-${id}`]: newList};
        }

        case CONSTANTS.ADD_CARD: {
            const {listID, id} = action.payload;
            const list = state[listID];
            list.cards.push(`card-${id}`);
            return {...state, [listID]: list};
        }

        case CONSTANTS.DELETE_CARD: {
            const {listID, id} = action.payload;

            const list = state[listID];
            const newCards = list.cards.filter(cardID => cardID !== id);

            return {...state, [listID]: {...list, cards: newCards}};
        }

        case CONSTANTS.EDIT_LIST_TITLE: {
            const {listID, newTitle} = action.payload;

            const list = state[listID];
            list.title = newTitle;
            return {...state, [listID]: list};
        }

        case CONSTANTS.DELETE_LIST: {
            const {listID} = action.payload;
            const newState = state;
            delete newState[listID];
            return newState;
        }

        default:
            return state;
    }
};

export default listsReducer;

import React from "react";
import "./style.scss";
import {connect} from "react-redux";
import {useParams} from "react-router-dom";
import {setActiveBoard} from "../../actions";
import {TrelloList} from "../../components/common";
import {FormNew} from "../../components/common";


const Board = (props) => {

    const {lists, cards, boards} = props;
    const {boardID} = useParams()
    const board = boards[boardID]

    props.dispatch(setActiveBoard(boardID));

    if (!board) {
        return <p>Board not found</p>;
    }
    const listOrder = board.lists;

    return (
        <div>
            <p>{board.title}</p>
            <div>
                {listOrder.map((listID, index) => {
                    const list = lists[listID];
                    if (list) {
                        const listCards = list.cards.map((cardID) => cards[cardID]);

                        return (
                            <TrelloList
                                listID={list.id}
                                key={list.id}
                                title={list.title}
                                cards={listCards}
                                index={index}
                            />
                        );
                    }
                })}
                <FormNew list/>
            </div>
            )}
        </div>
    );
};

const mapStateToProps = (state) => ({
    lists: state.lists,
    cards: state.cards,
    boards: state.boards,
});

export default connect(mapStateToProps)(Board);
import React, {useState} from "react";

import "./style.scss";
import {MainLayout} from "../../components/layout";
import {connect} from "react-redux";
import {addBoard} from "../../actions";
import {Link} from "react-router-dom";
import {BoardThumb} from "../../components/common";

function Main({boards, boardOrder, dispatch}) {

    const [isOpen, setIsOpen] = useState(false);

    const openCreator = () => setIsOpen(true)
    const closeCreator = () => setIsOpen(false)

    const [newBoardTitle, setNewBoardTitle] = useState("");

    const handleChange = (e) => {
        setNewBoardTitle(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addBoard(newBoardTitle));
    };

    const renderBoards = () => {
        return boardOrder.map((boardID) => {
            const board = boards[boardID];

            return (
                <Link
                    key={boardID}
                    to={`/${board.id}`}
                    style={{textDecoration: "none"}}
                >
                    <BoardThumb  {...board}/>
                </Link>
            );
        });
    };

    return (
        <MainLayout>
            <div className="main">
                <div className="main__body">
                    <div className="creatorColumn">
                        <div onClick={openCreator} className="creator">
                            <p className="creator__plus">+</p>
                            <p className="creator__new">Новая доска</p>
                        </div>
                        <div>
                            {isOpen && <div className="form">
                                <p className="title">Название доски</p>
                                <input type="text" value={newBoardTitle} onChange={handleChange} className="name"/>
                                <div className="buttons-row">
                                    <button className="cancel" onClick={closeCreator}>Отмена</button>
                                    <button className="save" onClick={handleSubmit}>Сохранить</button>
                                </div>
                            </div>}
                        </div>
                    </div>
                    <div className="boards-titles">
                        {renderBoards()}
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

const mapStateToProps = (state) => ({
    boards: state.boards,
    boardOrder: state.boardOrder,
});

export default connect(mapStateToProps)(Main);
import React, {useState} from "react";
import "./style.scss";
import {connect} from "react-redux";
import {editCard, deleteCard} from "../../../actions";


const TrelloCard = ({text, id, listID, dispatch}) => {

    const [onEdit, setOnEdit] = useState(false);
    const [onTextEdit, setOnTextEdit] = useState(text)

    const handleDeleteCard = (e) => {
        dispatch(deleteCard(id, listID));
    };

    const handleChangeEdit = (e) => {
        setOnTextEdit(e.target.value)
    };

    const saveEdit = () => {
        dispatch(editCard(id, listID, onTextEdit));
        setOnEdit(false);
    };

    const handleEditCard = () => {
        return (
            <div className="container-area">
      <textarea
          value={onTextEdit}
          placeholder="Пишите тут"
          autoFocus
          onChange={handleChangeEdit}
      >
        </textarea>
                <button
                    className="edit-buttonCard"
                    onClick={saveEdit}
                > Save
                </button>
            </div>
        )
    }

    const onlyCard = () => {
        return (
            <div className="container-card">
                <div className='container-body'>
                    <p className="card-text">
                        {text}
                    </p>
                    <div className="container-edit">
                        <button
                            className="delete-button"
                            onMouseDown={(handleDeleteCard)}
                            title='Delete'>
                            x
                        </button>
                        <button
                            className="edit-button"
                            onClick={() => setOnEdit(true)}/>
                    </div>
                </div>
            </div>
        )
    }
    return (
        onEdit ? handleEditCard() : onlyCard()
    );
};

export default connect()(TrelloCard);

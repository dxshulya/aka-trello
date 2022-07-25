import React, {useState} from "react";
import "./style.scss";
import {connect} from "react-redux";
import {deleteList, editTitle} from "../../../actions";
import {FormNew, TrelloCard} from "../index";

const TrelloList = ({title, cards, listID, dispatch}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [listTitle, setListTitle] = useState(title);

    const renderEditInput = () => {
        return (
            <form onSubmit={handleFinishEditing}>
                <textarea
                    type="text"
                    value={listTitle}
                    onChange={handleChange}
                    autoFocus
                    onFocus={handleFocus}
                    onBlur={handleFinishEditing}
                />
            </form>
        );
    };

    const handleFocus = (e) => {
        e.target.select();
    };

    const handleChange = (e) => {
        e.preventDefault();
        setListTitle(e.target.value);
    };

    const handleFinishEditing = (e) => {
        setIsEditing(false);
        dispatch(editTitle(listID, listTitle));
    };

    const handleDeleteList = () => {
        dispatch(deleteList(listID));
    };

    return (
        <div>
            <div>
                <div>
                    {isEditing ? (
                        renderEditInput()
                    ) : (
                        <div onClick={() => setIsEditing(true)}>
                            <p>{listTitle}</p>
                            <button onClick={handleDeleteList}>
                                delete
                            </button>
                        </div>
                    )}
                </div>
                <div>
                    {cards.map((card, index) => (
                        <TrelloCard
                            key={card.id}
                            text={card.text}
                            id={card.id}
                            index={index}
                            listID={listID}
                        />
                    ))}
                    <FormNew listID={listID}/>
                </div>
            </div>
            )}
        </div>
    )
}

export default connect()(TrelloList);
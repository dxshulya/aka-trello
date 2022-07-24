import React, {useState} from "react";
import "./style.scss";
import {connect} from "react-redux";
import {addCard, addList} from "../../../actions";

class FormNew extends React.Component {

    state = {
        formOpen: false,
        text: "",
    };

    openForm = () => {
        this.setState({
            formOpen: true,
        });
    };

    closeForm = (e) => {
        this.setState({
            formOpen: false,
        });
    };

    handleChange = (e) => {
        this.setState({
            text: e.target.value,
        });
    };

    handleAddList = () => {
        const {dispatch} = this.props;
        const {text} = this.state;

        if (text) {
            this.setState({
                text: "",
            });
            dispatch(addList(text));
        }
    };

    handleAddCard = () => {
        const {dispatch, listID} = this.props;
        const {text} = this.state;

        if (text) {
            this.setState({
                text: "",
            });
            dispatch(addCard(listID, text));
        }
    };

    rendAddButton = () => {
        const {list} = this.props;
        const textButton = list ? " + Добавить другой список" : " + Добавить другую задачу";

        return (
            <div className="buttons-wrapper">
                <div className="text-add" onClick={this.openForm}>
                    <p>{textButton}</p>
                </div>
            </div>
        );
    };

    rendForm = () => {
        const {list} = this.props;

        return (
            <div>
                <div className="container-area">
                    <textarea
                        placeholder={
                            list
                                ? "Введите заголовок"
                                : "Введите заголовок для карточки"
                        }
                        autoFocus
                        onBlur={this.closeForm}
                        value={this.state.text}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="container-button">
                    <button
                        onMouseDown={list ? this.handleAddList : this.handleAddCard}
                        className="add-button"
                    >
                        {list ? "Добавить другой список" : "Добавить другую задачу"}
                    </button>
                    <button
                        className="close-button"
                        onClick={this.closeForm}
                    >
                        Close
                    </button>
                </div>
            </div>
        );
    };

    render() {
        return this.state.formOpen ? this.rendForm() : this.rendAddButton();
    }
}

export default connect()(FormNew);

import React from "react";

import "./style.scss";

function Form() {

    return (
        <div className="form">
            <p className="title">Название доски</p>
            <input className="name"/>
            <div className="buttons-row">
                <button className="cancel">Отмена</button>
                <button className="save">Сохранить</button>
            </div>
        </div>
    );
}

export default Form;
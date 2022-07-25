import React from "react";

import "./style.scss";

function BoardThumb({ title }) {

    return (
        <div className="wrapper">
            <p className="title-thumb">{title}</p>
        </div>
    );
}

export default BoardThumb;
import React from "react";

import "./style.scss";
import {MAIN_LINK} from "../../../router/links";

function Header() {

    return (
        <header className="header">
            <a href={MAIN_LINK} className="header__smile">☺</a>
        </header>
    );
}

export default Header;
import React from "react";
import {Route, Routes} from 'react-router-dom';

import {MAIN_LINK, BOARD_LINK} from "./links";
import {Main, Board} from "../pages";

function MainRoute() {
    return (
        <Routes>
            <Route exact path={MAIN_LINK} element={<Main/>}/>
            <Route exact path={BOARD_LINK} element={<Board/>}/>
        </Routes>
    );
}

export default MainRoute;
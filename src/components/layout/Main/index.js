import React from "react";

import {Header} from '../../common/'

import "./style.scss";

function MainLayout({children}) {
    return (
        <div className='main'>
            <Header/>
            <div className='main__body'>{children}</div>
        </div>
    );
}

export default MainLayout;
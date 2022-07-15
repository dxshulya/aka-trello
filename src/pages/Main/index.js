import React, {useState} from "react";

import "./style.scss";
import {MainLayout} from "../../components/layout";
import {Form} from "../../components/common";

function Main() {

    const [open, setOpen] = useState(false);
    const onClick = () => setOpen(true)

    return (
        <MainLayout>
            <div className="main">
                <div className="main__body">
                    <div className="creatorColumn">
                        <div onClick={onClick} className="creator">
                            <p className="creator__plus">+</p>
                            <p className="creator__new">Новая доска</p>
                        </div>
                        <div>
                            {open ? <Form/> : null}
                        </div>
                    </div>
                    <div className="boards-titles">sdfsdfsd</div>
                </div>
            </div>
        </MainLayout>
    );
}

export default Main;
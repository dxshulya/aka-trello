import React, {useState} from "react";

import "./style.scss";
import {MainLayout} from "../../components/layout";

function Main() {

    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue]= useState("");

    const openCreator = () => setIsOpen(true)
    const closeCreator = () => setIsOpen(false)

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
                                <input type="text" value={inputValue} onChange={e=>setInputValue(e.target.value)} className="name"/>
                                <div className="buttons-row">
                                    <button className="cancel" onClick={closeCreator}>Отмена</button>
                                    <button className="save">Сохранить</button>
                                </div>
                            </div>}
                        </div>
                    </div>
                    <div className="boards-titles">
                        <ul>

                        </ul>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default Main;
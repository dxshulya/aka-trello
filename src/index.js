import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";

import MainRoute from "./router/";

import "./style/index.scss";
import {PersistGate} from "redux-persist/integration/react";
import {Provider} from "react-redux";
import Store from "./store";

const {persistor, store} = Store();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
                <MainRoute/>
            </BrowserRouter>,
        </PersistGate>
    </Provider>,
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import MainRoute from "./router/";

import "./style/index.scss";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <MainRoute />
    </BrowserRouter>,
);

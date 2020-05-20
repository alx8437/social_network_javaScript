import React from 'react';
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import ReactDOM from "react-dom";
import store from "./redux/store-redux";
import MyContext from "./MyContext";

let rerenderEntireThree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <MyContext.Provider value={store}>
                <App />
            </MyContext.Provider>
        </BrowserRouter>,
        document.getElementById('root'));
};

rerenderEntireThree(store.getState());

store.subscribe( () => {
    let state = store.getState()
    rerenderEntireThree(state)
});


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ErrorBoundary from "./components/error-boundary/error-boundary";
import App from "./components/app/App";
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";
import store from "./store/store";

ReactDOM.render(
    <ErrorBoundary>
        <Provider store={store}>
            <Router>
                <App/>
            </Router>
        </Provider>
    </ErrorBoundary>,
    document.getElementById('root')
);


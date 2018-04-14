import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './stylesheets/style.css'
import { Router, Route, hashHistory } from 'react-router'
import { Whoops404 } from './components/Whoops404'

ReactDOM.render(
    <Router>
        <Route path="/" comonent={App}/>
    </Router>, 
    document.getElementById('root')
);
registerServiceWorker();

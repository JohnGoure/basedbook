import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './stylesheets/style.css'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import { Whoops404 } from './components/Whoops404'

window.React = React

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route path="/" component={App} />
            <Route path="*" component={Whoops404} />
        </div>
    </BrowserRouter>, 
    document.getElementById('root')
);
registerServiceWorker();

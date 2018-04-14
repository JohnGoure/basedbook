import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './stylesheets/style.css'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import { Whoops404 } from './Whoops404'

window.React = React

ReactDOM.render(
    <BrowserRouter>
            <Switch>
                <Route path="/" component={App} />
                <Route path="*" component={Whoops404} />
            </Switch>
    </BrowserRouter>, 
    document.getElementById('root')
);
registerServiceWorker();

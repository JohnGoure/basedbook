import React from 'react';
import { render } from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './stylesheets/style.css'
import { Router, Route } from 'react-router'
import { Whoops404 } from './components/Whoops404'

render(
    <Router>
        <div>
            <Route path="/" component={App}/>
            <Route path="*" component={Whoops404}/>
        </div>
    </Router>, 
    document.getElementById('root')
);
registerServiceWorker();

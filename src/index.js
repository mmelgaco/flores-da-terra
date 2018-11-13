import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Main';
import Oils from './Oils';
import DoTerra from './DoTerra';
import Register from './Register';
import Training from './Training';
import Business from './Business';
import Error404 from './Error404';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'babel-polyfill';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Main} />
            <Route path="/oils" component={Oils} />
            <Route path="/doterra" component={DoTerra} />
            <Route path="/register" component={Register} />
            <Route path="/training" component={Training} />
            <Route path="/business" component={Business} />
            <Route path='*' component={Error404} />
        </Switch>
    </ BrowserRouter>
    , document.getElementById('root'));

registerServiceWorker();
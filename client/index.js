import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Navigation from './components/Navigation.jsx';
import App from './components/App.jsx';
import Weather from './components/Weather/Weather.jsx';
import About from './components/About.jsx';

ReactDOM.render(
        <Router basename='#'>
            <div>
                <Navigation/>
                <Route exact path='/' component={App}/>
                <Route path='/weather' component={Weather}/>
                <Route path='/about' component={About}/>
            </div>
        </Router>,
    document.querySelector('#root')
);
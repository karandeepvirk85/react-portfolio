import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Gallery from  '../components/gallery.component.js';
import Skills from  '../components/skills.component.js';
import Work from  '../components/work.component.js';
import Home from '../components/home.component.js';
import Connect from './connect.component.js';

const Routes = () =>(
    <Router>
        <Route path="/" exact component={Home} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/skills" component={Skills} />
        <Route path="/work" component={Work} />
        <Route path="/connect" component={Connect} />
    </Router>
);

export default Routes;
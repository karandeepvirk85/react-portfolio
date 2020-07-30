import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Gallery from  '../components/gallery.component.js';
import Skills from  '../components/skills.component.js';
import Home from '../components/home.component.js';

const Routes = () =>(
    <Router>
        <Route path="/" exact component={Home} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/skills" component={Skills} />
    </Router>
);

export default Routes;
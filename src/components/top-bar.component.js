import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PopOver from '../components/popover.component.js';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Avatar from '../components/avatar.component.js';
import Home from '../components/home.component.js';
import Gallery from '../components/gallery.component.js';
import Skills from '../components/skills.component.js';
import Work from '../components/work.component.js';
import Instagram from '../components/instagram.component.js';
import Education from '../components/education.component.js';
import Facebook from '../components/facebook.component.js';
import Project from './projects.component.js';

const TopNavigationBar = () =>{
    return(
        <Router>
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Navbar.Brand href="/">
                    <Avatar/> 
                    Karandeep Virk
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Link 
                            to="/documents/Karandeep_Virk.pdf" 
                            target="_blank" 
                            className="nav-link" 
                            download
                        > 
                        <PopOver 
                            icon="IconDownload" 
                            text="Download Resume"
                        />
                        </Link>

                        <Link className="nav-link" to="/contact">
                            <PopOver 
                                icon="Contact" 
                                text="Contact"
                            />
                        </Link>

                        <Link className="nav-link" to="education">
                            <PopOver 
                                icon="SchoolIcon" 
                                text="Education"
                            />
                        </Link>
                        <Link className="nav-link" to="work">
                            <PopOver 
                                icon="WorkIcon" 
                                text="Work Experience"
                            />
                        </Link>
                        <Link className="nav-link" to="/projects">
                            <PopOver 
                                icon="AccountTreeIcon" 
                                text="Projects"
                            />    
                        </Link>

                        <Link className="nav-link" to="/skills">
                            <PopOver 
                                icon="BuildIcon" 
                                text="Skills"
                            /> 
                        </Link>

                        <Link className="nav-link" to="/instagram">
                            <PopOver 
                                icon="instagram" 
                                text="Instagram"
                            /> 
                        </Link>

                        <Link className="nav-link" to="/gallery">
                            <PopOver 
                                icon="PhotoCameraIcon" 
                                text="Photography"
                            /> 
                        </Link>

                        <Link className="nav-link" to="/facebook">
                            <PopOver 
                                icon="fbIcon" 
                                text="Facebook"
                            /> 
                        </Link>
    
                        <Nav.Link href="https://github.com/karandeepvirk85" rel="noopener noreferrer" target="_blank"><GitHubIcon/></Nav.Link>
                        <Nav.Link href="https://www.linkedin.com/in/kv85/" rel="noopener noreferrer" target="_blank"><LinkedInIcon/></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/gallery" component={Gallery} />
                <Route path="/skills" component={Skills} />
                <Route path="/work" component={Work} />
                <Route path="/instagram" component={Instagram} />
                <Route path="/education" component={Education} />
                <Route path="/facebook" component={Facebook} />
                <Route path="/projects" component={Project} />
            </Switch>
        </Router>
    )
}
export default TopNavigationBar;

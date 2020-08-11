import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PopOver from '../components/popover.component.js';
import {HashRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Avatar from '../components/avatar.component.js';
import Home from '../components/home.component.js';
import Gallery from '../components/gallery.component.js';
import Skills from '../components/skills.component.js';
import Work from '../components/work.component.js';
import Instagram from '../components/instagram.component.js';
import Education from '../components/education.component.js';
import Facebook from '../components/facebook.component.js';
import Project from './projects.component.js';
import Contact from './contact.component.js';
import Twitter from './twitter.component.js';
import {DownLoadDocument} from '../components/utility/utility.component.js';

const TopNavigationBar = () =>{
    return(
        <Router>
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Link to="/"><Avatar/> Karandeep Virk</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Link className="nav-link" to="education">
                            <PopOver 
                                icon="SchoolIcon" 
                                text="Education"
                            />
                            <p className="d-block margin-0 d-sm-none">Education</p>
                        </Link>
                        <Link className="nav-link" to="/work">
                            <PopOver 
                                icon="WorkIcon" 
                                text="Work Experience"
                            />
                            <p className="d-block margin-0 d-sm-none">Work</p>
                        </Link>
                        <Link className="nav-link" to="/projects">
                            <PopOver 
                                icon="AccountTreeIcon" 
                                text="Projects"
                            />
                            <p className="d-block margin-0 d-sm-none">Projects</p>
                        </Link>

                        <Link className="skills-link nav-link" to="/skills">
                            <PopOver 
                                icon="BuildIcon" 
                                text="Skills"
                            />
                            <p className="d-block margin-0 d-sm-none">Skills</p>
                        </Link>

                        <Link className="nav-link" to="/instagram">
                            <PopOver 
                                icon="instagram" 
                                text="Instagram"
                            /> 
                            <p className="d-block margin-0 d-sm-none">Instagram</p>
                        </Link>

                        <Link className="nav-link" to="/gallery">
                            <PopOver 
                                icon="PhotoCameraIcon" 
                                text="Photography"
                            />
                            <p className="d-block margin-0 d-sm-none">Photography</p>
                        </Link>

                        <Link className="nav-link" to="/facebook">
                            <PopOver 
                                icon="fbIcon" 
                                text="Facebook"
                            />
                            <p className="d-block margin-0 d-sm-none">Facebook</p>
                        </Link>

                        <Link
                            className="nav-link"
                            onClick = {(e)=>{DownLoadDocument('/documents/Karandeep_Virk.pdf',e)}}
                        > 

                        <PopOver 
                            icon="IconDownload" 
                            text="View PDF Resume"
                        />
                            <p className="d-block margin-0 d-sm-none">View Resume</p>
                        </Link>

                        <Link
                            className="nav-link"
                            onClick = {(e)=>{DownLoadDocument("/documents/vcard.png",e)}}
                        > 
                        <PopOver 
                            icon="IdCard" 
                            text="Visiting Card"
                        />
                            <p className="d-block margin-0 d-sm-none">V Card</p>
                        </Link>

                        <Link className="nav-link" to="/contact">
                            <PopOver 
                                icon="Contact" 
                                text="Contact"
                            />
                            <p className="d-block margin-0 d-sm-none">Contact</p>
                        </Link>
                
                        <Link className="nav-link" to="/twitter">
                            <PopOver 
                                icon="twitter" 
                                text="Twitter"
                            />
                            <p className="d-block margin-0 d-sm-none">Twitter</p>
                        </Link>
                        <Nav.Link href="https://github.com/karandeepvirk85" rel="noopener noreferrer" target="_blank"><GitHubIcon/> <p className="d-block margin-0 d-sm-none"> Github</p></Nav.Link>
                        <Nav.Link href="https://www.linkedin.com/in/kv85/" rel="noopener noreferrer" target="_blank"><LinkedInIcon/> <p className="d-block margin-0 d-sm-none"> LinkedIn</p></Nav.Link>
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
                <Route path="/contact" component={Contact} />
                <Route path="/twitter" component={Twitter} />
            </Switch>
        </Router>
    )
}
export default TopNavigationBar;

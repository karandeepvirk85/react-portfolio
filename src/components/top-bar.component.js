import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import GitHubIcon from '@material-ui/icons/GitHub';
import FbIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PopOver from '../components/popover.component.js';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Avatar from '../components/avatar.component.js';
const TopNavigationBar = () =>{
    return(
        <Router>
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Navbar.Brand href="#home">
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
                            text="Resume"
                        />
                        </Link>
                        <Link 
                            to="/documents/business-card.png" 
                            target="_blank" 
                            className="nav-link" 
                            download
                        > 
                        <PopOver 
                            icon="CardBusiness" 
                            text="Business Card"
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
                        <Link className="nav-link" to="/gallery">
                            <PopOver 
                                icon="PhotoCameraIcon" 
                                text="Photography"
                            /> 
                        </Link>

                        <Nav.Link href="https://www.facebook.com/karandeepvirk" rel="noopener noreferrer" target="_blank"><FbIcon/></Nav.Link>
                        <Nav.Link href="https://github.com/karandeepvirk85" rel="noopener noreferrer" target="_blank"><GitHubIcon/></Nav.Link>
                        <Nav.Link href="https://www.linkedin.com/in/kv85/" rel="noopener noreferrer" target="_blank"><LinkedInIcon/></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Router>
    )
}
export default TopNavigationBar;

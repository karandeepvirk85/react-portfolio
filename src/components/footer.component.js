import React,{Component} from 'react';
import ShareProfile from '../components/share.component.js';
import {HashRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';
import Address from './address.component.js';
import {Nav} from 'react-bootstrap';
import {TwitterTweetEmbed} from 'react-twitter-embed';
import {
    FaTwitter,
    FaInstagram,
    FaFacebook,
    FaGithubSquare,
    FaLinkedin,
    FaBriefcase,
    FaWrench,
    FaProjectDiagram,
    FaUniversity,
    FaImages,
    FaFilePdf
} from 'react-icons/fa';
import {DownLoadDocument} from '../components/utility/utility.component.js';

export default class Footer extends Component{
    render(){
        return(
                <div className="footer">
                    <div className="top-footer">
                        <div className="footer-container">
                            <div className="container-fluid">
                                <Row>
                                    <Col className="general-info" xl={3} lg={6} md={12}>
                                        <Address/>
                                    </Col>

                                    <Col className = "footer-links" xl={3} lg={6} md={12}>
                                        <Router>
                                            <Link className="nav-link" to="/work"><FaBriefcase/> Work Experience </Link>
                                            <Link className="nav-link" to="/projects"><FaProjectDiagram/> Recent Projects</Link>
                                            <Link 
                                                onClick = {(e)=>{DownLoadDocument('/documents/Karandeep_Virk.pdf',e)}} 
                                                target="_blank" 
                                                className="nav-link" 
                                            >
                                           <FaFilePdf/> View Resume
                                            </Link> 
                                            <Link className="nav-link" to="/skills"><FaWrench/> My Skills</Link>
                                            <Link className="nav-link" to="/education"><FaUniversity/> Education</Link>
                                            <Link className="nav-link" to="/gallery"><FaImages/> Photography</Link>
                                        </Router>
                                    </Col>

                                    <Col xl={3} lg={6} md={12} className="twitter">
                                        <div className="centerContent">
                                            <div className="selfCenter standardWidth">
                                            <TwitterTweetEmbed
                                                tweetId={'1136693392660844545'}
                                            />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={3} lg={6} md={12} className="twitter">
                                        <div className="centerContent">
                                            <div className="selfCenter standardWidth">
                                            <TwitterTweetEmbed
                                                tweetId={'1293030557895409665'}
                                            />
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>

                    <div className="bottom-footer">
                        <div className="footer-icons">
                        <Router>
                            <Link className="nav-link" to="/instagram"><FaInstagram/></Link>
                            <Link className="nav-link" to="/twitter"><FaTwitter/></Link>
                            <Link className="nav-link" to="/facebook"><FaFacebook/></Link>
                            <Nav.Link href="https://github.com/karandeepvirk85" rel="noopener noreferrer" target="_blank"><FaGithubSquare/></Nav.Link>
                            <Nav.Link href="https://www.linkedin.com/in/kv85/" rel="noopener noreferrer" target="_blank"><FaLinkedin/></Nav.Link>
                        </Router>
                        </div>
                        <div className="footer-right"><ShareProfile/></div>
                    </div>
                </div>
        )
    }
}
import React, {Component} from 'react';
import {Row, Col } from 'react-bootstrap';
import {
    FaReact, 
    FaWordpress, 
    FaJs, 
    FaPhp, 
    FaPaypal, 
    FaStripeS,
    FaSass,
    FaHtml5,
    FaCss3Alt,
    FaGithub,
    FaNodeJs,
    FaBootstrap,
    FaLinkedin,
    FaFacebook,
    FaInstagram,
    FaAngular
} from 'react-icons/fa';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
export default class Skills extends Component{
	render() {
        return (
            <div className="page-container skills">
                <h2>FrameWorks, Libraries & Compilers</h2>
                <Row>
                    <Col xs={12} md={2}>
                        <FaReact/> REACT
                    </Col>
                    <Col xs={12} md={2}>
                        <FaAngular/> Angular
                    </Col>
                    <Col xs={12} md={2}>
                        <FaSass/> Sass
                    </Col>
                    <Col xs={12} md={2}>
                        <FaNodeJs/> Node JS
                    </Col>
                    <Col xs={12} md={3}>
                        <FaBootstrap/> Bootstrap 3 and 4
                    </Col>
                </Row>
                <h2>Programming Languages</h2>
                <Row>
                    <Col xs={12} md={3}>
                        <FaJs/> JavaScript
                    </Col>
                    <Col xs={12} md={3}>
                        <FaPhp/> PHP
                    </Col>
                    <Col xs={12} md={3}>
                        <FaHtml5/> HTML5
                    </Col>
                    <Col xs={12} md={3}>
                        <FaCss3Alt/> CSS3
                    </Col>
                </Row>
                
                <h2>PAYMENTS API</h2>
                <Row>
                    <Col xs={12} md={2}>
                        <FaPaypal/> PayPal API
                    </Col>
                    <Col xs={12} md={2}>
                        <FaStripeS/> Stripe API
                    </Col>
                </Row>

                <h2>Social API</h2>
                <Row>
                    <Col xs={12} md={2}>
                        <FaFacebook/> Instagram
                    </Col>
                    <Col xs={12} md={2}>
                        <FaInstagram/> Facebook
                    </Col>
                    <Col xs={12} md={2}>
                        <FaLinkedin/> LinkedIn
                    </Col>
                </Row>
                
                <h2>CMS</h2>
                <Row>
                    <Col xs={12} md={2}>
                        <FaWordpress/> Wordpress
                    </Col>
                </Row>

                <h2>Version Control</h2>
                <Row>
                    <Col xs={12} md={2}>
                        <FaGithub/> GIT
                    </Col>
                </Row>

                <h2>Expertise Comparison</h2>
                    <Row>
                        <Col xs={12} md={2}>
                           <CircularProgressbar
                            value={70}
                            text={`${70}%`}
                            styles={buildStyles({
                                pathColor: 'rgb(0 171 73 / 70%)',
                                textColor: 'rgb(0 171 73 / 70%)',
                            })}
                            />;
                            <h4 className="text-center">React</h4>
                        </Col>
                        <Col xs={12} md={2}>
                            <CircularProgressbar 
                                value={70} 
                                text={`${70}%`} 
                                styles={buildStyles({
                                pathColor: 'rgb(0 171 73 / 70%)',
                                textColor: 'rgb(0 171 73 / 70%)',
                            })}
                            />
                            <h4 className="text-center">JavaScript</h4>
                        </Col>
                        <Col xs={12} md={2}>
                            <CircularProgressbar 
                                value={90} 
                                text={`${90}%`}
                                styles={buildStyles({
                                    pathColor: 'rgb(9 226 102 / 70%)',
                                    textColor: 'rgb(9 226 102 / 70%)',
                                })} 
                            />
                            <h4 className="text-center">PHP</h4>
                        </Col>
                        <Col xs={12} md={2}>
                            <CircularProgressbar 
                                value={45} 
                                text={`${45}%`} 
                                styles={buildStyles({
                                    pathColor: 'rgb(202 27 27 / 70%)',
                                    textColor: 'rgb(202 27 27 / 70%)',
                                })}
                            />
                            <h4 className="text-center">Angular</h4>
                        </Col>
                        <Col xs={12} md={2}>
                            <CircularProgressbar
                                value={50} 
                                text={`${50}%`}
                                styles={buildStyles({
                                    pathColor: 'rgb(141 214 56)',
                                    textColor: 'rgb(141 214 56)',
                                })}
                            />
                            <h4 className="text-center">Git</h4>
                        </Col>
                        <Col xs={12} md={2}>
                            <CircularProgressbar
                                value={80} 
                                text={`${80}%`} 
                                styles={buildStyles({
                                    pathColor: 'rgba(0, 171, 73, 0.7)',
                                    textColor: 'rgba(0, 171, 73, 0.7)',
                            })}
                            />
                            <h4 className="text-center">Bootstrap</h4>
                        </Col>
                    </Row>
            </div>
        )  	
    }
} 
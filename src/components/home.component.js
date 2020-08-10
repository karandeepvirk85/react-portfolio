import React, {Component} from 'react';
import InstagramEmbed from 'react-instagram-embed';
import{Row, Col, Form, Button, Alert, Nav} from 'react-bootstrap';
import {FaIdCard} from 'react-icons/fa';
import axios from 'axios';
import IconDownload from '@material-ui/icons/SystemUpdateAlt';

export default class Home extends Component{
	render() {
        return (
            <>
                <div className="page-container home">
                    <Row className="insta-row">  
                        <Col md={6}>
                            <InstagramEmbed
                                url='https://www.instagram.com/p/ByBD_-XDoUY/?utm_source=ig_embed'
                                hideCaption={false}
                                containerTagName='div'
                                protocol=''
                                injectScript
                                onLoading={() => {}}
                                onSuccess={() => {}}
                                onAfterRender={() => {}}
                                onFailure={() => {}}
                            />
                        </Col>
                        
                        <Col xs={12} md={6} className="home-info text-center">
                                <p>
                                    <a className="btn btn-lg btn-dark"  href="/documents/Karandeep_Virk.pdf"  target="_blank"  download><IconDownload/> Download Resume</a>
                                </p>
                                <br/>
                                <p>
                                    <a className="btn btn-lg btn-dark" href="/documents/vcard.png" target="_blank" download><FaIdCard/> Download VCard</a>
                                </p>
                        </Col>
                    </Row>
                </div>
            </>
        )  	
    }
} 
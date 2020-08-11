import React, {Component} from 'react';
import InstagramEmbed from 'react-instagram-embed';
import{Row, Col, Form, Button, Alert, Nav} from 'react-bootstrap';
import {
    FaIdCard,
    FaFileDownload,
    FaFilePdf

} from 'react-icons/fa';
import IconDownload from '@material-ui/icons/SystemUpdateAlt';
import {DownLoadDocument} from '../components/utility/utility.component.js';

export default class Home extends Component{
	render() {
        return (
            <>
                <div className="page-container home">
                    <Row className="insta-row">  
                        <Col md={5}>
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
                        
                        <Col xs={12} md={7} className="home-info">
                            <p>Dear Hiring Manager,</p>
                            <p></p>
                            <p>My name is Karandeep Virk. I have recently moved to Vancouver from Kelowna. I have 3 years of working experience at Navigator Multimedia Kelowna BC, CANADA as a Web developer and designer.</p>
                            <p>I have expertise in modern web development technologies such as React, Angular, WordPress development, PHP, AJAX, MySQL, JavaScript, SASS. I’ve built applications for consultants, hospitals, realtors, and dozens of other businesses.</p>
                            <p>I have developed WordPress Themes, Plugins, Widgets, and Templates from beginning for different businesses and stakeholders such as Hotel booking plugin, Tours and Travel reservation, Online events ticketing software, Season passes applications, Quizzes, Surveys utilizing WP Custom Post Type, WP_Query, Taxonomies and Meta Queries, Actions, Filters, and Hooks.</p>
                            <p>I have developed 3 projects with React JS using Axios, Materials-UI, Ant-d, and also developed an AngularJS project. I have experience Integrating WP REST API with React JS.</p>
                            <p>I have integrated different payments REST APIs such as PayPal Pro, Stripe, Paypal Standard with different applications using raw API calls. I have expertise in WP plugins such as FedEx, Elavon, Authorize.net, W3 Total Cache, Woocommerece subscriptions, Elementor, Yoast SEO, ACF, Custom Fields.</p>
                            <p>My goal in life Is learning and grasping knowledge not limited to learning syntax, but every aspect of the software development life cycle whether it is designing or testing. I am aware of every technology in computer science that is emerging.</p>
                            <p><a className="btn btn-lg btn-primary" onClick = {(e)=>{DownLoadDocument('/documents/Karandeep_Virk.pdf',e)}}><FaFilePdf/> Download Resume</a></p>
                            <p><a className="btn btn-lg btn-primary" onClick = {(e)=>{DownLoadDocument("/documents/Cover_Letter.pdf",e)}}><FaFileDownload/> Download Cover Letter</a></p>
                            <p><a className="btn btn-lg btn-primary" onClick = {(e)=>{DownLoadDocument("/documents/vcard.png",e)}}><FaIdCard/> Download Visiting Card</a></p>
                        </Col>
                    </Row>
                </div>
            </>
        )  	
    }
} 
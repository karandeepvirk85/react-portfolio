import React, {Component} from 'react';
import InstagramEmbed from 'react-instagram-embed';
import{Row, Col} from 'react-bootstrap';
import SimpleMenu from './navigate.component.js';

export default class About extends Component{
	render() {
        return (
            <>
                <div className="page-container about">
                    <Row className="insta-row">  
                        <Col md={5}>
                            <InstagramEmbed
                                url="https://www.instagram.com/p/CDSpHgilPsq/?utm_source=ig_embed"
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
                            <p>My name is Karandeep Virk. I have recently moved to Vancouver from Kelowna. I have 3 years of working experience at Navigator Multimedia Kelowna BC, CANADA as a Programmer / Web developer.</p>
                            <p>I have expertise in modern web development technologies such as React, Angular, WordPress development, PHP, AJAX, MySQL, JavaScript, SASS. I’ve built applications for consultants, lawyers, hospitals, realtors, and dozens of other businesses.</p>
                            <p>Developed 3 React JS projects and an Angular Project that includes an eCommerce Project using components such as Axios, Materials-ui, Antd and Story Book. Experience with PHPUnit and UI testing using Mocha and Chai.</p>
                            <p>I have developed WordPress Themes, Plugins, Widgets, and Templates from beginning for different businesses and stakeholders such as Hotel booking plugin, Tours and Travel reservation, Online events ticketing software, Season passes applications, Quizzes, Surveys using WP Custom Post Type, WP_Query, Taxonomies Queries, Meta Queries, Actions, Filters, and Hooks.</p>
                            <p>Implemented Google technologies such as Markers, Trails, Polylines, Polygon, WayPoints, Clusters, Info Windows, Shapes, KML, Geometry Library, Places Library, AutoComplete and Google Calendar.</p>
                            <p>I have integrated different payments REST APIs such as PayPal Pro, Stripe, Paypal Standard with different applications using raw API calls. I have expertise in WP plugins such as FedEx, Elavon, Authorize.net, W3 Total Cache, Woocommerece subscriptions, Elementor, Yoast SEO, ACF, Custom Fields.</p>
                            <p>My goal in life Is learning and grasping knowledge not limited to learning syntax, but every aspect of the software development life cycle whether it is designing or testing. I am learning and aware of every technology in computer science that is emerging.</p>
                            <SimpleMenu/>
                        </Col>
                    </Row>
                </div>
            </>
        )  	
    }
}
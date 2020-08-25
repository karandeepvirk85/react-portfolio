import React, { Component } from "react";
import InstagramEmbed from "react-instagram-embed";
import { Row, Col } from "react-bootstrap";
import SimpleMenu from "./navigate.component.js";
import SinglePage from "./page.component.js";
export default class About extends Component {
    render() {
        return (
            <>
                <div className="page-container about">
                    <Row className="insta-row">
                        <Col md={5}>
                            <InstagramEmbed
                                url="https://www.instagram.com/p/CDSpHgilPsq/?utm_source=ig_embed"
                                hideCaption={false}
                                containerTagName="div"
                                protocol=""
                                injectScript
                                onLoading={() => {}}
                                onSuccess={() => {}}
                                onAfterRender={() => {}}
                                onFailure={() => {}}
                            />
                        </Col>

                        <Col xs={12} md={7} className="home-info">
                            <SinglePage slug="about-me" />
                            <SimpleMenu />
                        </Col>
                    </Row>
                </div>
            </>
        );
    }
}

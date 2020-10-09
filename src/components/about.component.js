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
                    <Row>
                        <Col md={12} className="home-info">
                            <SinglePage slug="about-me" />
                            <br />
                            <SimpleMenu />
                        </Col>
                    </Row>
                </div>
            </>
        );
    }
}

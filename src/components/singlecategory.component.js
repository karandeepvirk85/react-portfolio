import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import AllBlogs from "./blogs.component.js";
import SideBar from "./sidebar.component.js";

export default class SingleCategory extends Component {
    render() {
        return (
            <div className="page-container blog">
                <Row>
                    {/* will improve later
                     <Col md={3} npmclassName="side-bar">
                        <SideBar />
                    </Col> */}
                    <Col md={12} className="blog-container">
                        <AllBlogs category={this.props.match.params.slug} />
                    </Col>
                </Row>
            </div>
        );
    }
}

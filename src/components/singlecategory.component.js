import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import AllBlogs from "./blogs.component.js";
import SideBar from "./sidebar.component.js";

export default class SingleCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: null,
        };
    }

    componentDidMount() {
        var apiEndPost =
            "http://localhost/react-portfolio/api/wp-admin/admin-ajax.php?action=get_single_category&slug=" +
            this.props.match.params.slug;
        fetch(apiEndPost)
            .then((response) => response.json())
            .then((result) => {
                this.setState({ isLoading: false, data: result.data });
            });
    }

    getCategories = (arrCategories) => {
        const List = arrCategories.map((item, index) => (
            <p className="category">{item.name}</p>
        ));
        return List;
    };

    render() {
        return (
            <div className="page-container blog">
                <Row>
                    <Col md={3} className="side-bar">
                        <SideBar />
                    </Col>
                    <Col md={9} className="blog-container">
                        <AllBlogs />
                    </Col>
                </Row>
            </div>
        );
    }
}

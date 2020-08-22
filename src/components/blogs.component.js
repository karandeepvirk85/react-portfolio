import React, { Component } from "react";
import {
    renderHTML,
    LinearIndeterminate,
} from "./utility/utility.component.js";
import NewsBar from "./news.component.js";
import { Row, Col } from "react-bootstrap";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
    FaUser,
    FaCalendar,
    FaLinkedin,
    FaFacebook,
    FaInstagram,
    FaTwitter,
} from "react-icons/fa";
const apiUrl =
    "http://localhost/react-portfolio/api/wp-admin/admin-ajax.php?action=get_blogs";

export default class Blogs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: null,
        };
    }

    componentDidMount() {
        fetch(apiUrl)
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

    getAllBlogs = () => {
        if (this.state.data != null) {
            let objData = this.state.data;
            const List = objData.map((item, index) => (
                <div className="blog-tile">
                    <div className="blog-inner">
                        <div
                            className="blog-left col-md-4"
                            style={{
                                backgroundImage:
                                    "url(" + item.image_thumb + ")",
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                            }}
                        ></div>
                        <div className="col-md-8 blog-right">
                            <h1 className="blog-title">
                                <Link className="nav-link" to={item.url}>
                                    {item.title}
                                </Link>
                                <div className="blog-info">
                                    <p className="blog-date blog-info-data">
                                        <FaCalendar /> {item.date}
                                    </p>
                                    <p className="blog-user blog-info-data">
                                        <FaUser /> {item.author}
                                    </p>
                                </div>
                            </h1>
                            <div className="blog-description">
                                <div className="blog-content">
                                    {renderHTML(item.small_content)}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blog-bottom">
                        <p className="blog-user blog-info-data">
                            {this.getCategories(item.category)}
                        </p>
                        <p>
                            <FaInstagram />
                            <FaFacebook />
                            <FaLinkedin />
                            <FaTwitter />
                        </p>
                    </div>
                </div>
            ));
            return List;
        }
    };

    render() {
        return (
            <div className="page-container blog">
                <Row>
                    <Col md={3} className="news-bar">
                        <NewsBar />
                    </Col>
                    <Col md={9}>
                        {this.state.isLoading && <LinearIndeterminate />}
                        <Router>
                            {!this.state.isLoading && this.getAllBlogs()}
                        </Router>
                    </Col>
                </Row>
            </div>
        );
    }
}

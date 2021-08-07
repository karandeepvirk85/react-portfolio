import React, { Component } from "react";
import {
    renderHTML,
    LinearIndeterminate,
} from "./utility/utility.component.js";

import SideBar from "./sidebar.component.js";
import AllBlogs from "./blogs.component.js";
import { Row, Col } from "react-bootstrap";
import { blogApi } from "./constants/constants.component.js";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
    FaUser,
    FaCalendar,
    FaLinkedin,
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaShareAlt,
} from "react-icons/fa";

export default class Blogs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: null,
        };
    }

    componentDidMount() {
        fetch(blogApi)
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
                                backgroundImage: "url(" + item.image_full + ")",
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
                        <p>
                            <FaShareAlt />
                            <FaInstagram />
                            <FaFacebook />
                            <FaLinkedin />
                            <FaTwitter />
                        </p>
                        <p className="blog-user blog-info-data">
                            {this.getCategories(item.category)}
                        </p>
                        <p>
                            <Link className="nav-link read-more" to={item.url}>
                                Read
                            </Link>
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
                <div className="grid-divison">
                    <Col className="side-bar">
                        <SideBar />
                    </Col>
                    <Col className="blog-container">
                        <h3 className="text-right main-heading">
                            LATEST POSTS
                        </h3>
                        <AllBlogs />
                    </Col>
                </div>
            </div>
        );
    }
}

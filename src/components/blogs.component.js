import React, { Component } from "react";
import {
    renderHTML,
    LinearIndeterminate,
} from "./utility/utility.component.js";

import { categoryBlog, siteDomain } from "./constants/constants.component.js";

import { HashRouter as Router, Link } from "react-router-dom";

import {
    FaUser,
    FaCalendar,
    FaLinkedin,
    FaFacebook,
    FaTwitter,
    FaShareAlt,
    FaEnvelope,
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
        let category = "all";
        if (this.props.category != undefined) {
            if (this.props.category.length > 0) {
                category = this.props.category;
            }
        }
        var apiEndPost = categoryBlog + category;
        fetch(apiEndPost)
            .then((response) => response.json())
            .then((result) => {
                this.setState({ isLoading: false, objData: result.data });
            });
    }

    getCategories = (arrCategories) => {
        const List = arrCategories.map((item, index) => (
            <p className="category">{item.name}</p>
        ));
        return List;
    };

    getAllBlogs = () => {
        if (this.state.objData != null) {
            let objData = this.state.objData;
            const List = objData.map((item, index) => (
                <div className="blog-tile">
                    <div className="blog-inner">
                        <div
                            className="blog-left col-md-4"
                            style={{
                                backgroundImage: "url(" + item.image_full + ")",
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
                            <a
                                target="blank"
                                href={
                                    "https://www.linkedin.com/shareArticle?mini=true&amp;url=" +
                                    siteDomain +
                                    "/#/" +
                                    item.url
                                }
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                target="blank"
                                href={
                                    "https://www.facebook.com/sharer/sharer.php?u=" +
                                    siteDomain +
                                    "/#/" +
                                    item.url
                                }
                            >
                                <FaFacebook />
                            </a>
                            <a
                                target="blank"
                                href={
                                    "https://twitter.com/intent/tweet?text=&amp;url=" +
                                    siteDomain +
                                    "/#/" +
                                    item.url +
                                    "&amp;via="
                                }
                            >
                                <FaTwitter />
                            </a>
                            <a
                                target="blank"
                                href={
                                    "mailto:someone@yoursite.com?subject=Sharing Post of Karandeep Virk&body=" +
                                    siteDomain +
                                    "/#/" +
                                    item.url
                                }
                            >
                                <FaEnvelope />
                            </a>
                        </p>
                        <p className="blog-user blog-info-data">
                            {this.getCategories(item.category)}
                        </p>
                        <p>
                            <Link className="nav-link read-more" to={item.url}>
                                Read More
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
            <>
                {this.state.isLoading && <LinearIndeterminate />}
                <Router>{!this.state.isLoading && this.getAllBlogs()}</Router>
            </>
        );
    }
}

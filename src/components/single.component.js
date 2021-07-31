import React, { Component } from "react";
import {
  LinearIndeterminate,
  renderHTML,
} from "./utility/utility.component.js";
import { Row, Col } from "react-bootstrap";
import SideBar from "./sidebar.component.js";
import AllBlogs from "./blogs.component.js";
import {
  FaUser,
  FaCalendar,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaShareAlt,
} from "react-icons/fa";

import { apiDomain } from "./constants/constants.component";

export default class Single extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      objData: [],
    };
    this.getSingle = this.getSingle.bind(this);
  }

  componentDidUpdate = (prevProps) => {
    if (this.props.match.params.slug !== prevProps.match.params.slug) {
      var apiEndPost =
        apiDomain +
        "/wp-admin/admin-ajax.php?action=get_single&slug=" +
        this.props.match.params.slug;
      fetch(apiEndPost)
        .then((response) => response.json())
        .then((result) => {
          this.setState({ isLoading: false, objData: result.data });
        });
    }
  };

  componentDidMount() {
    const {
      match: { params },
    } = this.props;
    var apiEndPost =
      apiDomain +
      "/wp-admin/admin-ajax.php?action=get_single&slug=" +
      this.props.match.params.slug;
    fetch(apiEndPost)
      .then((response) => response.json())
      .then((result) => {
        this.setState({ isLoading: false, objData: result.data });
      });
  }

  getSingle() {
    return (
      <>
        <img className="img-fluid" src={this.state.objData.image_full} />
        <div className="blog-info">
          <p className="blog-date blog-info-data">
            <FaCalendar /> {this.state.objData.date}
          </p>
          <p className="blog-user blog-info-data">
            <FaUser /> {this.state.objData.author}
          </p>
        </div>
        <div>{renderHTML(this.state.objData.content)}</div>
      </>
    );
  }

  render() {
    return (
      <div className="page-container blog single">
        <Row>
          <Col md={3} className="side-bar">
            <SideBar />
          </Col>
          <Col md={9} className="blog-container">
            <h1>{this.state.objData.title}</h1>
            {this.getSingle()}
          </Col>
        </Row>
      </div>
    );
  }
}

import React, { Component } from "react";
import {
    LinearIndeterminate,
    renderHTML,
} from "./utility/utility.component.js";
import NewsBar from "./news.component.js";
import { Row, Col } from "react-bootstrap";
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
                "http://localhost/react-portfolio/api/wp-admin/admin-ajax.php?action=get_single&slug=" +
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
            "http://localhost/react-portfolio/api/wp-admin/admin-ajax.php?action=get_single&slug=" +
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
                <h1>{this.state.objData.title}</h1>
                <img src={this.state.objData.image_full} />
                <p>&nbsp;</p>
                <div>{renderHTML(this.state.objData.content)}</div>
            </>
        );
    }

    render() {
        return (
            <div className="page-container blog">
                <Row>
                    <Col md={3} className="news-bar">
                        <NewsBar />
                    </Col>
                    <Col md={9} className="single">
                        {this.state.isLoading && <LinearIndeterminate />}
                        {!this.state.isLoading && this.getSingle()}
                    </Col>
                </Row>
            </div>
        );
    }
}

import React, { Component } from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";
import { Row, Col } from "react-bootstrap";
import { LinearIndeterminate } from "./utility/utility.component.js";

const PageContent = () => {
    return (
        <>
            <Row>
                <Col xl={4} lg={6} md={12} xs={12}>
                    <div className="centerContent">
                        <div className="selfCenter standardWidth">
                            <TwitterTweetEmbed
                                tweetId={"1292837320777854977"}
                            />
                        </div>
                    </div>
                </Col>
                <Col xl={4} lg={6} md={12} xs={12}>
                    <div className="centerContent">
                        <div className="selfCenter standardWidth">
                            <TwitterTweetEmbed
                                tweetId={"1292839561198886913"}
                            />
                        </div>
                    </div>
                </Col>
                <Col xl={4} lg={6} md={12} xs={12}>
                    <div className="centerContent">
                        <div className="selfCenter standardWidth">
                            <TwitterTweetEmbed
                                tweetId={"1292837240993767425"}
                            />
                        </div>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col xl={4} lg={6} md={12} xs={12}>
                    <div className="centerContent">
                        <div className="selfCenter standardWidth">
                            <TwitterTweetEmbed
                                tweetId={"1173620477438283776"}
                            />
                        </div>
                    </div>
                </Col>
                <Col xl={4} lg={6} md={12} xs={12}>
                    <div className="centerContent">
                        <div className="selfCenter standardWidth">
                            <TwitterTweetEmbed
                                tweetId={"1136693392660844545"}
                            />
                        </div>
                    </div>
                </Col>
                <Col xl={4} lg={6} md={12} xs={12}>
                    <div className="centerContent">
                        <div className="selfCenter standardWidth">
                            <TwitterTweetEmbed
                                tweetId={"1291400476768923648"}
                            />
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default class Twitter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            renderSpinner: true,
        };
    }

    componentDidMount() {
        setTimeout(
            function () {
                this.setState({ renderSpinner: false });
            }.bind(this),
            3000
        );
    }

    render() {
        return (
            <div className="page-container twitter">
                <h1>Twitter</h1>
                {this.state.renderSpinner && <LinearIndeterminate />}
                {!this.state.renderSpinner && <PageContent />}
            </div>
        );
    }
}

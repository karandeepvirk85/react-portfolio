import React,{Component} from 'react';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import {Row, Col} from 'react-bootstrap';
export default class Twitter extends Component{
    render(){
        return(
            <div className="page-container twitter">
                <h1>Twitter</h1>
                <Row>
                    <Col md= {4} xs={12}>
                        <div className="centerContent">
                            <div className="selfCenter standardWidth">
                            <TwitterTweetEmbed
                                tweetId={'1292837320777854977'}
                            />
                            </div>
                        </div>
                    </Col>
                    <Col md= {4} xs={12}>
                        <div className="centerContent">
                            <div className="selfCenter standardWidth">
                            <TwitterTweetEmbed
                                tweetId={'1292839561198886913'}
                            />
                            </div>
                        </div>
                    </Col>
                    <Col md= {4} xs={12}>
                        <div className="centerContent">
                            <div className="selfCenter standardWidth">
                            <TwitterTweetEmbed
                                tweetId={'1292837240993767425'}
                            />
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col md= {4} xs={12}>
                        <div className="centerContent">
                            <div className="selfCenter standardWidth">
                            <TwitterTweetEmbed
                                tweetId={'1173620477438283776'}
                            />
                            </div>
                        </div>
                    </Col>
                    <Col md= {4} xs={12}>
                        <div className="centerContent">
                            <div className="selfCenter standardWidth">
                            <TwitterTweetEmbed
                                tweetId={'1136693392660844545'}
                            />
                            </div>
                        </div>
                    </Col>
                    <Col md= {4} xs={12}>
                        <div className="centerContent">
                            <div className="selfCenter standardWidth">
                            <TwitterTweetEmbed
                                tweetId={'1291400476768923648'}
                            />
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

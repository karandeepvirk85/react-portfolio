import React, { Component} from 'react';
import { FacebookProvider, EmbeddedPost } from 'react-facebook';
import { Row, Col } from 'react-bootstrap';
 
export default class Facebook extends Component {
	render() {
		return (
			<FacebookProvider appId="378244259239209">
				<Row>
					<Col xs={12} md={4}>
						<EmbeddedPost href="https://www.facebook.com/1929938010602123/photos/a.1931425280453396/2942476519348262/?type=3&theater"/>
					</Col>
					<Col xs={12} md={4}>
						<EmbeddedPost href="https://www.facebook.com/1929938010602123/photos/a.1931425280453396/2942476209348293/?type=3&theater	"/>
					</Col>
					<Col xs={12} md={4}>
						<EmbeddedPost href="https://www.facebook.com/1929938010602123/photos/a.1931425280453396/2969834383279142/?type=3&theater"/>
					</Col>
				</Row>
			</FacebookProvider>
		);
	}
}
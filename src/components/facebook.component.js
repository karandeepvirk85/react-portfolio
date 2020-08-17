import React, { Component} from 'react';
import { FacebookProvider, EmbeddedPost } from 'react-facebook';
import { Row, Col } from 'react-bootstrap';
import LinearIndeterminate from './progress.component.js';

const PageContent = () => {
	return(
		<div className = "content-bar">
			<FacebookProvider appId="378244259239209">
				<Row>
					<Col xs={12} md={4}>
						<EmbeddedPost href="https://www.facebook.com/photo.php?fbid=10157476757326302&set=a.10150579971071302&type=3&theater"/>
					</Col>
					<Col xs={12} md={4}>
						<EmbeddedPost href="https://www.facebook.com/photo.php?fbid=10156860852491302&set=pb.599146301.-2207520000..&type=3&theater"/>
					</Col>
					<Col xs={12} md={4}>
						<EmbeddedPost href="https://www.facebook.com/photo.php?fbid=10156568997076302&set=pb.599146301.-2207520000..&type=3&theater"/>
					</Col>
				</Row>
				<p></p>
				<Row>
					<Col xs={12} md={4}>
						<EmbeddedPost href="https://www.facebook.com/photo.php?fbid=10157494020546302&set=pcb.10157494030791302&type=3&theater"/>
					</Col>
					<Col xs={12} md={4}>
						<EmbeddedPost href="https://www.facebook.com/1929938010602123/photos/a.1931425280453396/2942476209348293/?type=3&theater	"/>
					</Col>
					<Col xs={12} md={4}>
						<EmbeddedPost href="https://www.facebook.com/photo.php?fbid=10157535218631302&set=a.143535931301&type=3&theater"/>
					</Col>
				</Row>
			</FacebookProvider>
		</div>
	);
}

export default class Facebook extends Component {
	constructor(props){
		super(props);
		this.state = {
			renderSpinner:true
		}
	}

	componentDidMount(){
		setTimeout(function(){
			this.setState({renderSpinner: false})
		}.bind(this), 3000);
	}

	render() {
		return(
			<div className="page-container facebook">
				<h1>FACEBOOK</h1>
				{this.state.renderSpinner && <LinearIndeterminate/>}
				{!this.state.renderSpinner && <PageContent/>}
			</div>
		);
	}
}
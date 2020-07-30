import React,{Component} from 'react';
import {Row, Col } from 'react-bootstrap';
import InstagramEmbed from 'react-instagram-embed';
export default class Instagram extends Component{
	render(){
		return(
			<>
			<Row className="insta-row">  
				<Col xs={12} md={4}>
					<InstagramEmbed
						url='https://www.instagram.com/p/B8IGvw3JCow/'
						hideCaption={false}
						containerTagName='div'
						protocol=''
						injectScript
						onLoading={() => {}}
						onSuccess={() => {}}
						onAfterRender={() => {}}
						onFailure={() => {}}
					/>
				</Col>
                <Col xs={12} md={4}>
					<InstagramEmbed
						url='https://www.instagram.com/p/BzycFLmFPqt/'
						hideCaption={false}
						containerTagName='div'
						protocol=''
						injectScript
						onLoading={() => {}}
						onSuccess={() => {}}
						onAfterRender={() => {}}
						onFailure={() => {}}
					/>
				</Col>
				<Col xs={12} md={4}>
					<InstagramEmbed
						url='https://www.instagram.com/p/BwGOOo_ll20/'
						hideCaption={false}
						containerTagName='div'
						protocol=''
						injectScript
						onLoading={() => {}}
						onSuccess={() => {}}
						onAfterRender={() => {}}
						onFailure={() => {}}
					/>
				</Col>
			</Row>
			</>
		)
	}
}
import React,{Component} from 'react';
import {Row, Col } from 'react-bootstrap';
import InstagramEmbed from 'react-instagram-embed';
export default class Instagram extends Component{
	render(){
		return(
			<div className="page-container instagram">
				<h1>Instagram</h1>
				<Row className="insta-row">  
					<Col xs={12} md={4}>
						<InstagramEmbed
							url='https://www.instagram.com/p/CDSbxgSljaC/'
							hideCaption={true}
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
							url='https://www.instagram.com/p/BxLJgwuhg2W/'
							hideCaption={true}
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
							url='https://www.instagram.com/p/CDSpHgilPsq/'
							hideCaption={true}
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
				
				<Row>
					<Col xs={12} md={4}>
						<InstagramEmbed
							url='https://www.instagram.com/p/B4Qyj14hJyv/'
							hideCaption={true}
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
							url='https://www.instagram.com/p/CDXobuFlmrJ/'
							hideCaption={true}
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
							url='https://www.instagram.com/p/ByBD_-XDoUY/'
							hideCaption={true}
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
			</div>
		)
	}
}
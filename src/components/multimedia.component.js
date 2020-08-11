import React, {Component} from 'react';
import { FacebookProvider, EmbeddedPost } from 'react-facebook';
import { Row, Col } from 'react-bootstrap';
import LinearIndeterminate from './progress.component.js';
export default class Multimedia extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLoading:true
        }
    }
    
    hideSpinner = () =>{
        if(this.state.isLoading === true){
            this.setState({isLoading:false});
        }
    }
    
    render(){
        return(
            <div className = "page-container multimedia">
                <h1>Multimedia</h1>
                {this.Videos()}
            </div>
        )
    }

    Videos = () => {
        return( 
            <>
            { 
                this.state.isLoading ? (<LinearIndeterminate/>) : null 
            }

            <FacebookProvider appId="378244259239209">
            <Row>
                <Col xs={12} md={4}>
                    <EmbeddedPost href="https://www.facebook.com/hairstudioja/videos/227002995091792/"/ >
                </Col>
                <Col xs={12} md={4}>
                    <EmbeddedPost href="https://www.facebook.com/hairstudioja/videos/274132627025867/"/ >
                </Col>
                <Col xs={12} md={4}>
                    <EmbeddedPost href="https://www.facebook.com/hairstudioja/videos/516843672349568/" />
                </Col>
            </Row>

            <Row>
                <Col xs={12} md={4}>
                    <EmbeddedPost href="https://www.facebook.com/vcupcode/videos/200871470978556/" />
                </Col>
                <Col xs={12} md={4}>
                    <EmbeddedPost href="https://www.facebook.com/vcupcode/videos/886975095086705/" />
                </Col>
                <Col xs={12} md={4}>
                    <EmbeddedPost href="https://www.facebook.com/vcupcode/videos/200871470978556/" />
                </Col>
            </Row>
        </FacebookProvider>
        </>
        )
    }
}
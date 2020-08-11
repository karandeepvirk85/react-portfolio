import React, {Component} from 'react';
import{Row, Col, Form, Button, Alert} from 'react-bootstrap';
import axios from 'axios';
import Address from './address.component.js'; 
export default class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:'',
            message:''
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }
    
    handleFormSubmit(event){
        event.preventDefault();
        const objData           = new FormData(event.target);
        const strName           = objData.get('name');
        const strMessage        = objData.get('message');
        const strContact        = objData.get('contact');
        if(strName.length===0 || strMessage.length===0 || strContact.length ===0){
            alert('Please Fill Both Fields');
        }else{
            axios({
                method: 'post',
                url: 'https://karandeepvirk.com/api/contact_controller.php',
                headers: { 'content-type': 'application/x-www-form-urlencoded' },
                data: objData
            })
            .then(result => {
                this.setState({
                    mailSent: result.data.sent
                })
            })
            .catch(error => this.setState({ error: error.message }));
        }
    }

    render(){
        return(
            <div className = "page-container contact">
                <h1>Hire Me</h1>
                <Row>
                    <Col xs={12} md={4}>
                        <Address/>
                    </Col>
                    <Col xs={12} md={8}>
                        <Form onSubmit={this.handleFormSubmit}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" name="name" placeholder="Name" />
                                <br/>
                                <Form.Label>Email/Contact</Form.Label>
                                <Form.Control type="text" name="contact" placeholder="Contact" />
                                <br/>
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" name="message" rows ="3" />
                            </Form.Group>

                            <Button variant="primary" type="submit">Submit</Button>
                            {this.state.mailSent &&
                                <p>
                                    <Alert variant="success">
                                        <Alert.Heading>Hey, Thanks for contacting me</Alert.Heading>
                                        <p>
                                            I  will read this message and will get back to you soon. Please dont hesitate to call me if you want to hire me. Please do leave your phone number or email in the message.
                                        </p>
                                        <hr />
                                    </Alert>
                                </p>
                            }
                        </Form>
                    </Col>
                </Row>
            </div>
        )
    }
}
import React,{useState, Component} from 'react';
import {Modal, Button} from 'react-bootstrap';
  
export default class MyModal extends Component{
    constructor(props){
        super(props);
        this.state = {
            modalState:true
        }
    }
    
    render(){
        const ImageModal = () => {
            const [show, setShow] = useState(false);
            const handleClose = () => setShow(false);
            const handleShow = () => setShow(true);
            return (
                <>
                <Button variant="dark" onClick={handleShow}>View Certificate</Button>

                <Modal size="lg" show={show} onHide={handleClose}  animation={false} aria-labelledby="example-custom-modal-styling-title">
                    <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">{this.props.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img className="img-fluid" src={this.props.image}/>
                    </Modal.Body>
                </Modal>
                </>
            );
        }
        return <ImageModal/>
    }
}
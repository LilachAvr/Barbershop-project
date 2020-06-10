import React, { Component } from 'react';
import { Modal, Button} from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

class ShowAppointment extends Component {
    state = {isEmployee:false,isBusinessManager:false}
    userphone = this.props.username.phone
    userName = this.props.username.userName
    render() {
        if (this.state.isBusinessManager) {
            return <Redirect to='/Admin'/>
        }
        if (this.state.isEmployee) {
            return <Redirect to='/Employee'/>            
        }
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        בחר סוג עובד
        </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <strong>{this.props.username.userName}</strong> היי
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='danger' onClick={this.props.onHide}>חזור</Button>
                </Modal.Footer>
            </Modal >

        );
    }
}

export default ShowAppointment;
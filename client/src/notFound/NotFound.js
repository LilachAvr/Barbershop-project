import React, { Component } from 'react';
import './NotFound.css';
class NotFound extends Component {
    render() {
        return (
            <div className='body'>
                <span id='logo'>N.A HiarStyle</span>
                <p>
                    The requested URL
                
                    was not found on this server.
                    <br/>
                <ins>That’s all we know.</ins>
                </p>
                <p>
                    <b>404.</b>
                    <ins>That’s an error.</ins>
                </p>
            </div>
        )
    }
}

export default NotFound;
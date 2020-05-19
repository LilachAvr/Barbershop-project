import React, { Component } from 'react';
import './Home.css'
import { Redirect } from 'react-router-dom';
import Navbar from './Navbar';

class Homey extends Component{
    state={flag:false}
    render(){

        if (this.state.flag) {
            return <Redirect to='/SettingQueues'/>
        }

        return(
            <div className='Home'>
                <Navbar/>
                <div className='container'>
                <h1>More than just a haircut...</h1>
                <button type="button" className="btn btn-outline-warning">עוד עלינו</button>
                <button type="button" className="btn btn-outline-warning" onClick={() => this.setState({ flag: true })}>לקביעת תור</button>
                </div>
            </div>
        )
    }
}

export default Homey;
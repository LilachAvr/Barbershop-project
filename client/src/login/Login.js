import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';
import './Login.css';
import {ButtonToolbar} from 'react-bootstrap';
import SelectManagerType from './SelectManagerType'
class Login extends Component {
    state = {ManagerTypeShow:false, admin: false, signUp: false, signIn: false , signUpMeng:false};
    render() {
        let ManagerTypeClose =()=>this.setState({ManagerTypeShow:false})
        // if (this.state.admin) {
        //     return <Redirect to='/Admin' />
        // }
        if (this.state.signUpMeng) {
            return <Redirect to='/signUpAdmin' />
        }
        if (this.state.signUp) {
            return <Redirect to='/SignUp' />
        }
        if (this.state.signIn) {

            return <Redirect to='/SignIn' />
        }
        return (
            <div id='login'>
                {/* <h1>N.A HairStyle</h1> */}
                <span>בחירת חשבון</span>
                <br /><br />
                <div id='selectUser'>
                    <button type="button" className="btn btn-secondary btn-lg" onClick={() => {
                        this.setState({ signIn: true })
                    }} >לקוח קיים</button>
                    <button type="button" className="btn btn-secondary btn-lg" onClick={() => {
                        this.setState({ signUp: true })
                    }}>לקוח חדש</button>
                    <ButtonToolbar>
                    <button type="button" className="btn btn-secondary btn-lg" onClick={() => {
                        this.setState({ ManagerTypeShow: true })
                    }}>מנהל</button>
                    <SelectManagerType 
                    show={this.state.ManagerTypeShow}
                    onHide = {ManagerTypeClose}
                    />
                    </ButtonToolbar>
                    {/* <button type="button" className="btn btn-secondary btn-lg" onClick={() => {
                        this.setState({ signUpMeng: true })
                    }}>מנהל חדש</button> */}
                </div>
            </div>
        )
    }
}
export default Login;
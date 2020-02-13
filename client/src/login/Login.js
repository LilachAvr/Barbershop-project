import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';
import './Login.css';

class Login extends Component {
    state = { admin: false, signUp: false, signIn: false , signUpMeng:false};
    render() {
        if (this.state.admin) {
            return <Redirect to='/Admin' />
        }
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
                <h1>N.A HairStyle</h1>
                <span>בחירת חשבון</span>
                <br /><br />
                <div id='selectUser'>
                    <button type="button" className="btn btn-secondary btn-lg" onClick={() => {
                        this.setState({ signIn: true })
                    }}>לקוח קיים</button>
                    <button type="button" className="btn btn-secondary btn-lg" onClick={() => {
                        this.setState({ signUp: true })
                    }}>לקוח חדש</button>
                    <button type="button" className="btn btn-secondary btn-lg" onClick={() => {
                        this.setState({ admin: true })
                    }}>מנהל</button>
                    {/* <button type="button" className="btn btn-secondary btn-lg" onClick={() => {
                        this.setState({ signUpMeng: true })
                    }}>מנהל חדש</button> */}
                </div>
            </div>
        )
    }
}
export default Login;
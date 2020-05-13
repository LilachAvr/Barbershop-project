


import React, { Component } from 'react';
import '../admin/BusinessManager/Admin.css';
import { Redirect } from 'react-router-dom';
import axios from 'axios';


class SignIn extends Component {
    state = { phone: '', password: '', flag: false, isError: false }
    login = () => {

        axios.post('users/login', {
            phone: this.state.phone,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName
        }).then(res => {

            //  return res.data
            if (res.status === 200) {
                localStorage.setItem("usertoken", JSON.stringify(res.data));
                
                this.setState({ firstName: res.data })


                this.setState({ flag: true })
                this.props.log(true)

            }
            else {
                console.log(`error code ${res.status}`);
                this.setState({ isError: true });
            }


        })
    }



    render() {
        const disabled = !this.state.phone || !this.state.password;

        return (

            <div>
                {this.state.flag ?
                    <Redirect to='/Home1' />
                    : ''}




              

                {/* <form className='form-manager'> */}
                {/* <div className="form-group"> */}

                <div className="form-style-6">
                    <h1>לקוח קיים</h1>
                    <form>
                        <div>
                            {/* <label htmlFor="exampleInputphone1">phone address</label> */}
                            <input type="number" className="form-control" id="exampleInputphone1" aria-describedby="phoneHelp" placeholder='טלפון נייד'
                                onChange={event => this.setState({ phone: event.target.value })} required />
                            <small id="phoneHelp" className="form-text text-muted">We'll never share your phone with anyone else.</small>
                        </div>
                        <div className="form-group">
                            {/* <label htmlFor="exampleInputPassword1">Password</label> */}
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder='password'
                                onChange={event => this.setState({ password: event.target.value })} />
                        </div>
                        {/* <button type="submit" className="btn btn-primary" onClick={() => this.setState({ flag: true })}>Submit</button> */}
                        <button disabled={disabled} type="button" className="btn btn-outline-secondary"
                            onClick={() => {
                                this.login()
                                // this.props.userName(this.state.firstName)
                            }} >Sign - In</button>

                        {this.state.isError ? <p style={{ color: 'red' }}>login error</p> : ''}

                        <br /> <br />

                        {/* <button type="button" className="link-button" onClick={() => this.setState({ showSomething: true })}> */}
                            <p className='forgotPassword'>forgot your password</p>
                            {/* </button> */}
                        {/* </form> */}

                        {/* </div> */}
                    </form>
                </div>
            </div>
        )
    }

}

export default SignIn;
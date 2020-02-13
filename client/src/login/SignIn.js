


import React, { Component } from 'react';
import '../admin/Admin.css';
import { Redirect } from 'react-router-dom';
import axios from 'axios';



class SignIn extends Component {
    state = { email: '', password: '', flag: false, isError: false }
    login = () => {
        
        axios.post('users/login', {
            email: this.state.email,
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
        const disabled = !this.state.email || !this.state.password;

        return (

            <div>
                {this.state.flag ?
                    <Redirect to='/Home1' />
                    : ''}
                <form className='form-manager'>
                    <div className="form-group">
                        {/* <label htmlFor="exampleInputEmail1">Email address</label> */}
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='email@google.com'
                            onChange={event => this.setState({ email: event.target.value })} required/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
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

                    <button type="button" className="link-button" onClick={() => this.setState({ showSomething: true })}>
                        forgot your password</button>
                </form>

            </div>

        )
    }

}

export default SignIn;


import React, { Component } from 'react';
import './Admin.css'
import { Redirect } from 'react-router-dom';
import axios from 'axios';



class Admin extends Component {
    state = { email: '', password: '', flag: false, isError: false }
    admin = () => {

        axios.post('/userAdmin/login', {
            email: this.state.email,
            password: this.state.password
        }).then(res => {
            console.log(res);
            if (res.status === 200) {

                localStorage.setItem("admintoken", JSON.stringify(res.data));
                // localStorage.setItem('adminEmail',(res.data.email))
                console.log(res.data.email);
                this.setState({ flag: true })

                this.props.userName(res.data)
            }
            else {
                console.log(`error code ${res.status}`);
                this.setState({ isError: true });
            }


        }).catch(err => {
            console.log(err);


            this.setState({ isError: true });
        })

    }



    render() {
        const disabled = !this.state.email || !this.state.password;
        if (this.state.flag) {
            return <Redirect to='/WebManager' />
        }
        return (

            <div>

                <div class="form-style-6">
                    <h1>כניסת מנהל</h1>
                    <form>
                         {/* <form className='form-manager'> */}
                    <div className="form-group"> 
                        {/* <label htmlFor="exampleInputEmail1">Email address</label> */}
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='email@google.com'
                            onChange={event => this.setState({ email: event.target.value })} />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        {/* <label htmlFor="exampleInputPassword1">Password</label> */}
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder='password'
                            onChange={event => this.setState({ password: event.target.value })} />
                    </div>
                    {/* <button type="submit" className="btn btn-primary" onClick={() => this.setState({ flag: true })}>Submit</button> */}
                    <button disabled={disabled} type="button" className="btn btn-primary" onClick={this.admin}>Sign - In</button>

                    {this.state.isError ? <p style={{ color: 'red' }}>login error</p> : ''}

                    <br /> <br />

                    {/* <button type="button" className="link-button" onClick={() => this.setState({ showSomething: true })}> */}
                    <p className='forgotPassword'> forgot your password</p>
                    {/* </button> */}
                    {/* </form> */}
                </form>
            </div>
            </div >

        )
    }
}

export default Admin;
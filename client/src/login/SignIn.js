import React, { Component } from 'react';
import '../admin/BusinessManager/Admin.css';
import { Redirect } from 'react-router-dom';
import axios from 'axios';





class SignIn extends Component {
    state = { phone: '', password: '',firstName:'', flag: false, isError: false }
    // login = () => {

    //     axios.post('users/login', {
    //         phone: this.state.phone,
    //         password: this.state.password,
    //     },
    //         { withCredentials: true }
    //     ).then(res => {
    //         localStorage.setItem('usertoken', res.data.token)
    //         console.log('res from login', res);
    //         if (res.data.status === 'created') {
    //             this.props.handelSuccessfulAuth(res.data)
    //             console.log(res.data);
    //         }
    //     }).catch(

    //         this.setState({ isError: true })
    //     )
    // }

    login = () => {

        axios.post('/users/login', {
            phone: this.state.phone,
            password: this.state.password,
            firstName: this.state.firstName
        }).then(res => {
            console.log(res);
            if (res.status === 200) {

                localStorage.setItem("usertoken", JSON.stringify(res.data));
                // localStorage.setItem('adminEmail',(res.data.email))
                console.log(res.data.phone);
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
        const disabled = !this.state.phone || !this.state.password

        return (

            <div>
                {this.state.flag ?
                    <Redirect to='/Home1' />
                    : ''}




                <div className="form-style-6">
                    <h1>לקוח קיים</h1>
                    <form>
                        <div>
                            <input type="number" className="form-control" id="exampleInputphone1" aria-describedby="phoneHelp" placeholder='טלפון נייד'
                                onChange={event => this.setState({ phone: event.target.value })} required />
                            <small id="phoneHelp" className="form-text text-muted">We'll never share your phone with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder='password'
                                onChange={event => this.setState({ password: event.target.value })} />
                        </div>
                        <button disabled={disabled} type="button" className="btn btn-outline-secondary"
                            onClick={() => {
                                this.login()
                            }}
                        >Sign - In</button>

                        {this.state.isError ? <p style={{ color: 'red' }}>login error</p> : ''}

                        <br /> <br />

                        <p className='forgotPassword'>forgot your password</p>

                    </form>
                </div>
            </div>
        )
    }


}


export default SignIn;
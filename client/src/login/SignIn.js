import React, { Component } from 'react';
import '../admin/BusinessManager/Admin.css';
import { Redirect } from 'react-router-dom';
import axios from 'axios';


class SignIn extends Component {
    state = { phone: '', password: '', flag: false, isError: false, userName: '' }
    token = localStorage.usertoken;
    phone = ''
    userName = ''

    login = () => {

        axios.post('/users/login', {
            phone: this.state.phone,
            password: this.state.password,
        }).then(res => {
            console.log(res.config.data);
           
            
            console.log(res.config.data.split(',')[0].split(':')[1].split('"')[1]);
            this.phone = res.config.data.split(',')[0].split(':')[1].split('"')[1];
            console.log(this.phone);
            if (res.status === 200) {
                localStorage.setItem("usertoken", JSON.stringify(res.data));
                this.setState({ flag: true })
                console.log(this.token)
                // this.props.userName(this.phone)/
                this.token = res.data.token
                console.log(this.token);
                this.props.log(true)
                this.getDetilsFromUserToken(this.token)
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

    getDetilsFromUserToken = () => {
        console.log(this.token);
        
        axios.get('/Users/me', { headers: { 'x-access-token': this.token } })

            .then(res => {

                this.userName = res.data.firstName
                this.phone= res.data.phone
                console.log(this.userName, this.phone);
                this.props.logs(this.userName,this.phone,this.token)
                console.log(this.userName, this.phone);
                
                console.log(res.data);



                // this.userphone = res.data.phone
            }).catch(err => {

                console.log(err);
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
                                // this.getDetilsFromUserToken()
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
import React, { Component } from 'react';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';


class SignUp extends Component {
    state = { file: '', phone: '', password: '', firstName: '', lastName: '', confirmPassword: '', flag: false, isError: false, terms: false }

    register = async () => {


        const res = await axios.post('/users/signUp',
            {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                phone: this.state.phone,
                password: this.state.password,
                // confirmPassword : this.state.confirmPassword
            })
            console.log(res,'wbeufwiefowjfw');
            
            // .then(res => {
            //     console.log(res);
            //     if (res.status === 201) {
            //         this.setState({ flag: true })

            //     }
            //     else {
            //         this.setState({ isError: true })
            //         console.log(`error code ${res.status}`)
            //     }


            // }).catch(err => {
            //     this.setState({ isError: true })
            //     console.log(err)
            // })
    }

    render() {
        console.log(this.state.file);

        const disabled = !this.state.phone || !this.state.password || !this.state.firstName || !this.state.lastName || !this.state.confirmPassword;
        if (this.state.flag) {
            return <Redirect to='/signIn' />
        }

        if (this.state.terms) {
            return <Redirect to='TermsOfUse' />
        }
        return (
            <div id='signup'>
                <div className="form-style-6 " id='signup'>
                    <h1>הרשמה</h1>
                    <form>
                        {/* <form className='form-manager'> */}
                        <Link to='/SignIn' id='exist' onClick={() => this.setState({ flag: true })}>משתמש רשום</Link>

                        <div className="form-group">
                            <input className="form-control" type="text" placeholder="שם פרטי"
                                onChange={event => this.setState({ firstName: event.target.value })} />
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="text" placeholder="שם משפחה"
                                onChange={event => this.setState({ lastName: event.target.value })} />
                        </div>

                        <div className="form-group">
                            <input type="number" className="form-control" id="exampleInputphone1" aria-describedby="phoneHelp" placeholder='טלפון נייד'
                                onChange={event => this.setState({ phone: event.target.value })} />
                        </div>

                        <div className="form-group">
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder='password'
                                onChange={event => this.setState({ password: event.target.value })} />
                        </div>

                        <div className="form-group">
                            <input type="password" className="form-control" id="exampleInputPassword" placeholder='Confirm password'
                                onChange={event => this.setState({ confirmPassword: event.target.value })} />
                        </div>



                        <button disabled={disabled} type="button" className="btn btn-outline-secondary" onClick={this.register}>Register</button>
                        {this.state.isError ? <p style={{ color: 'red' }}>  Register Error</p> : ''}
                        <div>
                            <Link to='/TermsOfUse' id='terms' onClick={() => this.setState({ terms: true })}>תנאי שימוש</Link>
                        </div>

                        {/* </form> */}
                    </form>
                </div>
            </div>
        )
    }
}

export default SignUp;


//לעשות את הכפתורים
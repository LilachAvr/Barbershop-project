import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';


class SignUpAdmin extends Component {
    state = {email:'', password:'',firstName:'', lastName:'',confirmPassword:'',flag:false, isError:false}

    adminSignUp = () =>{
        axios.post('/admin/signUpAdmin',{
            firstName : this.state.firstName,
            lastName : this.state.lastName,
            email : this.state.email,
            password : this.state.password
            // confirmPassword : this.state.confirmPassword
        }).then(res => {
            console.log(res);
            if (res.status === 201) {
                this.setState({flag:true})
            }
            else{
                this.setState({isError:true})
                console.log(`error code ${res.status}`)
            }
            
            
        }).catch(err =>{
            this.setState({isError:true})
            console.log(err)
        })
    }
    render() {
        const disabled = !this.state.email || !this.state.password || !this.state.firstName || !this.state.lastName || !this.state.confirmPassword;
        if (this.state.flag) {
            return <Redirect to='/Admin'/>
        }
        return (
            <div>
                <form className='form-manager'>
                    <div className="form-group">
                        <input class="form-control-lg" type="text" placeholder="שם פרטי" 
                        onChange = {event => this.setState({firstName:event.target.value})}/>
                    </div>
                    <div className="form-group">
                        <input class="form-control-lg" type="text" placeholder="שם משפחה" 
                        onChange = {event => this.setState({lastName:event.target.value})}/>
                         </div>

                    <div className="form-group">
                        <input type="email" className="form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='email@google.com' 
                        onChange = {event => this.setState({email:event.target.value})}/>
                         </div>

                    <div className="form-group">
                        <input type="password" className="form-control-lg" id="exampleInputPassword1" placeholder='password' 
                        onChange = {event => this.setState({password:event.target.value})}/>
                    </div>

                    <div className="form-group">
                        <input type="password" className="form-control-lg" id="exampleInputPassword1" placeholder='Confirm password'
                        onChange = {event => this.setState({confirmPassword:event.target.value})} />
                    </div>
                    
                    <button disabled={disabled} type="button" className="btn btn-primary"  onClick={this.adminSignUp}>Register</button>
                    {this.state.isError ? <p style = {{color:'red'}}>  Register Error</p>  : ''}
                </form>
            </div>
        )
    }
}

export default SignUpAdmin;


//לעשות את הכפתורים
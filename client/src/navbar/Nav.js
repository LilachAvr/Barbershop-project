import React, { Component } from 'react';
// import { Link, withRouter ,BrowserRouter} from 'react-router-dom';
import '../App.css';
import '../home/Home.css';
import { BrowserRouter, Link, Switch, Route, withRouter } from 'react-router-dom';
// import Navbar2 from './Navbar2';
import Home from '../home/Home';
import Home1 from '../home/Home1';
// import Homey from './Homey';
import Gallery from '../gallery/Gallery';
import SettingQueues from '../settingQueue/SettingQueues';
import PriceList from '../priceList/PriceList';
import Products from '../product/Products';
import Admin from '../admin/Admin';
import WebManager from '../login/WebManager';
import Login from '../login/Login';
import SignIn from '../login/SignIn';
import SignUp from '../login/SignUp';
import SignUpAdmin from '../login/signUpAdmin';
import AboutUs from '../home/AboutUs';
import TermsOfUse from '../home/TermsOfUse';
import NotFound from '../notFound/NotFound';


class Nav extends Component {
    state = { firstName: [{ firstName: null, lastName: null }], dateHistory: { date: '', time: '' } }

    

   

    date = (date, time) => {
        let temp = { date, time }
        this.setState({ dateHistory: temp })
    }

    username = (name) => {
        let tmp = [this.state.firstName]
        let tempUser = { name: name.firstName, lastname: name.lastName }

        tmp.push(tempUser)
        this.setState({ firstName: tmp })
    }

    logOUt() {
        localStorage.removeItem('usertoken')
        localStorage.removeItem('admintoken')
        this.props.history.push('/')
    }
    loginRegLink = (
        <div>
            <div className="Navbar">
                <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
                    <div>
                        <span className="nav-link" style={{ color: 'white' }}><i className="fa fa-clock"> 11:00 - 20:00 </i> | <i className="fas fa-mobile-alt"> 050-1234567</i>
                            <a className='location' href={"https://www.google.com/maps/?q=הרצל73,ראשוןלציון"} target="blank"><img className='iconLocation' alt='googleMap' src='https://image.flaticon.com/icons/svg/888/888856.svg' /></a>
                            <a className='location' href={"https://www.instagram.com/naftali_barbershop/"} target="blank"><img className='iconLocation' alt='instagram' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/599px-Instagram_icon.png' /></a>
                        </span>
                    </div>
                    <div className='links'>
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <Link to='/'>בית</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/Gallery'>גלריה</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/PriceList'>מחירון</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/Products'>המוצרים שלנו</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        {/* <Link to='/Login' >{this.state.firstName.map((name, i) =>
                        <span key={i}>{name.name ? name.name + ',שלום' : ',כניסה'}</span>)}</Link> */}
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/SignUp" className="nav-link"> הרשמה </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Login" className="nav-link">כניסה</Link>
                            </li>

                        </ul>
                    </div>
                </nav>
            </div>
            {/* <div className='Home'>
                <div className='container'>
                    <h1>More than just a haircut...</h1>
                    <button type="button" className="btn btn-outline-warning">עוד עלינו</button>
                    <button type="button" className="btn btn-outline-warning" onClick={() => this.setState({ flag: true })}>לקביעת תור</button>
                </div>
            </div> */}
        </div>
    )
    userLink = (
        <div>
            <div className="Navbar">
                <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
                    <div>
                        <span className="nav-link" style={{ color: 'white' }}><i className="fa fa-clock"> 11:00 - 20:00 </i> | <i className="fas fa-mobile-alt"> 050 - 1234567</i>
                            <a className='location' href={"https://www.google.com/maps/?q=הרצל73,ראשוןלציון"} target="blank"><img className='iconLocation' alt='googleMap' src='https://image.flaticon.com/icons/svg/888/888856.svg' /></a>
                            <a className='location' href={"https://www.instagram.com/naftali_barbershop/"} target="blank"><img className='iconLocation' alt='instagram' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/599px-Instagram_icon.png' /></a>
                        </span>
                    </div>
                    <div className='links'>
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <Link to='/Home1'>בית</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/Gallery'>גלריה</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/SettingQueues'>קביעת תורים</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/PriceList'>מחירון</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/Products'>המוצרים שלנו</Link>
                            </li>
                        </ul>
                    </div>
                    <div>


                        <ul className="navbar-nav">
                  
                            <li className="nav-item">
                               
                                <Link to='' onClick={this.logOUt.bind(this)} className="nav-link"> יציאה</Link>
                  

                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

        </div>
    )
    adminLink = (
        <div>
            <div className="Navbar">
                <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
                    <div>
                        <span className="nav-link" style={{ color: 'white' }}><i className="fa fa-clock"> 11:00 - 20:00 </i> | <i className="fas fa-mobile-alt"> 050 - 1234567</i>
                            <a className='location' href={"https://www.google.com/maps/?q=הרצל73,ראשוןלציון"} target="blank"><img className='iconLocation' alt='googleMap' src='https://image.flaticon.com/icons/svg/888/888856.svg' /></a>
                            <a className='location' href={"https://www.instagram.com/naftali_barbershop/"} target="blank"><img className='iconLocation' alt='instagram' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/599px-Instagram_icon.png' /></a>
                        </span>
                    </div>
                    <div className='links'>
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <Link to='/Home1'>בית</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/Gallery'>גלריה</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/SettingQueues'>קביעת תורים</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/PriceList'>מחירון</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/Products'>המוצרים שלנו</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/WebManager'>תורים שנקבעו</Link>
                            </li>
                        </ul>
                    </div>
                    <div>

                        <ul className="navbar-nav">
                            {/* <li className="nav-item">
                                <Link to="/SignIn" className="nav-link">User</Link>
                            </li> */}
                            <li className="nav-item">
                                {/* <a href="" onClick={this.logOUt.bind(this)} className="nav-link"> יציאה</a> */}
                                <Link to='' onClick={this.logOUt.bind(this)} className="nav-link"> יציאה</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            {/* <div className='Home'>
                <div className='container'>
                    <h1>More than just a haircut...</h1>
                    <button type="button" className="btn btn-outline-warning">עוד עלינו</button>
                    <button type="button" className="btn btn-outline-warning" onClick={() => this.setState({ userFlag: true })}>לקביעת תור</button>
                </div>
            </div> */}
        </div>
    )
    render() {
        return (
            <BrowserRouter>
                {this.user()}
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/Home1' component={Home1} />
                    <Route exact path='/Gallery' component={Gallery} />
                    <Route exact path='/SettingQueues' render={() => <SettingQueues username={this.state.firstName} select={this.date} />} />
                    <Route exact path='/PriceList' component={PriceList} />
                    <Route exact path='/Products' component={Products} />
                    <Route exact path='/SignIn' render={() => <SignIn userName={this.username} log={this.props.log}/>} />
                    <Route exact path='/SignUp' component={SignUp} />
                    <Route exact path='/Admin' render={() => <Admin userName={this.username} />} />
                    <Route exact path='/signUpAdmin' component={SignUpAdmin} />
                    <Route exact path='/WebManager' render={() => <WebManager username={this.state.firstName} dateHistory={this.state.dateHistory} />} />
                    <Route exact path='/Login' component={Login} />
                    <Route exact path='/AboutUs' component={AboutUs} />
                    <Route exact path='/TermsOfUse' component={TermsOfUse} />
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        )

    }

    user = () => {
        if (localStorage.usertoken) {
            return this.userLink
        }
        else if (localStorage.admintoken) {
            return this.adminLink
        }
        else {
            return this.loginRegLink
        }
    }
    // componentDidUpdate(){
    //   userType = localStorage.usertoken.split(',')[1].split(':')[1]
    // }
}

export default withRouter(Nav)
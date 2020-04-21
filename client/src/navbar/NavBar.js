import React, { Component } from 'react';
// import { Link, withRouter ,BrowserRouter} from 'react-router-dom';
import '../App.css';
import '../home/Home.css';
import { BrowserRouter, Link, Switch, Route, withRouter } from 'react-router-dom';
import { Navbar, Form, Nav } from 'react-bootstrap';
// import Navbar2 from './Navbar2';
import Home from '../home/Home';
import Home1 from '../home/Home1';
// import Homey from './Homey';
// import Gallery from '../gallery/Gallery';
import SettingQueues from '../settingQueue/SettingQueues';
import PriceList from '../priceList/PriceList';
import Products from '../product/Products';
import Admin from '../admin/Admin';
import ClientQueues from '../admin/clientQueues';
import Login from '../login/Login';
import SignIn from '../login/SignIn';
import SignUp from '../login/SignUp';
import SignUpAdmin from '../login/signUpAdmin';
import AboutUs from '../home/AboutUs';
import TermsOfUse from '../home/TermsOfUse';
import WebManager from '../admin/WebManager';
import UpdateActivityTime from '../admin/UpdateActivityTime';
import SettingQAdmin from '../admin/SettingQAdmin';
import UpdatePriceList from '../admin/UpdatePriceList';

import NotFound from '../notFound/NotFound';
import axios from 'axios';


class NavBar extends Component {
    state = { firstName: [{ firstName: null, lastName: null }], dateHistory: { date: '', time: '' } ,open:'', close:''}
    d = new Date();
    days = ['ראשון','שני','שלישי','רביעי','חמישי','שישי','שבת']
    currnetDay = this.d.getDay();
    open;


    getDay = () => {
        axios.get('/adminUpdates')
            .then((res) => {
                // handle success
                // console.log(this.days[this.d.getDay()]);
                // console.log(res.data[this.d.getDay()].day);
                if (this.days[this.d.getDay(this.open)] === res.data[this.currnetDay].day) {
                    console.log(res.data[this.currnetDay].timeOpen);
                    this.open = res.data[this.currnetDay].timeOpen; 
                    this.close= res.data[this.currnetDay].timeClose;
                    
                    this.setState({
                        ...this.state,
                        open : res.data[this.currnetDay].timeOpen
                    })
                    this.setState({
                        ...this.state,
                        close : res.data[this.currnetDay].timeClose
                    })
                    // this.setState({close : res.data[this.currnetDay].timeClose})
                }
                    
                
                // console.log(this.state.open, 'opeeeen');
                // console.log('oppppeeen');
                
                // }
                // // this.setState({ allQueues: res.data })
                // else{
                //     console.log("error");
                    
                // }
                
            })
            .catch((err) => {
                // handle error
                console.log(err);
            })
        // if (this.d.getDate()) {
        //     return 
        // }
    }

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
        <Navbar bg="transparent" expand="lg">
            <Navbar.Brand href="#home">
                <span className="nav-link" style={{ color: 'white' }}><i className="fa fa-clock"> {this.open} - {this.close} </i> | <i className="fas fa-mobile-alt"> 050-1234567</i>
                </span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link to='/'>בית</Link>
                    {/* <Link to='/Gallery'>גלריה</Link> */}
                    <Link to='/PriceList'>מחירון</Link>
                    <Link to='/Products'>המוצרים שלנו</Link>
                </Nav>
                <Form inline>
                    <Link to="/SignUp" className="nav-link"> הרשמה </Link>
                    <Link to="/Login" className="nav-link">כניסה</Link>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
    userLink = (

        <Navbar bg="transparent" expand="lg">
            <Navbar.Brand href="#home">
                <span className="nav-link" style={{ color: 'white' }}>{this.open}<i className="fa fa-clock">  - {this.close} </i> | <i className="fas fa-mobile-alt"> 050-1234567</i>
                </span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link to='/Home1'>בית</Link>
                    {/* <Link to='/Gallery'>גלריה</Link> */}
                    <Link to='/SettingQueues'>קביעת תורים</Link>
                    <Link to='/PriceList'>מחירון</Link>
                    <Link to='/Products'>המוצרים שלנו</Link>
                </Nav>
                <Form inline>
                    <Link to='' onClick={this.logOUt.bind(this)} className="nav-link"> יציאה</Link>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
    adminLink = (
        <Navbar bg="transparent" expand="lg">
            <Navbar.Brand href="#home">
                {/* <span>{console.log(this.getDay(this.open))}gugui</span> */}
                {/* <span>{console.log(this.timeOpen)}</span> */}
                <span className="nav-link" style={{ color: 'white' }}><i className="fa fa-clock">  </i><span> 9:00-20:00</span> | <i className="fas fa-mobile-alt"> 050-1234567</i>
                </span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link to='/WebManager'>בית</Link>
                    {/* <Link to='/Gallery'>גלריה</Link> */}
                    <Link to='/SettingQAdmin'>קביעת תורים</Link>
                    <Link to='/PriceList'>מחירון</Link>
                    <Link to='/Products'>המוצרים שלנו</Link>
                    <Link to='/ClientQueues'>תורים שנקבעו</Link>
                </Nav>
                <Form inline>
                    <Link to='' onClick={this.logOUt.bind(this)} className="nav-link"> יציאה</Link>
                </Form>
            </Navbar.Collapse>
        </Navbar>


    )
    render() {
        // console.log(this.state.open);
       
        
        console.log('render');
        return (
            <BrowserRouter>
                {this.user()}
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/Home1' component={Home1} />
                    {/* <Route exact path='/Gallery' component={Gallery} /> */}
                    <Route exact path='/SettingQueues' render={() => <SettingQueues username={this.state.firstName} select={this.date} />} />
                    <Route exact path='/PriceList' component={PriceList} />
                    <Route exact path='/Products' component={Products} />
                    <Route exact path='/SignIn' render={() => <SignIn userName={this.username} log={this.props.log} />} />
                    <Route exact path='/SignUp' component={SignUp} />
                    <Route exact path='/Admin' render={() => <Admin userName={this.username} />} />
                    <Route exact path='/signUpAdmin' component={SignUpAdmin} />
                    <Route exact path='/ClientQueues' render={() => <ClientQueues username={this.state.firstName} dateHistory={this.state.dateHistory} />} />
                    <Route exact path='/Login' component={Login} />
                    <Route exact path='/AboutUs' component={AboutUs} />
                    <Route exact path='/TermsOfUse' component={TermsOfUse} />
                    <Route exact path='/WebManager' component={WebManager} />
                    <Route exact path='/UpdateActivityTime' render={() => <UpdateActivityTime />} />
                    <Route exact path='/SettingQAdmin' render={() => <SettingQAdmin username={this.state.firstName} select={this.date} />} />
                    <Route exact path='/UpdatePriceList' component={UpdatePriceList} />

                    {/* <Route exact path='/SettingQAdmin' component={SettingQAdmin} /> */}
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

    componentDidMount() {
        // this.getDay();
        
        console.log('didMount');
    }
    // componentDidUpdate(){
    //   userType = localStorage.usertoken.split(',')[1].split(':')[1]
    // }
}

export default withRouter(NavBar)
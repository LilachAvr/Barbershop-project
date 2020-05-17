import React, { Component } from 'react';
import '../App.css';
import '../home/Home.css';
import { BrowserRouter, Link, Switch, Route, withRouter } from 'react-router-dom';
import { Navbar, Form, Nav } from 'react-bootstrap';
import Home from '../home/Home';
import Home1 from '../home/Home1';
import SettingQueues from '../settingQueue/SettingQueues';
import PriceList from '../priceList/PriceList';
import Products from '../product/Products';
import Admin from '../admin/BusinessManager/Admin';
import ClientQueues from '../admin/BusinessManager/clientQueues';
import ClientQueuesToEmployee from '../admin/Employee/ClientQueuesToEmployee';
import Gallery from '../gallery/Gallery';
import Login from '../login/Login';
import SignIn from '../login/SignIn';
import SignUp from '../login/SignUp';
import SignUpAdmin from '../login/signUpAdmin';
import AboutUs from '../home/AboutUs';
import TermsOfUse from '../home/TermsOfUse';
import WebManager from '../admin/BusinessManager/WebManager';
import UpdateActivityTime from '../admin/BusinessManager/UpdateActivityTime';
import SettingQAdmin from '../admin/BusinessManager/SettingQAdmin';
import UpdatePriceList from '../admin/BusinessManager/UpdatePriceList';
import ReactUploadImage from '../admin/BusinessManager/UploadImages';
import Employee from '../admin/Employee/Employee';
import WebEmployee from '../admin/Employee/WebEmployee';
// import Cookies from 'js-cookie';
import NotFound from '../notFound/NotFound';



class NavBar extends Component {
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
        // Cookies.remove('usertoken')
        localStorage.removeItem('usertoken')
        // Cookies.remove('admintoken')
        localStorage.removeItem('admintoken')
        localStorage.removeItem('employeetoken')
        this.props.history.push('/')
    }
    loginRegLink = (     
        <Navbar bg="transparent" expand="lg">
            <Navbar.Brand href="#home">
                <span className="nav-link" style={{ color: 'white' }}><i className="fa fa-clock"> 9:00-20:00</i> | <i className="fas fa-mobile-alt"> 050-1234567</i>
                </span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link to='/'>בית</Link>
                    <Link to='/Gallery'>גלריה</Link>
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
                <span className="nav-link" style={{ color: 'white' }}><i className="fa fa-clock"> 9:00-20:00</i> | <i className="fas fa-mobile-alt"> 050-1234567</i>
                </span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link to='/Home1'>בית</Link>
                    <Link to='/Gallery'>גלריה</Link>
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
                <span className="nav-link" style={{ color: 'white' }}><i className="fa fa-clock"> 9:00-20:00</i> | <i className="fas fa-mobile-alt"> 050-1234567</i>
                </span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link to='/WebManager'>בית</Link>
                    <Link to='/Gallery'>גלריה</Link>
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

    employeeLink = (
        <Navbar bg="transparent" expand="lg">
            <Navbar.Brand href="#home">
                <span className="nav-link" style={{ color: 'white' }}><i className="fa fa-clock"> 9:00-20:00</i> | <i className="fas fa-mobile-alt"> 050-1234567</i>
                </span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link to='/WebManager'>בית</Link>
                    <Link to='/Gallery'>גלריה</Link>
                    <Link to='/SettingQAdmin'>קביעת תורים</Link>
                    <Link to='/PriceList'>מחירון</Link>
                    <Link to='/Products'>המוצרים שלנו</Link>
                    <Link to='/ClientQueuesToEmployee'>תורים שנקבעו</Link>
                </Nav>
                <Form inline>
                    <Link to='' onClick={this.logOUt.bind(this)} className="nav-link"> יציאה</Link>
                </Form>
            </Navbar.Collapse>
        </Navbar>


    )

    render() {
     console.log('render');
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
                    <Route exact path='/SignIn' render={() => <SignIn userName={this.username} log={this.props.log} />} />
                    <Route exact path='/SignUp' component={SignUp} />
                    <Route exact path='/Admin' render={() => <Admin userName={this.username} />} />
                    <Route exact path='/signUpAdmin' component={SignUpAdmin} />
                    <Route exact path='/ClientQueues' render={() => <ClientQueues username={this.state.firstName} dateHistory={this.state.dateHistory} />} />
                    <Route exact path='/ClientQueuesToEmployee' render={() => <ClientQueuesToEmployee username={this.state.firstName} dateHistory={this.state.dateHistory} />} />
                    <Route exact path='/Login' component={Login} />
                    <Route exact path='/AboutUs' component={AboutUs} />
                    <Route exact path='/TermsOfUse' component={TermsOfUse} />
                    <Route exact path='/WebManager' component={WebManager} />
                    <Route exact path='/WebEmployee' component={WebEmployee} />
                    <Route exact path='/UpdateActivityTime' render={() => <UpdateActivityTime />} />
                    <Route exact path='/SettingQAdmin' render={() => <SettingQAdmin username={this.state.firstName} select={this.date} />} />
                    <Route exact path='/UpdatePriceList' component={UpdatePriceList} />
                    <Route exact path='/UploadImages' component={ReactUploadImage}/>
                    <Route exact path='/Employee' render={() => <Employee userName={this.username}/>}/>
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        )

    }

    checkAuth = () => {

    }

    user = () => {
        if (localStorage.usertoken) {
            return this.userLink
        }
        else if (localStorage.admintoken) {
            return this.adminLink
        }
        else if (localStorage.employeetoken) {
            return this.employeeLink
        }
        else {
            return this.loginRegLink
        }
    }


}

export default withRouter(NavBar)
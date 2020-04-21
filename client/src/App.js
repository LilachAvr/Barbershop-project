import React, { Component } from 'react';
import './App.css';
// import {Inject,ScheduleComponent,Day,Week,WorkWeek,Month,Agenda} from '@syncfusion/ej2-react-schedule';
// import Navbar from './Navbar';

// import Navbar2 from './navbar1+2/Navbar2';
// import axios from 'axios';
// import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import NavBar from './navbar/NavBar';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './footer/footer';
// import Nav from './navbar1+2/Nav';

class App extends Component {
  state = { isLogged: false }

  logged = (boolean) => {
    this.setState({ isLogged: boolean })
  }


  render() {

    return (
      <BrowserRouter>
        <div className="App">
          
          <NavBar log={this.logged} />

          <Footer />

        </div>
      </BrowserRouter>
    )
  }
}

export default App;


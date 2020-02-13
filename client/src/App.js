import React, { Component } from 'react';
import './App.css';
// import {Inject,ScheduleComponent,Day,Week,WorkWeek,Month,Agenda} from '@syncfusion/ej2-react-schedule';
// import Navbar from './Navbar';

// import Navbar2 from './navbar1+2/Navbar2';
// import axios from 'axios';
// import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Nav from './navbar/Nav';
import { BrowserRouter } from 'react-router-dom';
// import Nav from './navbar1+2/Nav';

class App extends Component {
state={isLogged:false}

logged =(boolean)=>{
  this.setState({isLogged:boolean})
}


  render() {

    return (
<BrowserRouter>
      <div className="App">

        <Nav log={this.logged}/>
   

      </div>
</BrowserRouter>
    )
  }
}

export default App;


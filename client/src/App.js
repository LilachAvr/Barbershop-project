import React, { Component } from 'react';
import './App.css';
import NavBar from './navbar/NavBar';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './footer/footer';



class App extends Component {
  state = { isLogged: false ,}

  logged = (boolean) => {
    this.setState({ isLogged: boolean })
  }


  render() {

    return (
      <BrowserRouter>
        <div className="App">

          <NavBar log={this.logged} />
          <img className='rington' src='noun_ringtone_682260.png' alt=''/>
          <Footer />

        </div>
      </BrowserRouter>
    )
  }
}

export default App;


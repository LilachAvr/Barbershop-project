import React, { Component } from 'react';
import './Home.css'
import { Redirect } from 'react-router-dom';

class Home extends Component {
    state = { flag: false ,aboutUs:false,terms:false}
    render() {

        if (this.state.flag) {
            return <Redirect to='/SignUp' />
        }
        if (this.state.aboutUs) {
            return <Redirect to ='/AboutUs'/>
        }

        return (
            <div className='Home'>

                <div className='container'>
         
                    <h1>More than just a haircut...</h1>
                    <div id='buttonDetils'>
                    <button type="button" className="btn btn-outline-warning"  onClick={() => this.setState({ aboutUs: true })}>עוד עלינו</button>
                    <button type="button" className="btn btn-outline-warning" onClick={() => this.setState({ flag: true })}>לקביעת תור</button>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Home;
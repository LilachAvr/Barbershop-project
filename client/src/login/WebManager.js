import React, { Component } from 'react';
import './webManager.css';
import axios from 'axios';

class WebManager extends Component {

    state = { allQueues: [], filterQueues: [] }
    dateValue = '';



    componentDidMount() {
        axios.get('/queues/scheduledCustomerQueues')
            .then((res) => {
                // handle success
                console.log(res);
                this.setState({ allQueues: res.data })
            })
            .catch((err) => {
                // handle error
                console.log(err);
            })
    }

    render() {
        return (
            <div className='listQueues'>

                <input type='date' onChange={(e) => {
                    console.log(e.target.value, 'shdcdf');

                    this.dateValue = e.target.value
                }} />
                <button onClick={() => {
                    this.filt()
                    console.log(this.dateValue);

                }}>הצג</button>

                <h1>רשימת תורים</h1>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">שם לקוח</th>
                            <th scope="col">סוג תספורת</th>
                            <th scope="col">שעה</th>
                            <th scope="col">תאריך</th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.state.filterQueues.map((q, i) => <tr key={i}>

                            <td>{q.userName}</td>
                            <td>{q.style}</td>
                            <td>{q.time}</td>
                            <td>{q.date}</td>
                        </tr>)}

                    </tbody>
                </table>
            </div>
        )
    }

    filt = () => {
        
        if (this.dateValue ==='') {
            this.setState({filterQueues : this.state.allQueues})
        }else{
            const filtered = this.state.allQueues.filter((q, i) => q.date === this.dateValue);
            
        this.setState({ filterQueues: filtered })
        }
        
    }
}

export default WebManager;


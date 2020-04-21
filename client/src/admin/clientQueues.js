import React, { Component } from 'react';
import './clientQueues.css';
import axios from 'axios';

class ClientQueues extends Component {

    state = { allQueues: [], filterQueues: [] }
    dateValue = '';

    deleteQueue = (id) => {
        console.log(this.id);

        axios.delete(`/queues/scheduledCustomerQueues/${id}`)
            // , this.data)

            .then(res => {
                if (res.status === 200) {
                    console.log(res.data);
                    console.log('התור נמחק !!!');
                    alert('התור נמחק בהצלחה')

                }
                else {
                    // this.setState({ isError: true })

                    console.log(`error code ${res.status}`)
                }


            }).catch(err => {

                console.log(err)
            })
    }

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
                            <th scope="col">הסרה</th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.state.filterQueues.map((q, i) => <tr key={i}>

                            <td>{q.userName}</td>
                            <td>{q.style}</td>
                            <td>{q.time}</td>
                            <td>{q.date}</td>
                            <td ><i className="fa fa-trash-alt" onClick={() => this.deleteQueue(q._id)}></i></td>
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

export default ClientQueues;


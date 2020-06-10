import React, { Component } from 'react';
import axios from 'axios';

class S extends Component {
    state = {
        selectValue: '',
        times: [{ time: '11:00' }, { time: '12:00' }, { time: '13:00' }, { time: '14:00' }, { time: '15:00' }, { time: '16:00' }],
        allQueues:[]
    }
    selectValue = ''
    chooseBarber = ''


    getQueues = () => {
        // this.getDetilsFromUserToken();
        axios.get('/queues/scheduledCustomerQueues')
            .then((res) => {


                this.setState({ allQueues: res.data })
                console.log(this.state.allQueues);
                
                for (let i = 0; i < this.state.allQueues.length; i++) {
                    const element = this.state.allQueues[i].date;
                    console.log(element);
                    console.log(this.state.selectValue);
                    
                    
                }

                // console.log(res.data.time);

                // for (let i = 0; i < this.state.allQueues.length; i++) {
                //     const element = this.state.allQueues[i];
                //     console.log(element.time);
                //     console.log(element.date);
                //     let temp = [...this.state.timesList]
                //     temp.push({ date: element.date, time: element.time })
                //     this.setState({ timesList: temp })
                //     console.log(this.state.timesList);

                // }

            })
            .catch((err) => { console.log(err); })
    }


    render() {
        return (
            <div>


                {this.renderDate()}

                <div>
                    {this.renderTime(this.state.selectValue)}
                </div>
            </div>
        );
    }
    renderDate() {
        return (
            <div className="form-group top-margin-small">
                <input id='calendar' type="date" name="date" onChange={(e) => this.setState({ selectValue: e.target.value })} />
            </div>
            
        );
        
    }
    renderTime(selectValue) {
        if (selectValue) {
            return (
                <div className="form-group top-margin-small">
                    <select className="card-selector form-control"
                        onChange={(e) => this.setState({ selectValue: e.target.value })}>
                        {this.state.times.map((time, i) =>

                            <option key={i} > {time.time} </option>

                        )}
                    </select>
                </div>
            );
        }
        else {
            console.log('error');

        }
    }

    renderBareber(selectValue) {
        if (selectValue) {
            return (
                <div className="form-group top-margin-small">
                    <select onChange={(e) => { this.chooseBarber = e.target.value; }}>
                        <option > בחר ספר</option>
                        <option >worker</option>
                        <option >admin</option>
                    </select>
                </div>
            );
        }
        else {
            console.log('error');

        }
    }
}

export default S;


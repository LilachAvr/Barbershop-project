import React, { Component } from 'react';
// import Calendar from 'react-calendar';
import axios from 'axios';
import './SettingQueues.css';


class SettingQueues extends Component {

    state = { flag: false, added: false, dateValue: '', selectValue: '', selectStyle: '', allQueues: [], filterQueues: [], alertError: false, alertSuccesss: false }
    id = '';
    dateValue = ''
    selectValue = ''
    selectStyle = ''
    dateVal = ''
    userphone = localStorage.usertoken.split(',')[3].split(':')[1]



    scheduledCustomerQueues = () => {

        this.setState({
            dateValue: this.dateValue,
            selectValue: this.selectValue,
            selectStyle: this.selectStyle
        })

        console.log(localStorage.usertoken.split(',')[1].split(':')[1]);
        const data = {
            time: this.dateValue,
            date: this.selectValue,
            style: this.selectStyle,
            userName: localStorage.usertoken.split(',')[1].split(':')[1],
            phone: this.userphone
        }
        console.log(data);
        console.log(data.id);


        //  console.log(this.state.dateValue,this.state.selectValue,this.state.name);   
        axios.post('/queues/scheduledCustomerQueues',

            data
        ).then(res => {


            if (res.status === 201) {
                console.log(res.data, 'hdwbrfkvjwnlgvbakgblrgnrwlgkrwnglr!!!!!!!!!!');
                console.log(res.data._id, 'jdjdksjkjksdrgdf');
                this.id = res.data._id;
                let tmp = [...this.state.allQueues]
                tmp.push(res.data)
                this.setState({ allQueues: tmp })
                // this.setState({ flag: true })
                // alert('התור נקבע בהצלחה')
                this.setState({ alertSuccess: true })
            }
            else {
                // this.setState({ isError: true })

                console.log(`error code ${res.status}`)
            }


        }).catch(err => {

            this.setState({ alertError: true })

            // alert('התור קיים, אנא בחר תור חדש')
            console.log(err)       // this.setState({ isError: true })

        })
    }

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
        this.filt();
    }

    getQueues = () => {
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
console.log(this.selectValue);

// const disable = !this.selectStyle || !this.dateValue || !this.selectValue;
        let x;
        return (
            <div>

                {this.state.alertError ? <div class="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>התור קיים!</strong>  אנא בחר תור חדש.
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close" onClick={() =>
                        this.setState({ alertError: !this.state.alertError })}>
                        <span id='exit' aria-hidden="true">&times;</span>
                    </button>
                </div> : null}

                {this.state.alertSuccess ? <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>התור נקבע בהצלחה!</strong>
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close" onClick={() =>
                        this.setState({ alertSuccess: !this.state.alertSuccess })}>
                        <span id='exit' aria-hidden="true">&times;</span>
                    </button>
                </div> : null}


                <div className='settingQ'>

                    <div>
                        <input type="date" name="date" onChange={(e) => { this.selectValue = e.target.value; }} />



                        <select onChange={(e) => { this.selectStyle = e.target.value }}>
                            <option ></option>
                            <option>תספורת רגילה</option>
                            <option>תספורת+צבע</option> 
                            <option>תספורת+החלקה+צבע</option>
                            <option>תספורת+החלקה</option>
                            <option>תספורת+ציורים</option>


                        </select>



                        <select onChange={(e) => {
                            // this.state.dateValue = e.target.value;
                            // this.setState({ dateValue: e.target.value })
                            this.dateValue = e.target.value

                        }}>

                            <option></option>
                            <option>11:00</option>
                            <option>11:20</option>
                            <option>11:40</option>

                            <option>12:00</option>
                            <option>12:20</option>
                            <option>12:40</option>

                            <option>13:00</option>
                            <option>13:20</option>
                            <option>13:40</option>

                            <option>14:00</option>
                            <option>14:20</option>
                            <option>14:40</option>

                            <option>15:00</option>
                            <option>15:20</option>
                            <option>15:40</option>

                            <option>16:00</option>
                            <option>16:20</option>
                            <option>16:40</option>

                            <option>17:00</option>
                            <option>17:20</option>
                            <option>17:40</option>

                            <option>18:00</option>
                            <option>18:20</option>
                            <option>18:40</option>

                            <option>19:00</option>
                            <option>19:20</option>
                            <option>19:40</option>

                            <option>20:00</option>
                            <option>20:20</option>
                            <option>20:40</option>
                            <option>21:00</option>

                        </select>
                    </div>

                    <div>
                        <button type='button' onClick={
                            this.scheduledCustomerQueues}>קבע תור</button>

                    </div>
                </div>
                <div className='listQueues'>

                    <input type='date' onChange={(e) => {
                        console.log(e.target.value, 'shdcdf');

                        x = e.target.value
                        console.log(x);
                    }} />
                    <button onClick={() => {
                        this.dateVal = x;
                        this.filt()

                        console.log(this.dateVal);


                    }}>הצג</button>

                    <h1>רשימת תורים</h1>
                    <div className='arrayQ'>
                    <table className="table">
                        {/* <div id='headerTable'> */}
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">שם לקוח</th>
                                <th scope="col">מייל</th>
                                <th scope="col">סוג תספורת</th>
                                <th scope="col">שעה</th>
                                <th scope="col">תאריך</th>
                                <th scope="col">הסרה</th>
                            </tr>
                        </thead>
                        {/* </div> */}
                        <tbody>
                            
                                {this.state.filterQueues.map((q, i) => <tr key={i}>

                                    <td>{q.userName}</td>
                                    <td>{q.phone}</td>
                                    <td>{q.style}</td>
                                    <td>{q.time}</td>
                                    <td>{q.date}</td>
                                    <td ><i className="fa fa-trash-alt" onClick={() => this.deleteQueue(q._id)}></i></td>
                                    {/* <td> <button type="button" className="btn btn-dark" onClick={this.deleteQueue()}>Delete</button></td> */}
                                </tr>)}
                            
                        </tbody>
                        
                    </table>
                    </div>
                </div>

            </div>
        )
    }

    filt = () => {
        // if (localStorage.usertoken === q.userName) {

        // console.log(localStorage.usertoken.split(',')[3].split(':')[1]);
        this.getQueues();

        const filterWithphone = this.state.allQueues.filter((u, index) => u.phone === this.userphone)

        console.log(filterWithphone);
        // if (filterWithphone) {
        console.log(this.dateVal);

        if (this.dateVal === undefined || this.dateVal === "") {
            this.setState({ filterQueues: filterWithphone })


        } else {

            let strdate = this.dateVal.toString();
            console.log(strdate);
            const filtered = filterWithphone.filter((q, i) => q.date === strdate);
            console.log(filtered);

            this.setState({ filterQueues: filtered })
        }
        // }
        // else {
        //     alert('לא קיימים תורים עתידיים')
        // }

    }


}




export default SettingQueues;
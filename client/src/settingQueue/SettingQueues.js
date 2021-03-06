/* eslint-disable no-sequences */
import React, { Component } from 'react';
import axios from 'axios';
import './SettingQueues.css';
import moment from 'moment';

class SettingQueues extends Component {

    state = { flag: false, added: false, dateValue: '', selectValue: new Date(), selectStyle: '', chooseBarber: '', allQueues: [], filterQueues: [], alertError: false, alertSuccesss: false, showUpdateTimes: [], times: [{ time: '11:00' }, { time: '12:00' }, { time: '13:00' }, { time: '14:00' }, { time: '15:00' }, { time: '16:00' }] }
    id = '';
    dateValue = ''
    selectValue = ''
    selectStyle = ''
    dateVal = ''
    chooseBarber = ''
    userphone = localStorage.usertoken.split(',')[3].split(':')[1]

    times = [{ time: '11:00' }, { time: '12:00' }, { time: '13:00' }, { time: '14:00' }, { time: '15:00' }, { time: '16:00' }];




    today = new Date();
    dd = this.today.getDate();
    mm = this.today.getMonth() + 1; //January is 0!
    yyyy = this.today.getFullYear();
    checkDateX(x) {
        if (x < 10) {
            return x = '0' + x
        }
        else {
            return x
        }

    }

    maxdays = moment().add(14, 'days').calendar();
    newformat = moment(this.maxdays).format('YYYY-MM-DD');


    // newform = moment().format('YYYY-MM-DD');
    today1 = this.yyyy + '-' + this.checkDateX(this.mm) + '-' + this.checkDateX(this.dd);

    // getCurrentDate = (date) => {
    //     return new Promise((resolve, reject) => {
    //         let arrayNew = [];
    //         let clients = this.state.allQueues;
    //         for (let i = 0; i < clients.length; i++) {
    //             const user = clients[i];
    //             if (user.date === date) {
    //                 arrayNew.push(user);
    //             }
    //         }

    //         if (arrayNew.length) {
    //             resolve(arrayNew);
    //         } else {
    //             reject(Error("Promise rejected"));
    //         }
    //     });
    // }

    // allTimesUser = (date) => {

    //     let arr = this.times;

    //   this.getCurrentDate(date).then(function (result) {

    //         console.log(result); // "Promise resolved successfully"
    //         for (let i = 0; i < result.length; i++) {
    //             const user = result[i];
    //             for (let j = 0; j < arr.length; j++) {
    //                 const time = arr[j];
    //                 if (time.time === user.time) {
    //                     arr.splice(j, 1);   
    //                    return arr.splice(j, 1);;
    //                 }
    //             }
    //         }
    //         console.log(arr);

    //         return arr;
    //     }, err => {
    //         console.log(err); // Error: "Promise rejected"

    //     });


    // }


    scheduledCustomerQueues = () => {

        this.setState({
            dateValue: this.dateValue,
            selectValue: this.selectValue,
            selectStyle: this.selectStyle,
            chooseBarber: this.chooseBarber
        })

        const data = {
            time: this.dateValue,
            date: this.selectValue,
            style: this.selectStyle,
            userName: localStorage.usertoken.split(',')[1].split(':')[1].split('"')[1],
            phone: this.userphone,
            barber: this.chooseBarber
        }
        console.log(data);

        axios.post('/queues/scheduledCustomerQueues',

            data
        ).then(res => {


            if (res.status === 201) {
                this.id = res.data._id;
                let tmp = [...this.state.allQueues]
                tmp.push(res.data)
                this.setState({ allQueues: tmp })
                this.setState({ alertSuccess: true })
            }
            else {


                console.log(`error code ${res.status}`)
            }

        }).catch(error => {

            this.setState({ alertError: true })
            console.log(error.message.conflict);

        })
    }

    deleteQueue = (id) => {
        console.log(this.id);

        axios.delete(`/queues/scheduledCustomerQueues/${id}`)


            .then(res => {
                if (res.status === 200) {
                    console.log(res.data);
                    console.log('התור נמחק !!!');
                    alert('התור נמחק בהצלחה')

                }
                else {
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
                console.log(res);
                this.setState({ allQueues: res.data })
            })
            .catch((err) => { console.log(err); })
    }
    render() {
        let x;
        // console.log(this.newform);
        
        return (
            <div>
                {this.state.alertError ? <div className="alert alert-warning alert-dismissible fade show" role="alert">
                    . אנא בחר/י תור חדש ,<strong>{localStorage.usertoken.split(',')[1].split(':')[1].split('"')[1]}</strong> היי
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={() =>
                        this.setState({ alertError: !this.state.alertError })}>
                        <span id='exit' aria-hidden="true">&times;</span>
                    </button>
                </div> : null}

                {this.state.alertSuccess ? <div className="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>התור נקבע בהצלחה!</strong>
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={() =>
                        this.setState({ alertSuccess: !this.state.alertSuccess })}>
                        <span id='exit' aria-hidden="true">&times;</span>
                    </button>
                </div> : null}

                <div className='settingQ'>

                    <div>
                        <select  onChange={(e) => { this.chooseBarber = e.target.value; }}>
                            <option value="" disabled selected> בחר ספר</option>
                            <option >worker</option>
                            <option >admin</option>
                        </select>

                        <input id='calendar' type="date" name="date" onChange={(e) => { this.selectValue = e.target.value; }} min={this.today1} max={this.newformat} />



                        {/* <input id='calendar' type="date" name="date" onChange={(e) => { this.allTimesUser(e.target.value) }} min={this.today1} max={this.newformat} /> */}
                        <select onChange={(e) => { this.selectStyle = e.target.value }}>
                            <option ></option>
                            <option>תספורת רגילה</option>
                            <option>תספורת+צבע</option>
                            <option>תספורת+החלקה+צבע</option>
                            <option>תספורת+החלקה</option>
                            <option>תספורת+ציורים</option>
                        </select>

                        <select onChange={(e) => { this.dateValue = e.target.value }}>

                            {this.state.times.map((time, i) =>

                                <option key={i} > {time.time} </option>

                            )}
                        </select>
                    </div>
                    <div>
                        <button type='button' onClick={this.scheduledCustomerQueues}>קבע תור</button>
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
                    }}>הצג</button>
                    <h1>רשימת תורים</h1>
                    <div className='arrayQ'>
                        <table className="table">
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col">שם לקוח</th>
                                    <th scope="col">מייל</th>
                                    <th scope="col">סוג תספורת</th>
                                    <th scope="col">שעה</th>
                                    <th scope="col">תאריך</th>
                                    <th scope="col">ספר</th>
                                    <th scope="col">הסרה</th>
                                </tr>
                            </thead>
                            <tbody>

                                {this.state.filterQueues.map((q, i) => <tr key={i}>
                                    <td>{q.userName}</td>
                                    <td>{q.phone}</td>
                                    <td>{q.style}</td>
                                    <td>{q.time}</td>
                                    <td>{q.date}</td>
                                    <td>{q.barber}</td>
                                    <td ><i className="fa fa-trash-alt" onClick={() => this.deleteQueue(q._id)}></i></td>
                                </tr>)}

                            </tbody>

                        </table>
                    </div>
                </div>

            </div>
        )
    }

    filt = () => {
        this.getQueues();
        const filterWithphone = this.state.allQueues.filter((u, index) => u.phone === this.userphone)
        if (this.dateVal === undefined || this.dateVal === "") {
            this.setState({ filterQueues: filterWithphone })
        } else {
            let strdate = this.dateVal.toString();
            const filtered = filterWithphone.filter((q, i) => q.date === strdate);
            this.setState({ filterQueues: filtered })
        }
    }




}




export default SettingQueues;


//   {/* <select onChange={(e) => { this.dateValue = e.target.value }} >

//                             <option></option>
//                             <option>11:00</option>
//                             <option>11:20</option>
//                             <option>11:40</option>

//                             <option>12:00</option>
//                             <option>12:20</option>
//                             <option>12:40</option>

//                             <option>13:00</option>
//                             <option>13:20</option>
//                             <option>13:40</option>

//                             <option>14:00</option>
//                             <option>14:20</option>
//                             <option>14:40</option>

//                             <option>15:00</option>
//                             <option>15:20</option>
//                             <option>15:40</option>

//                             <option>16:00</option>
//                             <option>16:20</option>
//                             <option>16:40</option>

//                             <option>17:00</option>
//                             <option>17:20</option>
//                             <option>17:40</option>

//                             <option>18:00</option>
//                             <option>18:20</option>
//                             <option>18:40</option>

//                             <option>19:00</option>
//                             <option>19:20</option>
//                             <option>19:40</option>

//                             <option>20:00</option>
//                             <option>20:20</option>
//                             <option>20:40</option>
//                             <option>21:00</option>

//                         </select> */}
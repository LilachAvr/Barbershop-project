import React, { Component } from 'react';
// import Calendar from 'react-calendar';
import axios from 'axios';
// import './SettingQueues.css';


class SettingQAdmin extends Component {

    state = {
        flag: false,
        added: false,
        dateValue: '',
        selectValue: '',
        selectStyle: '',
        userName: '',
        allQueues: [],
        filterQueues: [],
        alertError: false,
        alertSuccesss: false
    }

    id = '';
    dateValue = ''
    selectValue = ''
    selectStyle = ''
    dateVal = ''
    user = ''
    // userEmail = localStorage.usertoken.split(',')[3].split(':')[1]



    scheduledCustomerQueues = () => {

        this.setState({
            dateValue: this.dateValue,
            selectValue: this.selectValue,
            selectStyle: this.selectStyle,
            userName: this.user
        })

        console.log(this.user);
        const data = {
            time: this.dateValue,
            date: this.selectValue,
            style: this.selectStyle,
            userName: this.user
        }
        console.log(data);
        console.log(data.id);

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
                this.setState({ alertSuccess: true })
            }
            else {

                console.log(`error code ${res.status}`)
            }


        }).catch(err => {

            this.setState({ alertError: true })
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
        // let x;
        return (
            <div>

                {this.state.alertError ? <div class="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>התור קיים!</strong>  אנא בחר תור חדש.
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close" onClick={() =>
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
                        <input type="text" name="" placeholder='שם לקוח' onChange={(e) => { this.user = e.target.value }} />

                        <input type="date" name="date" onChange={(e) => { this.selectValue = e.target.value; }} />



                        <select value='hj' onChange={(e) => { this.selectStyle = e.target.value }}>
                            <option ></option>
                            <option>תספורת רגילה</option>
                            <option>תספורת+צבע</option>
                            <option>תספורת+החלקה+צבע</option>
                            <option>תספורת+החלקה</option>
                            <option>תספורת+ציורים</option>


                        </select>



                        <select onChange={(e) => {

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


            </div>
        )
    }
    filt = () => {
        if (this.dateValue === '') {
            this.setState({ filterQueues: this.state.allQueues })
        } else {
            const filtered = this.state.allQueues.filter((q, i) => q.date === this.dateValue);

            this.setState({ filterQueues: filtered })
        }


    }




}




export default SettingQAdmin;
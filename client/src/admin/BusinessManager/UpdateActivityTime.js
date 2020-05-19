import React, { Component } from 'react';
import './UpdateActivityTime.css'
import axios from 'axios';

class UpdateActivityTime extends Component{
    state={timeOpen:'', timeClose:'', phone:'',day:'', flag: false}

updating = () => {
    axios.put(`/adminUpdatesOperatingHours/${this.state.day}`, {
        timeOpen: this.state.timeOpen,
        timeClose: this.state.timeClose,
        day: this.state.day
        
    }).then( res => {
        console.log(res);
        if(res.status === 200){
            // this.props.upavtiveTime(res.data)
        //    this.setState({flag:true})
        console.log('cfghh________________________');
        
            console.log(res.data);
            
        }else{
            console.log(`error code ${res.status}`);
            
        }
    })
}

    render(){
        console.log(this.state.day);
        console.log(this.state.timeOpen);
        

        return(
            <div className='updateActivityTime'>
                <input type="time" id="appt" name="appt"  required onChange={(e)=>this.setState({timeOpen : e.target.value})}/> : פתיחה 
                <br/><br/>
                <input type="time" id="appt" name="appt"  required onChange={(e)=>this.setState({timeClose : e.target.value})}/> : סגירה
                <br/><br/>
                {/* <input type='date' onChange={(e)=>{
                   this.setState({day: e.target.value})
                }}/> */}
                <select onChange={(e)=>{
                   this.setState({day: e.target.value})
                }}>
                    <option>ראשון</option>
                    <option>שני</option>
                    <option>שלישי</option>
                    <option>רביעי</option>
                    <option>חמישי</option>
                    <option>שישי</option>
                </select>
                <br/><br/>
                <button onClick={this.updating}>עדכן ש.פעילות</button>
                <br/><br/><br/>
                <input type="tel" id="phone" name="phone" placeholder="123-45678" pattern="[0-9]{3}-[0-9]{7}" required onChange={(e)=>this.setState({phone : e.target.value})}/>
                <br/><br/>
                <button >עדכן טלפון</button>
            </div>
        )
    }
}

export default UpdateActivityTime;
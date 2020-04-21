import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './WebManager.css';



class WebManager extends Component {
    state = {acTime: false, setclientqueues:false, updatePriceList:false}
    render() {
        if (this.state.acTime) {
            return <Redirect to='/UpdateActivityTime' />
        }
        if (this.state.setclientqueues) {
            return <Redirect to='/SettingQAdmin' />
        }
        if(this.state.updatePriceList){
            return <Redirect to='UpdatePriceList'/>
        }
        return (
            <div className='container1'>
                <div className="all">
                    <div className="lefter" onClick={()=>this.setState({acTime:true})}>
                        <div className="text">שעות פעילות + טלפון</div>
                    </div>
                    <div className="left">
                        <div className="text">עדכון גלריה</div>
                    </div>
                    <div className="center">
                        {/* <i className="far fa-images"></i> */}
                        <div className="explainer" onClick={()=>this.setState({setclientqueues:true})}><span>Hover me</span></div>
                        <div className="text">קביעת תורים</div>
                    </div>
                    <div className="right" onClick={()=>this.setState({updatePriceList:true})}>
                        <div className="text" >עדכון מחירים</div>
                    </div>
                    <div className="righter">
                        {/* <i className="far fa-images"></i> */}
                        <div className="text">עדכון מוצרים</div>
                    </div>
                </div>


            </div>
        )
    }
}
export default WebManager;
import React, { Component } from 'react';

class WeEmployee extends Component {
    state = {}
    render() {
        return (
            <div>
                <div className="all">
                    <div className="center">
                        {/* <i className="far fa-images"></i> */}
                        <div className="explainer" onClick={() => this.setState({ setclientqueues: true })}><span>Hover me</span></div>
                        <button>קביעת תורים</button>
                        {/* <div className="text">קביעת תורים</div> */}
                    </div>

                    <div className="righter">
                        {/* <i className="far fa-images"></i> */}
                        <button>עדכון מוצרים</button>
                        {/* <div className="text">עדכון מוצרים</div> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default WeEmployee;
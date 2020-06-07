import React, { Component } from 'react';


class S extends Component {
    state = { selectValue: '', times: [{ time: '11:00' }, { time: '12:00' }, { time: '13:00' }, { time: '14:00' }, { time: '15:00' }, { time: '16:00' }] }
    selectValue = ''
    chooseBarber=''
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
                <input id='calendar' type="date" name="date" onChange={(e) => this.setState({ selectValue: e.target.value })} min={this.today1} max={this.newformat} />
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


import React, { Component } from 'react';
import './PriceList.css'
import axios from 'axios'

class PriceList extends Component {
    state = { allPriceList: [] }
    componentDidMount() {

        axios.get('/PriceUpdated')
            .then((res) => {
                console.log(res.data);
                this.setState({ allPriceList: res.data })
                console.log(this.state.allPriceList);

            })
            .catch((err) => {
                console.log(err);

            })
    }

    

    render() {

        return (
            <div>
                <table className="table table-striped animated fadeIn">
                    <thead className='table table-borderless'>
                        <tr>
                            <th scope="col" >מחיר</th>

                            <th scope="col">סוג תספורת</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.allPriceList.map((q, i) => <tr key={i}>
                            <td>{q.price}</td>
                            <td>{q.haircutType}</td>
                            {/* <td ><i className="fa fa-trash-alt" onClick={() => this.deleteQueue(q._id)}></i></td> */}
                        </tr>)}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default PriceList;
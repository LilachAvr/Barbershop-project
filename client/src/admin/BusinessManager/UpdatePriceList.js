import React, { Component } from 'react';
// import '../priceList/PriceList.css'
import axios from 'axios'
class UpdatePriceList extends Component {

    state = { haircutType: '', price: '', allPriceList: [] }

    updatePrices = async () => {

        const res = await axios.post('/priceUpdated',
            {
                haircutType: this.state.haircutType,
                price: this.state.price
            })
        console.log(res, 'wbeufwiefowjfw');


    }

    componentDidMount() {

        axios.get('/priceUpdated')
            .then((res) => {
                console.log(res.data);
                this.setState({ allPriceList: res.data })
                console.log(this.state.allPriceList);

            })
            .catch((err) => {
                console.log(err);

            })
    }

    deleteHaircutType = (id) => {
        console.log(this.id);
        
        axios.delete(`/priceUpdated/${id}`)


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

    render() {
        return (
            <div>
                <div>
                    <table className="table table-striped animated fadeIn">
                        <thead className='table table-borderless'>
                            <tr>
                                <th scope="col">מחיר</th>

                                <th scope="col">סוג תספורת</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td ><i className="fa fa-shekel-sign "></i> <input type='number' onChange={e => this.setState({ price: e.target.value })} /></td>

                                <td><input type='text' onChange={e => this.setState({ haircutType: e.target.value })} placeholder='תספורת רגילה' /></td>
                            </tr>

                            <tr>
                                <td>
                                    <button id='button' onClick={this.updatePrices}>עדכן</button>
                                </td>
                                <td>

                                </td>
                            </tr>
                        </tbody>

                    </table>
                </div>
                <div>
                    <table className="table table-striped animated fadeIn">
                        <thead className='table table-borderless'>
                            <tr>
                                <th scope="col" >מחיר</th>

                                <th scope="col">סוג תספורת</th>
                                <th scope="col">הסרה</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.allPriceList.map((q, i) => <tr key={i}>
                                <td>{q.price}</td>
                                <td>{q.haircutType}</td>
                                <td ><i className="fa fa-trash-alt" onClick={() => this.deleteHaircutType(q._id)}></i></td>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default UpdatePriceList;
import React, { Component } from 'react';
// import '../priceList/PriceList.css'
class UpdatePriceList extends Component {
    render() {
        return (
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
                            <td ><i className="fa fa-shekel-sign "></i> <input type='number'/></td>
                            
                            <td>תספורת רגילה</td>
                        </tr>
                       
                        <tr>
                            <td><i className="fa fa-shekel-sign"></i>  <input type='number'/></td>
                        
                            <td>תספורת+צבע</td>
                        </tr>
                        <tr>
                            <td><i className="fa fa-shekel-sign"></i> <input type='number'/></td>
                           
                            <td>תספורת+החלקה+צבע</td>
                        </tr>
                        <tr>
                            <td><i className="fa fa-shekel-sign"></i>  <input type='number'/></td>
                          
                            <td>תספורת+החלקה</td>
                        </tr>
                        <tr>
                            <td><i className="fa fa-shekel-sign"></i> <input type='number'/></td>
                          
                            <td>תספורת+ציורים</td>
                        </tr>

                        <tr>
                            <td>
                            <button id='button'>עדכן</button>
                            </td>
                            <td>

                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>
        )
    }
}

export default UpdatePriceList;
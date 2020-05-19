import React, { Component } from 'react';
import './PriceList.css'
class PriceList extends Component {
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
                            <td ><i className="fa fa-shekel-sign "></i> 40</td>
                            
                            <td>תספורת רגילה</td>
                        </tr>
                       
                        <tr>
                            <td><i className="fa fa-shekel-sign"></i> 60</td>
                        
                            <td>תספורת+צבע</td>
                        </tr>
                        <tr>
                            <td><i className="fa fa-shekel-sign"></i> 100</td>
                           
                            <td>תספורת+החלקה+צבע</td>
                        </tr>
                        <tr>
                            <td><i className="fa fa-shekel-sign"></i> 80</td>
                          
                            <td>תספורת+החלקה</td>
                        </tr>
                        <tr>
                            <td><i className="fa fa-shekel-sign"></i> 60</td>
                          
                            <td>תספורת+ציורים</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default PriceList;
import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div id="button"><i className="fas fa-arrow-up"></i></div>
                <div id="container">
                    <div id="cont">
                        <div className="footer_center">
                            <h3>צור קשר</h3>
                            <a className='location' href={"https://www.google.com/maps/?q=הרצל73,ראשוןלציון"} target="blank"><img className='iconLocation' alt='googleMap' src='https://image.flaticon.com/icons/svg/888/888856.svg' /></a>
                            <a className='location' href={"https://www.instagram.com/naftali_barbershop/"} target="blank"><img className='iconLocation' alt='instagram' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/599px-Instagram_icon.png' /></a>
                            <a href={"https://wa.me/972509803990?text=אני רוצה לקבוע תור"}><img className='location' alt='dbvk' src='whatsapp.png' /></a>
                            <a className='location' href={"'https://www.facebook.com/search/top/?q=naftali%20avraham"} target="blank"><img className='iconLocation' alt='facebook' src='https://i.pinimg.com/564x/b3/26/b5/b326b5f8d23cd1e0f18df4c9265416f7.jpg' /></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Footer

import React, { Component } from 'react';
import './Product.css';

class Products extends Component {
    render() {
        return (
            <div className="grid-container">
                <div className='img1'>
                    <div className='imgOverLay'>
                        <h4>Twists</h4>
                        <br /><br /><br />
                        <h6>מחיר : 30 ש"ח</h6>
                    </div>
                    <img src="https://cdn.shopify.com/s/files/1/1791/4087/products/XIMIVOGUE-Hot-Twists-Sponge-Hair-Braiders-Professional-Magic-Hair-Styling-Tools-Accessories-Africa-Style-Hair-Braids.jpg_640x640_b021d4a8-1810-4860-90ae-a618c8f653f3_1400x.jpg?v=1567598204" className="grid-item" alt="..." />
                </div>
                <div className='img1'>
                    <div className='imgOverLay'>
                        <h4>Ice Wax</h4>
                        <h5 style={{ color: "pink" }}>Pink</h5>
                        <br /><br />
                        <h6>מחיר : 30 ש"ח</h6>
                    </div>
                    <img src="https://bestprice4u.co.il/content/images/thumbs/0000597_-ice-wax_300.jpeg" className="grid-item" alt="..." id='id' />
                </div>
                <div className='img1'>
                    <div className='imgOverLay'>
                        <h4>תער גילוח שיער</h4>
                        <br /><br /><br />
                        <h6>מחיר : 30 ש"ח</h6>
                    </div>
                    <img src="https://www.mey-tal.co.il/wp-content/uploads/2018/05/%D7%AA%D7%A2%D7%A8-%D7%92%D7%99%D7%9C%D7%95%D7%97-%D7%A9%D7%99%D7%A2%D7%A8-%D7%95%D7%A1%D7%9B%D7%99%D7%A0%D7%99%D7%9D-%D7%9C%D7%AA%D7%A2%D7%A8.png" className="grid-item" alt="..." />
                </div>
                <div className='img1'>
                    <div className='imgOverLay'>
                        <h4>קרם לעיצוב שיער</h4>
                        <br /><br /><br />
                        <h6>מחיר : 30 ש"ח</h6>
                    </div>
                    <img src="https://img.zap.co.il/pics/5/0/3/4/46114305c.gif" className="grid-item" alt="..." />
                </div>
                <div className='img1'>
                    <div className='imgOverLay'>
                        <h4>מסרק שיער </h4>
                        <br /><br /><br />
                        <h6>מחיר : 30 ש"ח</h6>
                    </div>
                    <img src="https://sc01.alicdn.com/kf/HTB1mh8Da2Y85uJjSZFzq6A93VXaM/Hair-Comb-for-black-men-Plastic-Afro.jpg" className="grid-item" alt="..." />
                </div>
                <div className='img1'>
                    <div className='imgOverLay'>
                        <h4>Ice Wax </h4>
                        <h5 style={{ color: "black" }}>Black</h5>
                        <br /><br />
                        <h6>מחיר : 30 ש"ח</h6>
                    </div>
                    <img src="https://topharm.co.il/image/cache/catalog/Products/Care/HAIR/%D7%90%D7%99%D7%99%D7%A1-%D7%95%D7%95%D7%A7%D7%A1-%D7%A9%D7%97%D7%95%D7%A8-%D7%97%D7%96%D7%A7-%D7%91%D7%9E%D7%99%D7%95%D7%97%D7%93-%D7%9C%D7%A2%D7%99%D7%A6%D7%95%D7%91-%D7%94%D7%A9%D7%99%D7%A2%D7%A8-250-%D7%9E%D7%9C-ice-wax-%D7%9E%D7%91%D7%99%D7%AA-bella-cosmetics-850-500x500.jpg" className="grid-item" alt="..." />
                </div>
                <div className='img1'>
                    <div className='imgOverLay'>
                        <h4>מבחר צבעי שיער</h4>
                        <h4>לגברים</h4>
                        <br /><br /><br />
                        <h6>מחיר : 30 ש"ח</h6>
                    </div>
                    <img src="https://media.medi-link.co.il/catalog/product/cache/1/thumbnail/320x/9df78eab33525d08d6e5fb8d27136e95/3/_/3_15_5.png" className="grid-item" alt="..." />
                </div>
                <div className='img1'>
                    <div className='imgOverLay'>
                        <h4>פן לשיער</h4>
                        <h5>פיליפס HP8230</h5>
                        <br /><br /><br />
                        <h6>מחיר : 30 ש"ח</h6>
                    </div>
                    <img src="https://www.shopelectrons.co.il/wp-content/uploads/2018/02/20%D7%A9%D7%99%D7%A2%D7%A820%D7%A4%D7%99%D7%9C%D7%99%D7%A4%D7%A120%D7%97%D7%96%D7%A720%D7%9E%D7%A7%D7%A6%D7%95%D7%A2%D7%9920202.jpg" className="grid-item" alt="..." />
                </div>
                <div className='img1'>
                    <div className='imgOverLay'>
                        <h4>סט שמפו ומרכך</h4>
                        <h4>לגברים</h4>
                        <br /><br /><br />
                        <h6>מחיר : 30 ש"ח</h6>
                    </div>
                    <img src="https://sc01.alicdn.com/kf/HTB10TojuFmWBuNjSspdq6zugXXah/Private-label-OEM-ODM-MELAO-Beard-wash.jpg" className="grid-item" alt="..." />
                </div>
            </div>
        )
    }
}

export default Products;
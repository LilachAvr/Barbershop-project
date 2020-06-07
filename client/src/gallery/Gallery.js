import React, { Component } from 'react';
import './Gallery.css';

import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';
import axios from 'axios';







class Gallery extends Component {
    state = { allImages: [], filterImages: [] }




    componentDidMount(fileImg) {

        axios.get(`/uploadImg/:${fileImg}`)
            .then((res) => {
                console.log(res.data);
                this.setState({ allImages: res.data })
                console.log(this.state.allImages);

            })
            .catch((err) => {
                console.log(err);

            })
    }


    render() {

        console.log(this.state.allImages);
        // let x = this.state.allImages.map((pic, i) => [{
        //     thumbnail: pic.filename,
        //     original: pic.filename,
        //     className: 'img'
        // }])
        // console.log(x);

        return (
            <div className='gallery'>
                <ImageGallery originalClass='img' items={this.state.allImages}/>
            </div>
        )

    }

}

export default Gallery;
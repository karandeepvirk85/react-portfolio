import React, {Component} from 'react';
import {withRouter} from 'react-router';
import ImageGallery from 'react-image-gallery';
import Facebook from '../components/facebook.component.js';
import Instagram from '../components/instagram.component.js';

import g1 from '../Gallery/S1.jpg';
import g2 from '../Gallery/S2.jpg';
import g3 from '../Gallery/S3.jpg';
import g4 from '../Gallery/S4.jpg';

const images = [
    {
        original: g1,
        thumbnail: g1,
    },
    {
        original: g2,
        thumbnail: g2,
    },
    {
        original: g3,
        thumbnail: g3,
    },
    {
        original: g4,
        thumbnail: g4,
    }
];

class Gallery extends Component{
	render() {
    	return (
            <div className="page-container">
                <Facebook/>
                <Instagram/>
                <ImageGallery items={images} />
            </div>
        )
  	}
}
export default withRouter(Gallery);
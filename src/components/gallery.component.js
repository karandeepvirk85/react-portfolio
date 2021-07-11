import React, {Component} from 'react';
import ImageGallery from 'react-image-gallery';
import g1 from '../Gallery/images/S1.jpg';
import g1Thumb from '../Gallery/thumb/S1Thumb.jpg';

import g2 from '../Gallery/images/S2.jpg';
import g2Thumb from '../Gallery/thumb/S2Thumb.jpg';

import g3 from '../Gallery/images/S3.jpg';
import g3Thumb from '../Gallery/thumb/S3Thumb.jpg';

import g4 from '../Gallery/images/S4.jpg';
import g4Thumb from '../Gallery/thumb/S4Thumb.jpg';

import g5 from '../Gallery/images/S5.jpg';
import g5Thumb from '../Gallery/thumb/S5Thumb.jpg';

import g6 from '../Gallery/images/S6.jpg';
import g6Thumb from '../Gallery/thumb/S6Thumb.jpg';

import g7 from '../Gallery/images/S7.jpg';
import g7Thumb from '../Gallery/thumb/S7Thumb.jpg';

const images = [
    {
        original: g1,
        thumbnail: g1Thumb,
    },
    {
        original: g2,
        thumbnail: g2Thumb,
    },
    {
        original: g3,
        thumbnail: g3Thumb,
    },
    {
        original: g4,
        thumbnail: g4Thumb,
    },
    {
        original: g5,
        thumbnail: g5Thumb,
    },
    {
        original: g6,
        thumbnail: g6Thumb,
    },
    {
        original: g7,
        thumbnail: g7Thumb,
    }
];

class Gallery extends Component{
	render() {
    	return (
            <div className="page-container">
                <h1>Photography</h1>
                <ImageGallery items={images} />
            </div>
        )
  	}
}
export default Gallery;
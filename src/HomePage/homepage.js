import React, { Component } from 'react';
import Development from '../Development/development';
import ImagesRow from '../imagesRow/imagesrow';
import Sale from '../Sale/sale';
import Demo from '../Demo/demo';

class HomePage extends Component {
    
    render() {
        return (
            <div>
                <Development />
                <ImagesRow />
                <Sale />
                <Demo />
            </div>
        )
    }
}

export default HomePage;
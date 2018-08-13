import React, { Component } from 'react';
import Gallery from './Gallery.js';

class Movie extends Component {
    render () {
        return (
            <div className="Movies">
                <Gallery imagesToRender={this.props.list}/>
            </div>
        )
    }
}

export default Movie;
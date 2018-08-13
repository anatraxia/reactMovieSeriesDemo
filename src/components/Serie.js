import React, { Component } from 'react';
import Gallery from './Gallery.js';

class Serie extends Component {
    render () {
        return (
            <div className="Series">
                <Gallery imagesToRender={this.props.list}/>
            </div>
        )
    }
}

export default Serie;
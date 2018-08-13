import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import Image from './Image.js';

class Gallery extends Component {
  render () {
    const images = this.props.imagesToRender

    const imageTiles = images.map(function (image) {
      return (
        <Image key={image.title} image={image.images['Poster Art']} title={image.title}/>
      )
    })

    return (
      <Grid className='gallery'>
        <Row className='show-grid'>
          {imageTiles}
        </Row>
      </Grid>
    )
  }
}

export default Gallery
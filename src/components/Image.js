import React, { Component } from 'react';
import { Col, Thumbnail } from 'react-bootstrap';

class Image extends Component {

  render () {
    return (
      <Col xs={6} md={3}>
            <Thumbnail href="#" alt="171x180" src={this.props.image.url} />
            <p>{this.props.title}</p>
      </Col>
    )
  }
}

export default Image
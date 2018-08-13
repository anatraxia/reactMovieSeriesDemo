import React, { Component } from 'react';
import {Grid,Row,Col, Thumbnail} from 'react-bootstrap';
class Home extends Component{
    constructor (props) {
        super(props);
        this.handleSeriesClick = this.handleSeriesClick.bind(this);
        this.handleMoviesClick = this.handleMoviesClick.bind(this);
    }
    handleSeriesClick () {
        this.props.updateActivePanel("Series");
        this.props.updateTitle("Series");
        this.props.setList('series');
    }
    handleMoviesClick () {
        this.props.updateActivePanel("Movies");
        this.props.updateTitle("Movies");
        this.props.setList('movie');
    }
    render () {
    return (
       <Grid >
        <Row className="show-grid">
            <Col xs={6} md={3}>
                <Thumbnail href="#" alt="171x180" src={this.props.imageUrl} onClick={this.handleSeriesClick}/>           
                <p>SERIES</p>
            </Col>
            <Col xs={6} md={3}>
                <Thumbnail href="#" alt="171x180" src={this.props.imageUrl} onClick={this.handleMoviesClick}/>  
                <p>Movies</p>
            </Col>
        </Row>
       </Grid>
    )}
}
export default Home; 
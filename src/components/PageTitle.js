import React, { Component } from 'react';
import { Grid, Row, Col, PageHeader } from 'react-bootstrap';

class PageTitle extends Component{
    render () {
    return (
     <Grid className='header'>
        <Row className='show-grid'>
        <Col xs={8} md={8}>
            <PageHeader>
                <small >Popular {this.props.title}</small>
            </PageHeader>
        </Col>
        </Row>
     </Grid>
    )}
}
export default PageTitle; 
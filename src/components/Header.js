import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
class DemoHeader extends Component{
    render () {
    return (
       <Navbar>
        <Navbar.Header>
         <Navbar.Brand>
         <a href="">DEMO Streaming</a>
         </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Collapse>
         <Navbar.Text pullRight>
           <Navbar.Link href="">Login</Navbar.Link>
         </Navbar.Text>
         <Navbar.Text pullRight>Start your free trial</Navbar.Text>
        </Navbar.Collapse>
       </Navbar>
    )}
}
export default DemoHeader; 
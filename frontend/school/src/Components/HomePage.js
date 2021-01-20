import React from 'react'
import {Carousel, Container, Row, Col, Navbar, Nav, } from 'react-bootstrap'
class HomePage extends React.Component{
    render(){

        const row = {
            backgroundColor: '#FBFBFB'
        }
        const right = {
            fontSize: 50,
            color: "#FBFBFB",
            fontFamily: "Roboto"
        } 
        // const middle = {
        //     fontSize: 20,
        //     fontFamily: "Roboto",
        //     marginRight: "50"
        // }
        return (
            <Container fluid>
                <Row style={row} > 
                    <Col style={right}> . </Col>
                    
                    <Col> <h1>Home Page</h1> </Col>
                </Row>
            </Container>
            
        )
    }
}

export default HomePage
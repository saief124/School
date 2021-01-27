import React from 'react'
import {Container, Row, Col } from 'react-bootstrap'
import '../App.css'
class HomePage extends React.Component{
    render(){

        const row = {
            // backgroundColor: '#007BFF',
            fontFamily: "Helvetica",
        }
        const hea={
            color: '#FFFFFF'
        }
        
        return (
            <div className="App">
            <Container style={row} fluid> 
            <Row>
                .
            </Row>
            <Row>.</Row>
            <Row style={hea}>
                <Col sm={3}>
                
                </Col>
                <Col sm={8}>
            <h2>Welcome to Cranvas</h2>
                </Col>     
            </Row>
            <Row >                .
            </Row>
            <Row style={hea}>
                <Col sm={3}></Col>
                <Col sm={4}>
                
                <p>This app allows instructors to: 

                    <li>Create a Course</li>
                    <li>Add/Remove Student to a course</li> 
                    <li>Edit course content</li>
                    <li>Leave notes for your students</li>
                    <li>Create self-assignments for students</li>
                    </p>
                </Col>
                <Col sm={4}>
                <p>This app allows students to: 

                    <li>View their course and its contents</li>
                    <li>View their instructor's note</li> 
                    <li>Work on their assignments/notes</li>
                   
                    </p>
                </Col>
            </Row>
           
            <Row style={hea}>
                <Col sm={3}></Col>
                <Col sm={8}>
                <p>If you are an instructor and would like to use this app please contact us.</p>
                <p>If you are a student, your instructor will email you your login information.</p>
                </Col>
            </Row>
              
            </Container>
            </div>
        )
    }
}

export default HomePage
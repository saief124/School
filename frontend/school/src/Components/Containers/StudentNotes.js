import React from 'react'
import {Card, Row, Col, Container, Button} from 'react-bootstrap'
import parse from 'html-react-parser'

function StudentNotes(props) {
    const row = {
        // backgroundColor: '#EFff54',
        fontFamily: "Calibri",
        color: "#780208"
    }
   
    const {my_course_name, my_assignments}=props.note
    const asn=parse(my_assignments)
    
    return (
        <div>
            <Container style={row} fluid>
            <Row>
                <Col sm={3} ></Col>
                <Col>
             <Card style={{ width: '50rem' }}>
            
            <Card.Body>
                <Card.Title>{my_course_name ?? ''}</Card.Title>
                <Card.Text>
                {asn ?? ''}
                </Card.Text>
                <Button variant="danger" onClick={()=>props.deleteNote(props.note)}>X</Button>
            </Card.Body>
            </Card>
            </Col>
            <Col sm={2}>   </Col>
            </Row>
            <Row>
                <Col sm={3}></Col>
                <Col>
                <p></p>
                </Col>
                <Col sm={2}></Col>
            </Row>
            </Container>
        </div>
    )
}

export default StudentNotes

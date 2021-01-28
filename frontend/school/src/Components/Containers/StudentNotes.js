import React from 'react'
import {Card, Row, Col, Container, Button} from 'react-bootstrap'
import parse from 'html-react-parser'

function StudentNotes(props) {
    const row = {
        
        fontFamily: "Calibri",
        color: "#780208"
    }
    const {my_course_name, my_assignments}=props.note
    const asn=parse(my_assignments)
    
    return (
        <div>
            <Container style={row} fluid>
            <Row>
                {/* <Col>Col1</Col> */}
                <Col>
             <Card style={{ width: '18rem' }}>
            
            <Card.Body>
                <Card.Title>{my_course_name ?? ''}</Card.Title>
                <Card.Text>
                {asn ?? ''}
                </Card.Text>
                <Button variant="danger" onClick={()=>props.deleteNote(props.note)}>X</Button>
            </Card.Body>
            </Card>
            </Col>
            <Col>
            .
            </Col>
            </Row>
            <Row>
                ..........................................................................
            </Row>
            </Container>
        </div>
    )
}

export default StudentNotes

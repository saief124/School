import React from 'react';
import { Button, Row, Col, Accordion, Card, Jumbotron } from 'react-bootstrap';
import './Course.css'
import parse from 'html-react-parser'

function Course(props) {
    const { course_name, content, assignment, url}=props.course
      
    const para={
        fontFamily: "Russo One",
        color: '#AF5AAD'
    }
    
    return (
        <div >
              <Jumbotron >
                <Row>
                    <Col>                    
                    <h2 style={para}>{course_name}</h2>
                    </Col>
                    <Col md="auto">
                        {props.deleteCourse?
                    <Button variant="primary" size="sm" onClick={()=>props.deleteCourse(props.course)}>✘</Button>           :  null }   
                    </Col>
                    <Col md="auto">
                        {props.editCourse?
                    <Button variant="primary" size="sm" onClick={()=>props.editCourse(props.course)}>✎</Button>          : null }
                    </Col>
                    <Col md="auto">
                        {props.handleMakeNotes?
                        <Button variant="primary" size="sm" onClick={()=>props.handleMakeNotes(props.course)}>Make notes</Button>          : null }
                    
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Accordion>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                Course Notes
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body>{content}</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    
                        </Accordion>
                    </Col>                           
                </Row>
                <Row>
                    <Col>
                        <Accordion>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                Assignment
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body>{parse(assignment)}</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    
                        </Accordion>  
                    </Col>
                    
                </Row>
                <Row>
                    <Col>
                        <Accordion>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                Course Content
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body>{parse(url)}</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    
                        </Accordion>
                    </Col>                           
                </Row>
                   
             
                </Jumbotron>
            
            
            
        </div>
    );
}

export default Course;
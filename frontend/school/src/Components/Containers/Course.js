import React from 'react';
import { Button, Row, Col, Accordion, Card, Jumbotron } from 'react-bootstrap';
import './Course.css'

function Course(props) {
    const { course_name, content, assignment, url}=props.course
    // const head4={
    //     fontFamily: "Cambria Math",
    //     color: '#F23C30'
        
    // }
   
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
                    <Button variant="primary" size="sm" onClick={()=>props.deleteCourse(props.course)}>✘</Button>              
                    </Col>
                    <Col md="auto">
                    <Button variant="primary" size="sm" onClick={()=>props.editCourse(props.course)}>✎</Button>          
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
                            <Card.Body>{assignment}</Card.Body>
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
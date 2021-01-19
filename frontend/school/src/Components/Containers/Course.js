import React from 'react';
import { Button, Container, Row, Col, Accordion, Card } from 'react-bootstrap';

function Course(props) {
    const { course_name, content}=props.course
    return (
        <div>
              <Container>
                <Row>
                    <Col>                    
                    <h4>{course_name}</h4>
                    </Col>
                    <Col md="auto">
                    <Button variant="primary" size="sm" onClick={()=>props.deleteCourse(props.course)}>✘</Button>              
                    </Col>
                    <Col>
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
                    {/* <p>Course Content: {content} </p> */}
                    </Col>                    
                </Row>
             
                </Container>
            
            
            
        </div>
    );
}

export default Course;
import React from 'react';
import { Button } from 'react-bootstrap';

function Course(props) {
    const {id, course_name, content}=props.course
    return (
        <div>
            <h4>{course_name}<Button variant="outline-info" onClick={()=>props.deleteCourse(id)}>X</Button></h4>
            <p>Course Content: {content} </p>
            
        </div>
    );
}

export default Course;
import React from 'react';
import Course from './Course'
function StudentContainer(props) {
    return (
        <div>            
            {props.courses.map(course=>
                <Course
                key={course.id}
                course={course}
                handleMakeNotes={props.handleMakeNotes}
                />)
            }
        </div>
    );
}

export default StudentContainer;
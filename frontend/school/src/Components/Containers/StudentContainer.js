import React from 'react';
import Course from './Course'
function StudentContainer(props) {
    return (
        <div>
            
            {props.courses.map(course=>
                <Course
                key={course.id}
                course={course}
                deleteCourse={props.deleteCourse}
                editCourse={props.editCourse}
                />)
            }
        </div>
    );
}

export default StudentContainer;
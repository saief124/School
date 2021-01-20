import React from 'react';
import Course from './Course'
function CourseContainer(props) {
    
    return (
        <div>
            <h2>Your Courses</h2>
            {props.courses.map(course=>
                <Course
                key={course.id}
                course={course}
                deleteCourse={props.deleteCourse}
                editCourse={props.editCourse}
                />)}
        </div>
    );
}

export default CourseContainer;
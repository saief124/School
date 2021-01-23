import React from 'react';
import Course from './Course'
function CourseContainer(props) {
    const fontstyle={
        fontFamily: "Brush Script MT",
        color: "#533A7B"
    }
    return (
        <div>
            <br></br><h1 style={fontstyle}>Your Courses</h1>
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
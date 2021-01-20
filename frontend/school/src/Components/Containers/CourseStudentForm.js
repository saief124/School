import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
class CourseStudentForm extends Component {
    initialState={
        course_id:null,
        student_id:null
    }
    state= this.initialState
    handleInputChange =(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        this.props.addStudent(this.state)
        this.setState(this.initialState)
    }
    render (){
        return(
        <div>
            <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Select Course</Form.Label>
                <Form.Control as="select" value={this.state.course_id} onChange={this.handleInputChange} name="course_id">
                    <option value={99}>Select a Course</option>
                    {this.props.courses.map(course=>
                        <option key={course.id} value={course.id}>{course.course_name}</option>
                    )}
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Select students</Form.Label>
                <Form.Control as="select" value={this.state.student_id} onChange={this.handleInputChange} name="student_id">
                    <option value={99}>Select a Student</option>
                    {this.props.students.map(student=>
                        <option key={student.id} value={student.id}>{student.firstname} {student.lastname}</option>
                    )}
                </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit" text-align="center">Add</Button>
            </Form>
        </div>
    );
    }
}

export default CourseStudentForm;
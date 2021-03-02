import React, { Component } from 'react';
import { Button, Form, FormGroup } from 'react-bootstrap';
import Search from './Search'

class CourseStudentForm extends Component {
    initialState={
        course_id:null,
        student_id:null,
        searchTerm:''
    }
    state= this.initialState
    handleInputChange =(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSearch = (e) => {
        this.setState({
          searchTerm:e.target.value
        })
      }

    handleSubmit = (e) =>{
        e.preventDefault()
        this.props.addStudent(this.state)
        this.setState(this.initialState)
        this.props.handleClickAdd()
    }
    render (){
        const formColor={
            backgroundColor: '#B1A0CF'
        }
        const fontstyle={
            fontFamily: "Brush Script MT",
            color: "#533A7B"
        }
        let searchstd=this.props.students.filter(student=> student.firstname.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
        console.log(searchstd)
        return(
        <div style={formColor}>
            <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label><h5 style={fontstyle}>Select Course</h5></Form.Label>
                <Form.Control as="select" value={this.state.course_id ?? ''} onChange={this.handleInputChange} name="course_id">
                    <option value={99}>Select a Course</option>
                    {this.props.courses.map(course=>
                        <option key={course.id} value={course.id}>{course.course_name}</option>
                    )}
                </Form.Control>
            </Form.Group>
                      
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label><h5 style={fontstyle}>Select Students</h5></Form.Label>
                <Search handleSearch={this.handleSearch}/><br></br>
                <Form.Control as="select" value={this.state.student_id ?? ''} onChange={this.handleInputChange} name="student_id">
                    <option value={99}>Select a Student</option>
                    {/* {this.props.students.map(student=>
                        <option key={student.id} value={student.id}>{student.firstname} {student.lastname}</option>
                    )} */}
                    {searchstd.map(student=>
                    <option key={student.id} value={student.id}>{student.firstname} {student.lastname}</option>)}
                </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit" text-align="center">Add</Button>
            </Form>
        </div>
    );
    }
}

export default CourseStudentForm;
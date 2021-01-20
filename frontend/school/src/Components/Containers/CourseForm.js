import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

class CourseForm extends Component {
    initialState={
        course_name:"",
        content:"",
        assignment:""
    }
    state= this.initialState
    handleInputChange =(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        this.props.addCourse(this.state)
        this.setState(this.initialState)
    }
    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Course Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Course Name" name="course_name" onChange={this.handleInputChange} value={this.state.course_name} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Course Content</Form.Label>
                        <Form.Control as="textarea" rows={6} name="content" onChange={this.handleInputChange} value={this.state.content}/>
                    </Form.Group>
                    <Button variant="primary" type="submit" text-align="center">Submit</Button>
                  
                </Form>
            </div>
        );
    }
}

export default CourseForm;
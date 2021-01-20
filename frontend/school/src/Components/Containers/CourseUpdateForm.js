import React, { Component } from 'react';

import { Button, Form } from 'react-bootstrap';

class CourseUpdateForm extends Component {
    initialState={
        id:this.props.selectedCourse.id,
        course_name:this.props.selectedCourse.course_name,
        content:this.props.selectedCourse.content,
        assignment:this.props.selectedCourse.assignment
    }
    state= this.initialState


    componentDidUpdate(prevProps) {
        if (this.props.selectedCourse !== prevProps.selectedCourse){
            const {id, course_name, content} = this.props.selectedCourse
            this.setState({id, course_name, content})
        }
    }
    handleInputChange =(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault()
        this.props.updateCourse(this.state)
        this.setState({
            id: null,
            course_name:"",
            content:"",
            assignment:""
        })
    }

   
   

    render() {
        
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <h2>Edit Form</h2>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Course Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Course Name" name="course_name" onChange={this.handleInputChange} value={this.state.course_name} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Course Content</Form.Label>
                        <Form.Control as="textarea" rows={6} name="content" onChange={this.handleInputChange} value={this.state.content}/>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Course Assignment</Form.Label>
                        <Form.Control as="textarea" rows={3} name="assignment" onChange={this.handleInputChange} value={this.state.assignment}/>
                    </Form.Group>
                    <Button variant="primary" type="submit" text-align="center">Submit</Button>
                
                </Form>
            </div>
        );
    }
}



export default CourseUpdateForm;
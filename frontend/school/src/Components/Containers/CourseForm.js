import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class CourseForm extends Component {
    initialState={
        course_name:"",
        content:""
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
                    <input onChange={this.handleInputChange} value={this.state.course_name} type="text" name="course_name" placeholder="Enter Course Name"/><br></br>
                    <input onChange={this.handleInputChange} value={this.state.content} type="text" name="content" placeholder="Enter Content"/><br></br>
                    <input type="submit" name="Submit" value="Create Course"/>
                </Form>
            </div>
        );
    }
}

export default CourseForm;
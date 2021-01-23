import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

class CourseForm extends Component {
    initialState={
        course_name:"",
        content:"",
        assignment:"",
        url:"",
    }
    state= this.initialState
    handleInputChange =(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    fileSelectedHandler=(e)=>{
        this.setState({url:e.target.files[0]})
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        this.props.addCourse(this.state)
        this.setState(this.initialState)
    }
    render() {
        const formColor={
            backgroundColor: '#B1A0CF'
        }
        const fontstyle={
            fontFamily: "Brush Script MT",
            color: "#533A7B"
        }
        return (
            <div style={formColor}>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label><h5 style={fontstyle}>Course Name</h5></Form.Label>
                        <Form.Control type="text" placeholder="Enter Course Name" name="course_name" onChange={this.handleInputChange} value={this.state.course_name} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label><h5 style={fontstyle}>Course Content</h5></Form.Label>
                        <Form.Control as="textarea" rows={6} name="content" onChange={this.handleInputChange} value={this.state.content}/>
                    </Form.Group>
                    {/* <Form.Group>
                        <Form.File id="exampleFormControlFile1" label="File input" onChange={this.fileSelectedHandler}/>
                    </Form.Group> */}
                    <Button variant="primary" type="submit" text-align="center">Submit</Button>
                  
                </Form>
            </div>
        );
    }
}

export default CourseForm;
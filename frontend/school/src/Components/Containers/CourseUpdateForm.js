import React, { Component } from 'react';
import TextEditor from './TextEditor'
import AssignmentEditor from './AssignmentEditor'
import { Button, Form } from 'react-bootstrap';

class CourseUpdateForm extends Component {
    initialState={
        id:this.props.selectedCourse.id,
        course_name:this.props.selectedCourse.course_name,
        content:this.props.selectedCourse.content,
        assignment:this.props.selectedCourse.assignment,
        url:this.props.selectedCourse.url
    }
    state= this.initialState


    componentDidUpdate(prevProps) {
        if (this.props.selectedCourse !== prevProps.selectedCourse){
            const {id, course_name, content, url} = this.props.selectedCourse
            this.setState({id, course_name, content, url})
        }
    }
    handleInputChange =(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    gettextdata=(text)=>{
        this.setState({url:text})
    }

    getAssignmentData=(assign)=>{
        this.setState({assignment:assign})
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        this.props.updateCourse(this.state)
        this.setState({
            id: null,
            course_name:"",
            content:"",
            assignment:"",
            url:""
        })
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
                    <h2>Edit Form</h2>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label><h5 style={fontstyle}>Course Name</h5></Form.Label>
                        <Form.Control type="text" placeholder="Enter Course Name" name="course_name" onChange={this.handleInputChange} value={this.state.course_name} />
                    </Form.Group>
                    <Form.Label><h5 style={fontstyle}>Course Content</h5></Form.Label>
                        <TextEditor gettextdata={this.gettextdata} url={this.state.url}></TextEditor>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label><h5 style={fontstyle}>Course Notes</h5></Form.Label>
                        <Form.Control as="textarea" rows={2} name="content" onChange={this.handleInputChange} value={this.state.content}/>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label><h5 style={fontstyle}>Course Assignment</h5></Form.Label>
                        <AssignmentEditor getAssignmentData={this.getAssignmentData} assignment={this.state.assignment}></AssignmentEditor>
                        {/* <Form.Control as="textarea" rows={2} name="assignment" onChange={this.handleInputChange} value={this.state.assignment}/> */}
                    </Form.Group>
                    
                    <Button variant="primary" type="submit" text-align="center">Submit</Button>
                

                </Form>
            </div>
        );
    }
}



export default CourseUpdateForm;
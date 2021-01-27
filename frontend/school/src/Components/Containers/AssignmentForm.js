import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import AssignmentEditor from './AssignmentEditor'

class AssignmentForm extends Component {
    initialState={
        id:this.props.selectedCA.id,
        course_name:this.props.selectedCA.course_name,
        content:this.props.selectedCA.content,
        assignment:this.props.selectedCA.assignment,
        url:this.props.selectedCA.url
    }
    state= this.initialState
    componentDidUpdate(prevProps) {
        if (this.props.selectedCA !== prevProps.selectedCA){
            const {id, course_name, content, assignment, url} = this.props.selectedCA
            this.setState({id, course_name, content, assignment, url})
        }
    }
    getAssignmentData=(assign)=>{
        this.setState({assignment:assign})
    }

    handleInputChange =(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault()
        this.props.makeNotes(this.state)
        this.setState({
            id: null,
            course_name:"",
            content:"",
            assignment:"",
            url:""
        })
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <h2>Submit Assignment Form</h2>
                    {/* <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Course Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Course Name" name="course_name" onChange={this.handleInputChange} value={this.state.course_name} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Course Content</Form.Label>
                        <Form.Control as="textarea" rows={3} name="content" onChange={this.handleInputChange} value={this.state.content}/>
                    </Form.Group> */}
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Course Assignment</Form.Label>
                        <AssignmentEditor getAssignmentData={this.getAssignmentData} assignment={this.state.assignment}></AssignmentEditor>
                        {/* <Form.Control as="textarea" rows={3} name="assignment" onChange={this.handleInputChange} value={this.state.assignment}/> */}
                    </Form.Group>
                    {/* <TextEditor gettextdata={this.gettextdata} url={this.state.url}></TextEditor> */}
                    <Button variant="primary" type="submit" text-align="center">Submit</Button>
                

                </Form>
            </div>
        );
    }
}

export default AssignmentForm;
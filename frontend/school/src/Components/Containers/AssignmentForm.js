import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

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
        const formColor={
            backgroundColor: '#e1642e'
        }
        const fontstyle={
            fontFamily: "Brush Script MT",
            color: "#780208"
        }
        return (
            <div style={formColor}>
                <Form onSubmit={this.handleSubmit}>
                    <h4 style={fontstyle}>{this.state.course_name}</h4>
                    <Form.Group>                    
                        <div className="editor">
                        <CKEditor editor={ClassicEditor} data={this.state.assignment} onChange={(event, editor)=>{
                            const data= editor.getData()
                            this.setState({assignment:data})
                        } }/></div>
                    </Form.Group>                
                    <Button variant="primary" type="submit" text-align="center">Submit</Button> 
                </Form>
            </div>
        );
    }
}

export default AssignmentForm;
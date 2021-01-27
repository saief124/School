import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap';

export class AddStudentForm extends Component {
    initialState={
        firstname:"",
        lastname:"",
        email:"",
        password:""
    }
    state= this.initialState
    handleInputChange =(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
   
    handleSubmit = (e) =>{
        e.preventDefault()
        this.props.makeStudent(this.state)
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
                            <Form.Label><h5 style={fontstyle}>Student's Firstname</h5></Form.Label>
                            <Form.Control type="text" placeholder="Enter Student Firstname" name="firstname" onChange={this.handleInputChange} value={this.state.firstname} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label><h5 style={fontstyle}>Student's Lastname</h5></Form.Label>
                        <Form.Control type="text" placeholder="Enter Student Lastname" name="lastname" onChange={this.handleInputChange} value={this.state.lastname} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label><h5 style={fontstyle}>Student's Email</h5></Form.Label>
                            <Form.Control type="text" placeholder="Enter Student Email" name="email" onChange={this.handleInputChange} value={this.state.email} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label><h5 style={fontstyle}>Student's Password</h5></Form.Label>
                        <Form.Control type="password" placeholder="Enter Student Password" name="password" onChange={this.handleInputChange} value={this.state.password} />
                    </Form.Group>

                    <Button variant="primary" type="submit" text-align="center">Submit</Button>
                </Form>
            </div>
        )
    }
}

export default AddStudentForm

import React, { Component } from 'react'
import {withRouter} from 'react-router';
import {Button, Form, Row, Col} from 'react-bootstrap'

class Signup extends Component {
    constructor(){
        super()
        this.state={
            firstname:"",
            lastname:"",
            email:"",
            password:""
        }
    }
 
    handleChange=(e)=> {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit=(e)=>{
        
        e.preventDefault()
        const newInstructor= {
            instructor:{
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                email: this.state.email,
                password: this.state.password                
            } 
        }
        fetch('http://localhost:3000/signup',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newInstructor)
        }).then(res=>res.json())
        .then(token=> {
            if (token["auth_key"]){
            localStorage.setItem('auth_key', token["auth_key"])
            this.props.handleLogin()
            this.props.history.push('./instructors')
            }else{
                alert(token["errors"])
            }
          }).catch(error=>alert(error))
    }
    render() {
        const row = {
            backgroundColor: '#007BFF',
            fontFamily: "Calibri",
            color: "#533A7B"
        }
        return (
            <div className="App">
                   <Row>
              .
          </Row>
          <Row>
              <Col>
              
              </Col>
              <Col style={row}>
                     <Form onSubmit={this.handleSubmit}>
                  
                        <Form.Group>
                            <Form.Label>Firstname</Form.Label>
                            <Form.Control type="text" name="firstname" value={this.state.firstname} placeholder ="Firstname" onChange={this.handleChange}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Lastname</Form.Label>
                            <Form.Control type="text" name="lastname" value={this.state.lastname} placeholder ="Lastname" onChange={this.handleChange}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" value={this.state.email} placeholder ="Email" onChange={this.handleChange}/>
                        </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" value={this.state.password} placeholder= "Password" onChange={this.handleChange}/>                      
                        </Form.Group>
                        {/* <input type="text" name="firstname" value={this.state.firstname} placeholder ="Firstname" onChange={this.handleChange}/><br></br>
                        <input type="text" name="lastname" value={this.state.lastname} placeholder ="Lastname" onChange={this.handleChange}/><br></br> */}
                        {/* <input type="text" name="email" value={this.state.phone} placeholder ="email" onChange={this.handleChange}/><br></br>
                        <input type="password" name="password" value={this.state.password} placeholder= "Password" onChange={this.handleChange}/><br></br> */}
                        <Button variant="danger" type="submit" text-align="center">Sign Up</Button>
                        
                    </Form>
                    </Col>
                   
              <Col>
              
              </Col>
          </Row>
            </div>
        )
    }
}

export default withRouter(Signup)

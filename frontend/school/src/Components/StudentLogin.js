import React from 'react'
import { Component } from 'react';
import {withRouter} from 'react-router';
import {Button, Form, Row, Col} from 'react-bootstrap'

class StudentLogin extends Component {
  constructor(){
      super()
      this.state={
          email:"",
          password:"",
          
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
      const User= {
              email: this.state.email,            
              password: this.state.password    
      }
    //   console.log(User)
      fetch('http://localhost:3000/studentlogin',{
          method: 'POST',
          headers:{
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(User)
      }).then(res=>res.json())
      .then(token=> {
        if (token["student_auth_key"]){
        localStorage.setItem('student_auth_key', token["student_auth_key"])
        this.props.handleLogin()
        this.props.history.push('./students')
        }else{
         alert(token["msg"])
        }
      })
      
    
  }

  render(){
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
                        <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" value={this.state.email} placeholder ="Email" onChange={this.handleChange}/>
                        
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" value={this.state.password} placeholder= "Password" onChange={this.handleChange}/>
                        
                        </Form.Group>
                        <Button variant="danger" type="submit" text-align="center">Login</Button>                   

                    </Form>
                </Col>
                <Col>
                
                </Col>
          </Row>
          <Row>
                <Col></Col>
                <Col></Col>
                <Col></Col>
          </Row>
      </div>
  )
  }
}

export default withRouter(StudentLogin);
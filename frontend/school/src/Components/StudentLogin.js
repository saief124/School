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
      console.log(User)
    //   fetch('http://localhost:3000/login',{
    //       method: 'POST',
    //       headers:{
    //           'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify(User)
    //   }).then(res=>res.json())
    //   .then(token=> {
    //     if (token["auth_key"]){
    //     localStorage.setItem('auth_key', token["auth_key"])
    //     this.props.handleLogin()
    //     this.props.history.push('./')
    //     }else{
    //      alert(token["msg"])
    //     }
    //   })
      
    
  }

  render(){
  return (
      <React.Fragment>
          <Row>
                <Col>
                
                </Col>
                <Col>
                
                </Col>
                <Col>
                
                </Col>
          </Row>
          <Row>
                <Col>
                
                </Col>
                <Col>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" value={this.state.email} placeholder ="Email" onChange={this.handleChange}/>
                        
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" value={this.state.password} placeholder= "Password" onChange={this.handleChange}/>
                        
                        </Form.Group>
                        <Button variant="primary" type="submit" text-align="center">Submit</Button>                   

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
      </React.Fragment>
  )
  }
}

export default withRouter(StudentLogin);
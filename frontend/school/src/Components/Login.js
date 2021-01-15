import React from 'react'
import { Component } from 'react';
import {withRouter} from 'react-router';
import {Button} from 'react-bootstrap'

class Login extends Component {
  constructor(){
      super()
      this.state={
          email:"",
          password:"",
          
      }
  }

//   handleSignup = (username, email, password) => {};
//   handleLogin = (username, password) => {}

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
      
      fetch('http://localhost:3000/login',{
          method: 'POST',
          headers:{
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(User)
      }).then(res=>res.json())
      .then(token=> {
        if (token["auth_key"]){
        localStorage.setItem('auth_key', token["auth_key"])
        // this.props.handleLogin()
        this.props.history.push('./')
        }else{
         alert(token["msg"])
        }
      })
      
    
  }

  render(){
  return (
      
    
      <form onSubmit={this.handleSubmit}>
          {/* <h1>Login</h1> */}
          <input type="text" name="email" value={this.state.email} placeholder ="Email" onChange={this.handleChange}/><br></br>        
          <input type="password" name="password" value={this.state.password} placeholder= "Password" onChange={this.handleChange}/><br></br>
          <Button type="submit" text-align="center">Submit</Button>
          

      </form>
  )
  }
}

export default withRouter(Login);
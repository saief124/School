
import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import Students from './Components/Students'
import Instructors from './Components/Instructors'
import HomePage from './Components/HomePage'
import Header from './Components/Header'
import Login from './Components/Login'
import Signup from './Components/Signup'
import StudentLogin from './Components/StudentLogin'
import StudentProfile from './Components/StudentProfile'
import StudentPage from './Components/StudentPage'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component {
  state={
    isLoggedIn: false,
    studentisLoggedIn:false
  }
  componentDidMount(){
    if(localStorage.getItem('auth_key')){
      this.setState({isLoggedIn: true})
    }
    if(localStorage.getItem('student_auth_key')){
      this.setState({studentisLoggedIn: true})
    }
  }
  handleLogin=()=>{
    if(localStorage.getItem('auth_key')){
      this.setState({isLoggedIn: true})
    }
    if(localStorage.getItem('student_auth_key')){
      this.setState({studentisLoggedIn:true})
    }
  }

  render(){
    return (
      <div >
        
          <Router>
            <Header handleLogin={this.handleLogin} isLoggedIn={this.state.isLoggedIn} studentisLoggedIn={this.state.studentisLoggedIn} />
            <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/students' component={()=>{
              if(localStorage.getItem('student_auth_key')){
                return <Students/>
              }else{
                return <Redirect to='/studentlogin'/>
              } 
              }}/>
            <Route exact path='/instructors' component={()=>{
              if(localStorage.getItem('auth_key')){
                return <Instructors/>
              }
              else{
                return <Redirect to="/login"/>
              }
              }}/>
            <Route exact path='/studentprofile' component={()=>{
                if(localStorage.getItem('student_auth_key')){
                  return <StudentProfile/>
                }else{
                  return <Redirect to='/studentlogin'/>
                } 
                }}/>
            <Route exact path='/mystudents' component={()=>{
              if(localStorage.getItem('auth_key')){
                return <StudentPage/>
              }
              else{
                return <Redirect to="/login"/>
              }
              }}/>
            {this.state.studentisLoggedIn? 
            null:             
            <Route exact path ="/login" component= {()=>{
                return <Login handleLogin={this.handleLogin}/>
            }}/>}
            {this.state.studentisLoggedIn?
            null :
            <Route exact path="/signup" component= {()=><Signup handleLogin={this.handleLogin}/>}/>
            }
            <Route exact path ="/logout" component = {()=>{
              localStorage.clear()
              this.setState({isLoggedIn: false})
              return <Redirect to="/"/>
            }}/>
              {this.state.isLoggedIn? 
            null:  
            <Route exact path="/studentlogin" component={()=>{
              return <StudentLogin handleLogin={this.handleLogin}/>
            }}/>}
            <Route exact path ="/studentlogout" component = {()=>{
              localStorage.clear()
              this.setState({studentisLoggedIn: false})
              return <Redirect to="/"/>
            }}/>
            <Route component={()=>{return <Redirect to='/'/>}}/>
            </Switch>
          </Router>
        {/* </header> */}
      </div>
    );
  }
}

export default App;

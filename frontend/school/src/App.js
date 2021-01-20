import './App.css';
import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import Students from './Components/Students'
import Instructors from './Components/Instructors'
import HomePage from './Components/HomePage'
import Header from './Components/Header'
import Login from './Components/Login'
import StudentLogin from './Components/StudentLogin'
import StudentProfile from './Components/StudentProfile'
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
      <div className="App">
        {/* <header className="App-header"> */}
        
          <Router>
            <Header handleLogin={this.handleLogin} isLoggedIn={this.state.isLoggedIn} studentisLoggedIn={this.state.studentisLoggedIn} />
            <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/students' component={Students}/>
            <Route exact path='/instructors' component={Instructors}/>
            <Route exact path='/studentprofile' component={StudentProfile}/>
            {this.state.studentisLoggedIn? 
            null:             
            <Route exact path ="/login" component= {()=>{
                return <Login handleLogin={this.handleLogin}/>
            }}/>}

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

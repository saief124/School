import './App.css';
import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import Students from './Components/Students'
import Instructors from './Components/Instructors'
import HomePage from './Components/HomePage'
import Header from './Components/Header'
import Login from './Components/Login'
import StudentLogin from './Components/StudentLogin'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component {
  state={
    isLoggedIn: false
  }
  componentDidMount(){
    if(localStorage.getItem('auth_key')){
      this.setState({isLoggedIn: true})
    }
  }
  handleLogin=()=>{
    if(localStorage.getItem('auth_key')){
      this.setState({isLoggedIn: true})
    }
  }

  render(){
    return (
      <div className="App">
        {/* <header className="App-header"> */}
        
          <Router>
            <Header handleLogin={this.handleLogin} isLoggedIn={this.state.isLoggedIn} />
            <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/students' component={Students}/>
            <Route exact path='/instructors' component={Instructors}/>
            <Route exact path ="/login" component= {()=>{
                return <Login handleLogin={this.handleLogin}/>
              }}/>
            <Route exact path ="/logout" component = {()=>{
              localStorage.clear()
              this.setState({isLoggedIn: false})
              return <Redirect to="/"/>
            }}/>
            <Route exact path="/studentlogin" component={()=>{
              return <StudentLogin />
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

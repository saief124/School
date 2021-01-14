import './App.css';
import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import Students from './Components/Students'
import Instructors from './Components/Instructors'
import HomePage from './Components/HomePage'
import Header from './Components/Header'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      
        <Router>
          <Header/>
          <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/students' component={Students}/>
          <Route exact path='/instructors' component={Instructors}/>
          <Route component={()=>{return <Redirect to='/'/>}}/>
          </Switch>
        </Router>
      {/* </header> */}
    </div>
  );
}

export default App;

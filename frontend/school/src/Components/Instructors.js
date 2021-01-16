import React from 'react'
import { Button } from 'react-bootstrap';
// import StudentContainer from './Containers/StudentContainer'
import CourseContainer from './Containers/CourseContainer'
import CourseForm from './Containers/CourseForm'

let instructors_url= "http://localhost:3000/instructors"
class Instructors extends React.Component{
    state={
        user:{
            firstname:"",
            lastname:"",
            courses:[],
            display: false,
        }
    }

    componentDidMount(){
        
            // fetch("http://localhost:3000/courses",{
            //     method: 'GET',
            //     headers:{
            //         'Content-Type': 'application/json',
            //         'Auth-Key': localStorage.getItem('auth_key')
            //     }                
            // })
            // .then(res=>res.json())
            // .then(user=>console.log(user))

             fetch(instructors_url,{
                method: 'GET',
                headers:{
                    'Content-Type': 'application/json',
                    'Auth-Key': localStorage.getItem('auth_key')
                }                
            })
            .then(res=>res.json())
            .then(user=>this.setState({user: user})
            )
            
        }
    handleClick=()=>{
        let newBoolean=!this.state.display
        this.setState({display: newBoolean})
    }
    addCourse=(course)=>{
        console.log(course)
    }

    deleteCourse=(course)=>{
        console.log(course)
    }

    render(){
        
        return(
            <div>
                <h1>Instructors Page</h1>
                <p>Welcome {this.state.user.firstname}</p>
                {/* <StudentContainer></StudentContainer> */}
                <CourseContainer courses={this.state.user.courses} deleteCourse={this.deleteCourse}></CourseContainer><br></br>
                <Button onClick={this.handleClick}>Add a Course</Button>

                {this.state.display? <CourseForm addCourse={this.addCourse}/> : null}
            </div>
        )
    }
}

export default Instructors;
import React from 'react'
import StudentContainer from './Containers/StudentContainer'
import AssignmentForm from './Containers/AssignmentForm'
import { Container } from 'react-bootstrap';

let students_url="http://localhost:3000/students"
class Students extends React.Component{
    state={
        firstname:"",
        lastname:"",
        email:"",
        courses:[],
        selectedCA:{},
        displayAssignment:false    
    }
    componentDidMount(){
    
        fetch(students_url,{
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                'Auth-Key': localStorage.getItem('student_auth_key')
            }
        }).then(res=>res.json())
        .then(std=>this.setState({
            firstname: std.firstname,
            lastname: std.lastname,
            email: std.email,
            courses: std.courses   
        }))
        .catch(error=>alert(error))
    
    }


    editAssignment=(course)=>{
        let newBool=!this.state.displayAssignment
        this.setState({displayAssignment: newBool})
        this.setState({selectedCA: course})
        // console.log(this.state.selectedCA)
        
    }

    updateCourse=(updatedCourse)=>{
        // console.log(updatedCourse)
        fetch(`http://localhost:3000/courses/${updatedCourse.id}`,{
            method: 'PATCH',
            headers:{
                'Content-Type': 'application/json',
                'Auth-Key': localStorage.getItem('student_auth_key')
            },
            body: JSON.stringify(updatedCourse)   
        }).then(res=>res.json())
        .then(courseObj=> {
            
            if (courseObj["errors"]){
                alert(courseObj["errors"])
            }
            else{
            const courseList=[...this.state.courses].map(course=>{
                return course.id === courseObj.id ? courseObj : course
            })
        
            this.setState({courses:courseList, selectedCA:{} })
        }})
        .catch(error=>alert(error))
        let updateBool=!this.state.displayAssignment
        this.setState({displayAssignment:updateBool})
        
    }

    render(){
        const row1 = {
            backgroundColor: '#EF8354'
            // backgroundColor: '#4C94E8'
            // backgroundColor: '#D4CBE5'
        }

        const fontstyle={
            fontFamily: "Brush Script MT",
            // color: '#AF1D35',
            color: '#780208'
            // color: "#533A7B"
        }
       
        return(
            <div>
                <Container fluid style={row1}>
                <h2 style={fontstyle}>Welcome {this.state.firstname} {this.state.lastname}</h2>
                {this.state.displayAssignment?
                <AssignmentForm selectedCA={this.state.selectedCA} updateCourse={this.updateCourse}/>
                : null}
                <StudentContainer courses={this.state.courses} editAssignment={this.editAssignment}/>
                </Container>
            </div>
        )
    }








}

export default Students;
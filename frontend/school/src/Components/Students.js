import React from 'react'
import StudentContainer from './Containers/StudentContainer'


let students_url="http://localhost:3000/students"
class Students extends React.Component{
    state={
        firstname:"",
        lastname:"",
        email:"",
        courses:[]    
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
        .catch(error=>console.log(error))
    
    }

    deleteCourse=(course)=>{
        // fetch(`http://localhost:3000/courses/${course.id}`,{
        //     method: 'DELETE',
        //     headers:{
        //         'Content-Type': 'application/json',
        //         'Auth-Key': localStorage.getItem('auth_key')
        //     }   
        // })
        // .then(res=>res.json())
        // .then(message=>{ alert(message["msg"])
        // })
        // let array = this.state.user.courses;
        
        // let i = array.indexOf(course);
        //     if (i > -1) {
        //         array.splice(i, 1);
        //     }
        // this.setState({
        //     user:{courses: array}
        // })
        console.log(course)
    }
    editCourse=(course)=>{
        // let newBool=!this.state.displayEdit
        // this.setState({displayEdit: newBool})
        // this.setState({selectedCourse: course})
        console.log(course)
    }

    render(){
        
        return(
            <div>
                <h3>Student Page</h3>
                <p>Welcome {this.state.firstname} {this.state.lastname}</p>
                
                <StudentContainer courses={this.state.courses} deleteCourse={this.deleteCourse} editCourse={this.editCourse}/>
            </div>
        )
    }








}

export default Students;
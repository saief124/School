// import '../App.css';
import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import CourseUpdateForm from './Containers/CourseUpdateForm'
import CourseContainer from './Containers/CourseContainer'
import CourseForm from './Containers/CourseForm'
import CourseStudentForm from './Containers/CourseStudentForm'
import RemoveStudentForm from './Containers/RemoveStudentForm'


let students_url="http://localhost:3000/students"
let instructors_url= "http://localhost:3000/instructors"
let course_url= "http://localhost:3000/courses"
let course_students_url="http://localhost:3000/course_students"

class Instructors extends React.Component{
    state={
        user:{
            firstname:"",
            lastname:"",
            courses:[],
            display: false,
        },
        selectedCourse: {},
        displayEdit: false,
        students:[],
        displayRemoveStudent: false,
        displayAddStudent: false,
        
    }

    componentDidMount(){
        
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
    handleClickAdd=()=>{
        let newBoolean=!this.state.displayAddStudent
        this.setState({displayAddStudent: newBoolean})
        fetch(students_url,{
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                'Auth-Key': localStorage.getItem('auth_key')
            }                
        })
        .then(res=>res.json())
        .then(students=>           
            this.setState({students: students})
        )
    }
    handleClickRemove=()=>{
        let newBoolean=!this.state.displayRemoveStudent
        this.setState({displayRemoveStudent: newBoolean})
    }
   

    addCourse=(course)=>{
 
        const newCourse={
            course_name: course.course_name,
            content: course.content,
            assignment: course.assignment,
            url: course.url
        }
           fetch(course_url,{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                    'Auth-Key': localStorage.getItem('auth_key')
                },
                body: JSON.stringify(newCourse)               
            })
            .then(res=>res.json())
            .then(addedCourse=>{
                if (addedCourse["errors"]){
                 alert(addedCourse["errors"])
                }else{
                const course_item=[...this.state.user.courses, addedCourse]
                this.setState({user:{courses: course_item}})
                alert("Course added")
                this.handleClick()
            }})
        .catch(error=>alert(error))
    }

    deleteCourse=(course)=>{
        fetch(`http://localhost:3000/courses/${course.id}`,{
            method: 'DELETE',
            headers:{
                'Content-Type': 'application/json',
                'Auth-Key': localStorage.getItem('auth_key')
            }   
        })
        .then(res=>res.json())
        .then(message=>{ alert(message["msg"])        
        }).catch(error=>alert(error))

        let array = this.state.user.courses;        
        let i = array.indexOf(course);
            if (i > -1) {
                array.splice(i, 1);
            }
        this.setState({
            user:{courses: array}
        })
    }

    editCourse=(course)=>{
        let newBool=!this.state.displayEdit
        this.setState({displayEdit: newBool})
        this.setState({selectedCourse: course})
    }

    updateCourse=(updatedCourse)=>{
        fetch(`http://localhost:3000/courses/${updatedCourse.id}`,{
            method: 'PATCH',
            headers:{
                'Content-Type': 'application/json',
                'Auth-Key': localStorage.getItem('auth_key')
            },
            body: JSON.stringify(updatedCourse)   
        }).then(res=>res.json())
        .then(courseObj =>{
            
            if (courseObj["errors"]){
                alert(courseObj["errors"])
            }
            else{
            const courseList=[...this.state.user.courses].map(course=>{
                return course.id === courseObj.id ? courseObj : course
            })
        
            this.setState({ user:{courses:courseList}, selectedCourse:{} })
        }})
        .catch(error=>alert(error))
        let updateBool=!this.state.displayEdit
        this.setState({displayEdit:updateBool})
        
    }
    addStudent=(cs)=>{
        
        fetch(course_students_url,{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'Auth-Key': localStorage.getItem('auth_key')
            },
            body: JSON.stringify(cs)               
        })
        .then(res=>res.json())
        .then(cores=>{
            if(cores["success"]){
            alert(cores["success"])
            }
            else{
                alert(cores["errors"])
            }            
        }).catch(error=>alert(error))
    }

   

    render(){
 
        const row1 = {
            // backgroundColor: '#4CC92C'
            //backgroundColor: '#4C94E8'
            backgroundColor: '#D4CBE5'
        }
        const fontstyle={
            fontFamily: "Brush Script MT",
            // backgroundColor: '#cc8c55',
            color: "#533A7B"
        }
   

        return(
            <div>
                <Container fluid style={row1}>
                <Row >
                    <Col>                    
                    <h1 style={fontstyle}>Welcome {this.state.user.firstname}</h1>
                    </Col>
                </Row>
                <Row >
                    <Col>     
                            <Button onClick={this.handleClick}>Add a Course</Button>
                            {this.state.display? <CourseForm addCourse={this.addCourse}/> : null}
                    </Col>
               
                </Row>
                <Row>
                    <Col>
                            <br></br><Button onClick={this.handleClickAdd}>Add student to a course</Button>
                            {this.state.displayAddStudent? <CourseStudentForm courses={this.state.user.courses} students={this.state.students} addStudent={this.addStudent} handleClickAdd={this.handleClickAdd}/> : null}
                    </Col>
                    <Col>
                    <br></br><Button onClick={this.handleClickRemove}>Remove student from a course</Button>
                             {this.state.displayRemoveStudent? <RemoveStudentForm handleClickRemove={this.handleClickRemove}/> : null }
                    </Col>
                </Row>
                <Row>
                    <Col>
                    {this.state.displayEdit? <CourseUpdateForm updateCourse={this.updateCourse} selectedCourse={this.state.selectedCourse}/> : null}
                    </Col>
                    
                </Row>
                <Row>
                    <Col>
                    <CourseContainer courses={this.state.user.courses} deleteCourse={this.deleteCourse} editCourse={this.editCourse}></CourseContainer><br></br>
                    </Col>   
                </Row>

                </Container>
                
         
            </div>
        )
    }
}

export default Instructors;
import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap';
import CourseUpdateForm from './Containers/CourseUpdateForm'
import CourseContainer from './Containers/CourseContainer'
import CourseForm from './Containers/CourseForm'
import CourseStudentForm from './Containers/CourseStudentForm';
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

        // course_students:{
        //     id:null,
        //     course_name:"",
        //     students:[]
        // }

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
            fetch(students_url,{
                method: 'GET',
                headers:{
                    'Content-Type': 'application/json',
                    'Auth-Key': localStorage.getItem('auth_key')
                }                
            })
            .then(res=>res.json())
            .then(students=>
                // console.log(students)
                this.setState({students: students})
            )
        }
    handleClick=()=>{
        let newBoolean=!this.state.display
        this.setState({display: newBoolean})
    }
    addCourse=(course)=>{
        const newCourse={
            course_name: course.course_name,
            content: course.content
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
                const course_item=[...this.state.user.courses, addedCourse]
                this.setState({user:{courses: course_item}})
            })
        // console.log(newCourse)
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
        })
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
        // console.log(course)
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
            const courseList=[... this.state.user.courses].map(course=>{
                return course.id === courseObj.id ? courseObj : course
            })
            // console.log(courseObj)
            this.setState({ user:{courses:courseList}, selectedCourse:{} })
        })
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
            console.log(cores)
            // const course_item=[...this.state.user.courses, addedCourse]
            // this.setState({user:{courses: course_item}})
        })
    }

    // getCourseStudent=(st)=>{
    //     fetch(course_url,{
    //         method: 'GET',
    //         headers:{
    //             'Content-Type': 'application/json',
    //             'Auth-Key': localStorage.getItem('auth_key')
    //         }                
    //     })
    //     .then(res=>res.json())
    //     .then(course_students=>this.setState({course_students: course_students})
    //     )
    // }

    render(){
        // console.log(this.state.course_students)
        return(
            <div>
                <Container>
                <Row>
                    <Col>
                    <h1>Instructors Page</h1>
                    <p>Welcome {this.state.user.firstname}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>     
                            <Button onClick={this.handleClick}>Add a Course</Button>
                            {this.state.display? <CourseForm addCourse={this.addCourse}/> : null}
                    </Col>

                </Row>
                <Row>
                    <Col>
                            <br></br><Button >Add student to a course</Button>
                            <CourseStudentForm courses={this.state.user.courses} students={this.state.students} addStudent={this.addStudent}/>
                    </Col>
                    <Col>
                    <br></br><Button>Remove student from a course</Button>
                             <RemoveStudentForm />
                    </Col>
                </Row>
                <Row>
                    <Col>
                    {this.state.displayEdit?<CourseUpdateForm updateCourse={this.updateCourse} selectedCourse={this.state.selectedCourse}/> : null}
                    </Col>
                    
                </Row>
                <Row>
                    <Col>
                    <CourseContainer courses={this.state.user.courses} deleteCourse={this.deleteCourse} editCourse={this.editCourse}></CourseContainer><br></br>
                    </Col>

   
                </Row>

                </Container>
                
                
                {/* <StudentContainer></StudentContainer> */}
                
         
            </div>
        )
    }
}

export default Instructors;
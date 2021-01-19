import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap';
import CourseUpdateForm from './Containers/CourseUpdateForm'
import CourseContainer from './Containers/CourseContainer'
import CourseForm from './Containers/CourseForm'


let instructors_url= "http://localhost:3000/instructors"
let course_url= "http://localhost:3000/courses"

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

    render(){
        
        return(
            <div>
                <Container>
                <Row>
                    <Col>
                    <h1>Instructors Page</h1>
                    <p>Welcome {this.state.user.firstname}</p>
                    </Col>
                    <Col>     
                            <Button onClick={this.handleClick}>Add a Course</Button>
                            {this.state.display? <CourseForm addCourse={this.addCourse}/> : null}
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <CourseContainer courses={this.state.user.courses} deleteCourse={this.deleteCourse} editCourse={this.editCourse}></CourseContainer><br></br>
                    </Col>

                    <Col>
                        {this.state.displayEdit?<CourseUpdateForm updateCourse={this.updateCourse} selectedCourse={this.state.selectedCourse}/> : null}
                    </Col>
                </Row>
                <Row>
                    <Col>

                    </Col>
                    
                </Row>
                </Container>
                
                
                {/* <StudentContainer></StudentContainer> */}
                
         
            </div>
        )
    }
}

export default Instructors;
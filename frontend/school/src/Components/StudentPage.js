import React, { Component } from 'react'
import StudentList from './Containers/StudentList'
import { Container, Row, Col, Form } from 'react-bootstrap'

let course_url= "http://localhost:3000/courses"
class StudentPage extends Component {
    state={
        cs:[{id:null}],
        course_id:null,
        student_id:null
    }
    componentDidMount() {
            
        fetch(course_url,{
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                'Auth-Key': localStorage.getItem('auth_key')
            }                
        })
        .then(res=>res.json())
        .then(cs=>this.setState({cs: cs})
        )
    }  

    handleRemoveStudent=(std)=>{
        let course = this.state.cs.find(item => item.id === parseInt(this.state.course_id))
        let fc = course.course_students.find(i=>i.student_id===std.id).id
        
        fetch(`http://localhost:3000/course_students/${fc}`,{
                method: 'DELETE',
                headers:{
                    'Content-Type': 'application/json',
                    'Auth-Key': localStorage.getItem('auth_key')
                }   
            })
            .then(res=>res.json())
            .then(message=>{ 
                    alert(message["msg"])
                    fetch(course_url,{
                        method: 'GET',
                        headers:{
                            'Content-Type': 'application/json',
                            'Auth-Key': localStorage.getItem('auth_key')
                        }                
                    })
                    .then(res=>res.json())
                    .then(cs=>this.setState({cs: cs})
                    )           
            })
            .catch(error => alert(error))        
    }
  
    handleInputChange =(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    findCourseStudentId=()=>{
        
        let course = this.state.cs.find(item => item.id === parseInt(this.state.course_id))
       
        let fc = course.course_students.find(i => i.student_id === parseInt(this.state.student_id)).id 
        return fc
    }

    getEnrolledStudents=()=>{
        let selectedid=parseInt(this.state.course_id)
        let filteredcourse=this.state.cs.filter(course=>course.id===selectedid)
        let filteredstudents= filteredcourse.map(cour=>cour.students.map(std=>std))
    
        return(filteredstudents[0] ?? [])
    }
    render() {
        const row1 = {
            backgroundColor: '#D4CBE5'
        }
        const fontstyle={
            fontFamily: "Brush Script MT",
            color: "#533A7B"
        }
      
        return (
            <div>
                <Container fluid style={row1}>
                
                    <Row>  </Row>
                    <Row><Col>
                    <Form >
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label><h5 style={fontstyle}>Select Course</h5></Form.Label>
                            <Form.Control as="select" value={this.state.course_id ?? ''} onChange={this.handleInputChange} name="course_id">
                                <option value={99}>Select a Course</option>
                                {this.state.cs.length>0? this.state.cs.map(course=>
                                    <option key={course.id} value={course.id}>{course.course_name}</option>) : null
                                }
                            </Form.Control>
                        </Form.Group>
                 
                    </Form>
                    </Col>
                    <Col>
                    <p></p>
                    </Col></Row>
                    <Row><Col sm={3}><h3 style={fontstyle}>My Students</h3></Col></Row>
                    
                    <Row>
                        {this.getEnrolledStudents()? <StudentList students={this.getEnrolledStudents()} 
                         handleRemoveStudent={this.handleRemoveStudent
                                                 }/>: null}
                    </Row>
                </Container>
            </div>
        )
    }
}

export default StudentPage

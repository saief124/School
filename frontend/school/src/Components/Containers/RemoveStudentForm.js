import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

let course_url= "http://localhost:3000/courses"
class RemoveStudentForm extends Component {
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
handleSubmit = (e) =>{
    e.preventDefault()
    let id=this.findCourseStudentId()
    fetch(`http://localhost:3000/course_students/${id}`,{
            method: 'DELETE',
            headers:{
                'Content-Type': 'application/json',
                'Auth-Key': localStorage.getItem('auth_key')
            }   
        })
        .then(res=>res.json())
        .then(message=>{ alert(message["msg"])
        this.props.handleClickRemove()
        // this.setState({
        //     cs:[{id:null}],
        //     course_id:null,
        //     student_id:null
        // })
        }).catch(error => alert(error))
}

getEnrolledStudents=()=>{
    let selectedid=parseInt(this.state.course_id)
    let filteredcourse=this.state.cs.filter(course=>course.id===selectedid)
    let filteredstudents= filteredcourse.map(cour=>cour.students.map(std=>std))

    return(filteredstudents[0] ?? [])
}


    render() {
        const formColor={
            backgroundColor: '#B1A0CF'
        }
        const fontstyle={
            fontFamily: "Brush Script MT",
            color: "#533A7B"
        }
       
        return (
            <div style={formColor}>               
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label><h5 style={fontstyle}>Select Course</h5></Form.Label>
                    <Form.Control as="select" value={this.state.course_id ?? ''} onChange={this.handleInputChange} name="course_id">
                        <option value={99}>Select a Course</option>
                        {this.state.cs.length>0? this.state.cs.map(course=>
                            <option key={course.id} value={course.id}>{course.course_name}</option>) : null
                        }
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label><h5 style={fontstyle}>Select Course</h5></Form.Label>
                    <Form.Control as="select" value={this.state.student_id ?? ''} onChange={this.handleInputChange} name="student_id">
                        <option value={99}>Select a Student</option>
                        {this.getEnrolledStudents().length>0? this.getEnrolledStudents().map(student=>
                            <option key={student.id} value={student.id}>{student.firstname} {student.lastname}</option>) : null
                            }
                       
                    </Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit" text-align="center">Remove</Button>
            </Form>
            </div>
        );
    }
}



export default RemoveStudentForm;
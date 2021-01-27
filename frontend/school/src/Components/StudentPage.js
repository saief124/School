import React, { Component } from 'react'
import StudentList from './Containers/StudentList'
import { Button, Container, Row, Col } from 'react-bootstrap'
import AddStudentForm from './Containers/AddStudentForm'

let students_url="http://localhost:3000/students"
class StudentPage extends Component {
    state={
        students:[],
        selectedStudent:{},
        displayMakeStudent: false
    }
    componentDidMount(){
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
    handleCreateStudents=()=>{
        let makestudent=!this.state.displayMakeStudent
        this.setState({displayMakeStudent: makestudent})
    }
    makeStudent=(std)=>{
        // console.log(std)
        fetch(students_url,{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'Auth-Key': localStorage.getItem('auth_key')
            },
            body: JSON.stringify(std)               
        }).then(res=>res.json())
        .then(addedStudent=>{
            if (addedStudent["errors"]){
                alert(addedStudent["errors"])
            }else{            
                const student_item=[...this.state.students, addedStudent]
                this.setState({students: student_item})
                alert("Student added")
                this.handleCreateStudents()             
            }
        })            
        .catch(error=>alert(error))
    }

    // handleRemoveStudent=(std)=>{

    //     fetch(`http://localhost:3000/students/${std.id}`,{
    //         method: 'DELETE',
    //         headers:{
    //             'Content-Type': 'application/json',
    //             'Auth-Key': localStorage.getItem('auth_key')
    //         }   
    //     })
    //     .then(res=>res.json())
    //     .then(message=>{ alert(message["msg"])
    //     }).catch(error=>alert(error))

    //     let array = this.state.students;        
    //     let i = array.indexOf(std);
    //         if (i > -1) {
    //             array.splice(i, 1);
    //         }
    //     this.setState({students: array})
        
    // }

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
                    <Row>.<Col sm={3}><h3 style={fontstyle}>Students</h3></Col></Row>
                    <Row> 
                        
                    
                        <Col>
                        <Button onClick={this.handleCreateStudents}>Create Student Credentials</Button>
                        {this.state.displayMakeStudent? <AddStudentForm makeStudent={this.makeStudent}/> : null}
                        </Col>
                    </Row>
                    <Row>
                        <StudentList students={this.state.students} 
                        //  handleRemoveStudent={this.handleRemoveStudent}
                        />
                    </Row>
                </Container>
            </div>
        )
    }
}

export default StudentPage

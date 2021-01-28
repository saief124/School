import React from 'react'
import StudentContainer from './Containers/StudentContainer'
import AssignmentForm from './Containers/AssignmentForm'
import { Container, Row, Col } from 'react-bootstrap';

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


    handleMakeNotes=(course)=>{
        let newBool=!this.state.displayAssignment
        this.setState({displayAssignment: newBool})
        this.setState({selectedCA: course})        
    }

    makeNotes=(note)=>{
        const newNote={
            my_assignment:note.assignment,
            my_course_name:note.course_name
        }
        
        fetch('http://localhost:3000/notes',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'Auth-Key': localStorage.getItem('student_auth_key')
            },
            body: JSON.stringify(newNote)   
        }).then(res=>res.json())
        .then(courseObj=> {
            
            if (courseObj["errors"]){
                alert(courseObj["errors"])
            }
            else{
                alert("Note Created")
            }})        
        .catch(error=>alert(error))
        let newBo=!this.state.displayAssignment
        this.setState({displayAssignment:newBo})        
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
                <Row>
                    <Col>
                    <h2 style={fontstyle}>Welcome {this.state.firstname} {this.state.lastname}</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    {this.state.displayAssignment?
                    <AssignmentForm selectedCA={this.state.selectedCA} makeNotes={this.makeNotes}/>
                    : null}
                    </Col>
                </Row>
                <Row><Col>
                <StudentContainer courses={this.state.courses} handleMakeNotes={this.handleMakeNotes}/>
                </Col>
                </Row>
                </Container>
            </div>
        )
    }








}

export default Students;
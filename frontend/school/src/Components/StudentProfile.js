import React, {useState, useEffect} from 'react';
import StudentNotesContainer from './Containers/StudentNotesContainer'
import {Container} from 'react-bootstrap'

function StudentProfile() {
    const [notes, setNotes]=useState([])
    const [counter, setCounter]=useState(0)
    
    useEffect(()=>{
      fetchNotes()
    },[])

    useEffect(()=>{
       fetchNotes()
    },[counter])

    const fetchNotes=()=>{
        fetch('http://localhost:3000/notes',{
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                'Auth-Key': localStorage.getItem('student_auth_key')
            }
        }).then(res=>res.json())
        .then(ob=>setNotes(ob))
    }

    const deleteNote=(note)=>{
        
        fetch(`http://localhost:3000/notes/${note.id}`,{
            method: 'DELETE',
            headers:{
                'Content-Type': 'application/json',
                'Auth-Key': localStorage.getItem('student_auth_key')
            }   
        })
        .then(res=>res.json())
        .then(message=>{ alert(message["msg"])
        setCounter(counter+1)        
        }).catch(error=>alert(error))      
       
    }
    const bkgrnd={
        backgroundColor:"#EF8354",
        fontFamily: "Calibri",
        color: "#780208",        
    }
        
    return (
        <div> 
            <Container style={bkgrnd}  fluid > 
            <h2>Your Notes</h2>  
            <StudentNotesContainer notes={notes} deleteNote={deleteNote}/>
            </Container>             
        </div>
    );
}

export default StudentProfile;
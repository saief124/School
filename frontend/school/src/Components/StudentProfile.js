import React, {useState, useEffect} from 'react';
import StudentNotesContainer from './Containers/StudentNotesContainer'

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
        // let array = notes;        
        // let i = array.indexOf(note);
        //     if (i > -1) {
        //         array.splice(i, 1);
        //     }        
    //    setNotes(array)
        }).catch(error=>alert(error))      
       
    }
        
    return (
        <div>            
            <StudentNotesContainer notes={notes} deleteNote={deleteNote}/>            
        </div>
    );
}

export default StudentProfile;
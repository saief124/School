import React, {useState, useEffect} from 'react';
import StudentNotesContainer from './Containers/StudentNotesContainer'
function StudentProfile() {
    const [notes, setNotes]=useState(()=>{
        return []})
    useEffect(()=>{
        fetch('http://localhost:3000/notes',{
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                'Auth-Key': localStorage.getItem('student_auth_key')
            }
        }).then(res=>res.json())
        .then(ob=>setNotes(ob))
    },[])
    return (
        <div>
            
            <StudentNotesContainer notes={notes}/>
            
        </div>
    );
}

export default StudentProfile;
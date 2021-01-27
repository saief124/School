import React from 'react'
import StudentNotes from './StudentNotes'

function StudentNotesContainer(props) {

    return (
        <div>
            
            {props.notes.map(note=>
                <StudentNotes
                key={note.id}
                note={note}
                deleteNote={props.deleteNote}/>)}
        </div>
    )
}

export default StudentNotesContainer

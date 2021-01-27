import React from 'react'
import StudentNotes from './StudentNotes'

function StudentNotesContainer(props) {

    return (
        <div>
            <h3>My Notes</h3>
            {props.notes.map(note=>
                <StudentNotes
                key={note.id}
                note={note}/>)}
        </div>
    )
}

export default StudentNotesContainer

import React from 'react'
import StudentTable from './StudentTable'
function StudentList(props) {
    return (
        <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Firstname</th>
          <th scope="col">Lastname</th>
          <th scope="col">Email</th>
          {/* <th scope="col">Remove</th> */}
        </tr>
      </thead>
      <tbody>
        {
          props.students.map(student => (
            <StudentTable student={student}
              key={student.id}
              // handleRemoveStudent={props.handleRemoveStudent}
               />
          ))
        }
      </tbody>
    </table>
    )
}

export default StudentList

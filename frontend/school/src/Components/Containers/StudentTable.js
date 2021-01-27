import React from 'react'

function StudentTable(props) {
    const { firstname, lastname, email } = props.student
    return (
        <tr>
      <td>{firstname}</td>
      <td>{lastname}</td>
      <td>{email}</td>
      {/* <td>
        <button onClick={() => props.handleRemoveStudent(props.student)} type="button" className="btn btn-danger">
          🅇
        </button>
      </td> */}
    </tr>
    )
}

export default StudentTable

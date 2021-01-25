import React, {useState} from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function AssignmentEditor(props) {
    const [text, setText] = useState(()=>{
        
        return props.assignment
     })
    return (
        <div>
               <div className="editor">
                    <CKEditor editor={ClassicEditor} data={text} onChange={(event, editor)=>{
                        const data= editor.getData()
                        setText(data)
                        props.getAssignmentData(data)
                    } }/>
                </div>
        </div>
    )
}

export default AssignmentEditor

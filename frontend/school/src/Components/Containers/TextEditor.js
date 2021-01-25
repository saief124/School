import React, {useState} from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


function TextEditor(props) {
     const [text, setText] = useState(()=>{
        
        return props.url
     })
    return (
        <div>
               <div className="editor">
                    <CKEditor editor={ClassicEditor} data={text} onChange={(event, editor)=>{
                        const data= editor.getData()
                        setText(data)
                        props.gettextdata(data)
                    } }/>
                </div>
              
        </div>
    )
}
export default TextEditor
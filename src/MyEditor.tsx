import React, {useRef, useState} from 'react'
import {Editor} from "@tinymce/tinymce-react";

import './MyEditor.css';

const tableString = `
    <table>
    <thead>
    <tr>
    <th>a</th>
    <th>b</th>
    <th>c</th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td>a-content</td>
    <td>b-contetn</td>
    <td>c-contetn</td>
    </tr>
    <tr>
    <td>aa-contetn</td>
    <td colspan="2">bb-content</td>
    </tr>
    </tbody>`

const MyEditor = () => {

    const ref=useRef<Editor|null>(null);

    const [value,setValue] = useState(tableString);

    return(
        <Editor
            id="123"
            onEditorChange={(content)=>{
                setValue(content)
            }}
            value={value}
            ref={ref}
            init={{
                plugins: "table",
                toolbar: " undo redo | tabledelete tableinsertrowbefore tableinsertrowafter tabledeleterow tableinsertcolbefore tableinsertcolafter tabledeletecol | removeformat | alignleft aligncenter alignright alignjustify | outdent indent | bold italic | link | print preview media fullpage",
                menubar: false,
                branding: false,
                statusbar: false,
            }}
            onBlur={()=>{
                console.log(value)
            }}
        />
    )
}

export {MyEditor};

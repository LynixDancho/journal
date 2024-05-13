import React from 'react'
import { Bold,Strikethrough,Italic,List,ListOrdered,Heading2,Underline,Quote,Undo,Redo,Code, } from 'lucide-react'
import {type Editor} from "@tiptap/react"
type Props ={
    editor:Editor |null;
    content:string


}
function Toolbar({editor , content} : Props) {
  return (
    <div>Toolbar</div>
  )
}

export default Toolbar
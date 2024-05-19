import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image'
import Link from "@tiptap/extension-link";
import Underline from "@tiptap/extension-underline";

import React, { useEffect, useState } from 'react'

export default async function  Reader({article,User}){
  const [editable, setEditable] = useState(false)
  const text = await article?.attributes?.Bbody
  const editor = useEditor({

    editable,
    content: `${text}`
      ,
    extensions: [StarterKit,
        Link.configure({  
          openOnClick: false,
          autolink: true,
        }),
        Image.configure({
          allowBase64: true,
        }),
        Underline,],
  })

  useEffect(() => {
    if (!editor) {
      return undefined
    }

    editor.setEditable(editable)
  }, [editor, editable])

  if (!editor) {
    return null
  }

  return (
    <>
      <div className="checkbox">
        <input
          type="checkbox"
          id="editable"
          value={editable}
          onChange={event => setEditable(event.target.checked)}
        />
        <label htmlFor="editable">editable</label>
      </div>
      <EditorContent editor={editor} />
    </>
  );
}
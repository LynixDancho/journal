"use client";
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Link from "@tiptap/extension-link";
import Underline from "@tiptap/extension-underline";
import React, { useEffect, useState } from 'react'

function ReaderTipTap({ article }) {
  const [editable, setEditable] = useState(false)
  const [content, setContent] = useState('')

  useEffect(() => {
    if (article && article.attributes && article.attributes.Bbody) {
      setContent(article.attributes.Bbody)
    }
  }, [article])

  console.log("From tiptap reader", article)

  const editor = useEditor({
    editable,
    content: `${article.attributes.Bbody}`,
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: false,
        autolink: true,
      }),
      Image.configure({
        allowBase64: true,
      }),
      Underline,
    ],
  })

  useEffect(() => {
    if (editor) {
      editor.setEditable(editable)
    }
  }, [editor, editable])

  if (!editor) {
    return <div>Loading editor...</div>
  }

  return (
    <>
      <div className="checkbox">
        <input
          type="checkbox"
          id="editable"
          checked={editable}
          onChange={event => setEditable(event.target.checked)}
        />
        <label htmlFor="editable">editable</label>
      </div>
      <EditorContent editor={editor} />
    </>
  )
}

export default ReaderTipTap

import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Link from "@tiptap/extension-link";
import Underline from "@tiptap/extension-underline";
import React, { useEffect, useState } from 'react';

export default function Reader({ article, User }) {
  const [editable, setEditable] = useState(false);
  const [content, setContent] = useState(null);

  useEffect(() => {
    if (article && article.attributes && article?.attributes.Bbody) {
      setContent(article.attributes.Bbody);
    }
  }, [article]);

  const editor = useEditor({
    editable,
    content: `${content}` || '', // Ensure the editor is initialized with content only when it's available
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
  });

  useEffect(() => {
    if (editor) {
      editor.setEditable(editable);
    }
  }, [editor, editable]);

  if (!article) {
    return <div>Loading article...</div>;
  }

  if (!editor) {
    return <div>Loading editor...</div>;
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
  );
}

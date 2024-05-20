"use client";
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import Underline from '@tiptap/extension-underline';
import React, { useEffect, useState } from 'react';
import "../this_area.css"
import { useUser } from "@clerk/nextjs";

function ReaderTipTap({ article}) {
  const [editable, setEditable] = useState(false);
  const [content, setContent] = useState('');
  const [content1, setContent1] = useState('');
  const { isLoaded, isSignedIn, user } = useUser();
  const [hasLoggedUser, setHasLoggedUser] = useState(false);

  useEffect(() => {
    if (article && article.attributes && article.attributes.Bbody) {
      setContent(article.attributes.Bbody);
    }
  }, [article]);
  useEffect(() => {
    if (!hasLoggedUser && isLoaded && isSignedIn) {
      fetch(`http://localhost:1337/api/users?filters[email][$eq]=${user.primaryEmailAddress.emailAddress}`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    return response.json();
  })
  .then(users => {
    console.log('Users with email  :', users);
  })
  .catch(error => {
    console.error('Error fetching users:', error);
  });

       
    }
  }, [isLoaded, isSignedIn, hasLoggedUser]);
 

  const editor = useEditor({
    editable,
    content:  `${article.attributes.Bbody}`,
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

  if (!editor) {
    return <div className="m-10">Loading editor...</div>;
  }

  return (
    <div className="ReaderTipTapthings">
      <div className="mb-5">
        <input
        className="relative float-left -ms-[1.5rem] me-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-secondary-500 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ms-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ms-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent rtl:float-right dark:border-neutral-400 dark:checked:border-primary dark:checked:bg-primary"
          type="checkbox"
          id="editable"
          checked={editable}
          onChange={event => setEditable(event.target.checked)}
        />
        <label htmlFor="editable">editable</label>
      </div>
      <EditorContent editor={editor} />
    </div>
  );
}

export default ReaderTipTap;

"use client";
import { useRouter } from 'next/navigation'

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Underline from "@tiptap/extension-underline";
import React, { useEffect, useState } from "react";
import "../this_area.css";
import { useUser } from "@clerk/nextjs";

function ReaderTipTap({ article }) {
  const [editable, setEditable] = useState(false);
  const [content, setContent] = useState("");
  const { isLoaded, isSignedIn, user } = useUser();
  const [hasLoggedUser, setHasLoggedUser] = useState(false);
  const [editorComment, setEditorComment] = useState();
  
  
  

  useEffect(() => {
    if (article && article.attributes && article.attributes.Bbody) {
      setContent(article);
  
    }
  }, [article]);
  useEffect(() => {
    if (!hasLoggedUser && isLoaded && isSignedIn) {
      fetch(
        `http://localhost:1337/api/users?filters[email][$eq]=${user.primaryEmailAddress.emailAddress}`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch users");
          }
          return response.json();
        })
        
        .catch((error) => {
          console.error("Error fetching users:", error);
        });
    }
  }, [isLoaded, isSignedIn, hasLoggedUser]);
 

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
  });

  useEffect(() => {
    if (editor) {
      editor.setEditable(editable);
      const handleUpdate = () => {
        const html = editor.getHTML();
        setEditorComment(html);
      };
      editor.on("update", handleUpdate);

      return () => {
        editor.off("update", handleUpdate);
      };
    }
  }, [editor, editable]);

 
  if (!editor) {
    return <div className="flex justify-center h-screen w-full items-center">  <l-waveform size="35" stroke="3.5" speed="1" color="black"></l-waveform></div>;
  }
 

  const handleClick = async (event) => {
     event.stopPropagation();
     const article = {
      data: {
        ReviewApproved: true,
        },
    };
     
    try {
      const response = await fetch(`http://localhost:1337/api/articles/${content.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(article),
      });

      if (!response.ok) {
        throw new Error("Failed to create article");
      }

      alert("Article Sent to the Editor  successfully!");
    } catch (error) {
      console.error("Error creating article:", error);
    }
    };

  

  return (
    <div className="ReaderTipTapthings w-[100%]">
      
        <div className='mr-5' >
          <div className="mb-5  flex justify-end">
           
            <div class="flex   ">
        <div>
       
        <button onClick={handleClick} className="  rounded-md bg-green-500  px-5 py-2.5 text-sm font-medium text-black transition hover:bg-teal-700 ml-5 group cursor-pointer outline-none" title="Add New">
        Send to the Editor
        </button>
      
          
</div>
       
</div>
          </div>
      
        </div>
      

    <div className="w-full ml-1 px-0">
      <EditorContent style={{ whiteSpace: "pre-line" }} editor={editor} />
    </div>
     
    <div>


    </div>
    
    </div>
  );
  
}

export default ReaderTipTap;

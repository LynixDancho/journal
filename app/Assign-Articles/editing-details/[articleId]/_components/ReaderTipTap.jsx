"use client";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Underline from "@tiptap/extension-underline";
import React, { useEffect, useState } from "react";
import "../this_area.css";
import { useUser } from "@clerk/nextjs";
import { waveform } from "ldrs";

function ReaderTipTap({ article }) {
  const [editable, setEditable] = useState(false);
  const [content, setContent] = useState("");
  const { isLoaded, isSignedIn, user } = useUser();
  const [hasLoggedUser, setHasLoggedUser] = useState(false);
  const [editorComment, setEditorComment] = useState();


  const [clicked, setClicked] = useState(false);
 
  waveform.register();

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

   console.log(editorComment)

  if (!editor) {
    return  <div className="flex justify-center h-screen w-full items-center">  <l-waveform size="35" stroke="3.5" speed="1" color="black"></l-waveform></div>;
  }
  const handleClick = async (event) => {
     event.stopPropagation();
     const article = {
      data: {
         Bbody: editorComment,
         isPublished : true,  
         IsSent : true 
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

      alert("Article Published successfully!");
    } catch (error) {
      console.error("Error creating article:", error);
    }
    console.log(article)
    setClicked(true);
    console.log('Button clicked!');
   };

  const handleUnpublishing= async (event) => {
    event.stopPropagation();
    const article = {
     data: {
        Bbody: editorComment,
        isPublished : false,  
        IsSent : false 
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

     alert("Article Sent to revise !");
   } catch (error) {
     console.error("Error creating article:", error);
   }
   console.log(article)
   setClicked(true);
   console.log('Button clicked!');
  }

  return (
    <div className="ReaderTipTapthings">
      
        <div >
          <div className="mb-5 ">
           
          </div>
        </div>
        <div class="flex items-center justify-center sm:justify-start md:justify-end min-w-[300px] sm:min-w-[400px] md:min-w-[600px] lg:min-w-[800px] xl:min-w-[1000px]">
         
    
</div>

     
      <EditorContent editor={editor} />
    </div>
  );
}

export default ReaderTipTap;

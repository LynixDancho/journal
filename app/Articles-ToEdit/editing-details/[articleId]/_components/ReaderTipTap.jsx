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
            <input
              className="relative float-left -ms-[1.5rem] me-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-secondary-500 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ms-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ms-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent rtl:float-right dark:border-neutral-400 dark:checked:border-primary dark:checked:bg-primary"
              type="checkbox"
              id="editable"
              checked={editable}
              onChange={(event) => setEditable(event.target.checked)}
            />
            <label htmlFor="editable" className=" center">
              editable
            </label>
          </div>
        </div>
        <div class="flex items-center justify-center sm:justify-start md:justify-end min-w-[300px] sm:min-w-[400px] md:min-w-[600px] lg:min-w-[800px] xl:min-w-[1000px]">
        <div>
       
        <button onClick={handleClick} className="ml-5 group cursor-pointer outline-none" title="Add New">
          <svg
            className="mb-5  stroke-teal-500 fill-none group-hover:fill-teal-800 group-active:stroke-teal-200 group-active:fill-teal-600 group-active:duration-0 duration-300"
            viewBox="0 0 24 24"
            height="50px"
            width="50px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeWidth="1.5"
              d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
            ></path>
            <path strokeWidth="1.5" d="M8 12H16"></path>
            <path strokeWidth="1.5" d="M12 16V8"></path>
          </svg>
        </button>
          
            </div>
        <button
        onClick={handleUnpublishing}
  title="Add New"
  className="ml-5 mb-4 group cursor-pointer outline-none "
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="50px"
    height="50px"
    viewBox="0 0 24 24"
    className="mb-2 stroke-red-400 fill-none group-hover:fill-red-800 group-active:stroke-red-200 group-active:fill-red-600 group-active:duration-0 duration-300"
  >
    <path
      d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
      strokeWidth="1.5"
    ></path>
    <path d="M8 12H16" strokeWidth="1.5"></path>
    <path d="M12 16V8" strokeWidth="1.5"></path>
  </svg>
</button>
</div>

     
      <EditorContent editor={editor} />
    </div>
  );
}

export default ReaderTipTap;

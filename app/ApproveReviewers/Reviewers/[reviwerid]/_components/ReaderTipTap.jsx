"use client";
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import Underline from '@tiptap/extension-underline';
import React, { useEffect, useState } from 'react';
import "../this_area.css"
import { useUser } from "@clerk/nextjs";
import { waveform } from "ldrs";

function ReaderTipTap({ Appeal, User}) {
  const [editable, setEditable] = useState(false);
   const { isLoaded, isSignedIn, user } = useUser();
  const [hasLoggedUser, setHasLoggedUser] = useState(false);
  const [userData, setUserData] = useState(null);

  waveform.register();
 
  useEffect(() => {
    if (Appeal && Appeal[0].attributes && Appeal[0].attributes.FurtherInformation) {
     }
  }, [Appeal]);
  useEffect(() => {
    if (!hasLoggedUser && isLoaded && isSignedIn) {
      fetch(`http://localhost:1337/api/users?filters[email][$eq]=${user.primaryEmailAddress.emailAddress}`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
     return response.json();

  })
    .then(data => {
          // Store the fetched data in the state variable
          setUserData(data);
        })
  .catch(error => {
    console.error('Error fetching users:', error);
  });

       
    }
  }, [isLoaded, isSignedIn, hasLoggedUser]);
 
if(Appeal){
  console.log(userData)
}
  const editor = useEditor({
    editable,
    content:  `${Appeal[0].attributes.FurtherInformation}`,
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

  const handleClick = async (event) => {
    event.stopPropagation();
    const url = `http://localhost:1337/admin/content-manager/collection-types/plugin::users-permissions.user/${userData[0].id}`;
    window.open(url, '_blank');
    
   
   };

   const handleDeletion = async (event) => {
    event.stopPropagation();
 
    
   try {
     const response = await fetch(`http://localhost:1337/api/appeals/${Appeal[0].id}`, {
       method: "Delete",
     
     });

     if (!response.ok) {
       throw new Error("Failed to create article");
     }
     window.location.href = "http://localhost:3000/ApproveReviewers";

     alert("The appeal is deleted!");

   } catch (error) {
     console.error("Error creating article:", error);
   }
   };


  if (!editor) {
    return <div className="flex justify-center h-screen w-full items-center">  <l-waveform size="35" stroke="3.5" speed="1" color="black"></l-waveform></div>;
  }

  return (
    <div className="ReaderTipTapthings mt-10">
       
       <div >
          <div className="mb-5  flex">
           
            <div class="flex   sm:justify-start md:justify-end min-w-[300px] sm:min-w-[400px] md:min-w-[600px] lg:min-w-[800px] xl:min-w-[1000px]">
        <div>
       
        <button onClick={handleClick} className="  rounded-md bg-green-500  px-5 py-2.5 text-sm font-medium text-black transition hover:bg-teal-700 ml-5 group cursor-pointer outline-none" title="Add New">
        Approve 
        </button>
        
        <button onClick={handleDeletion} className="  rounded-md bg-red-500  px-5 py-2.5 text-sm font-medium text-black transition hover:bg-teal-700 ml-5 group cursor-pointer outline-none" title="Add New">
        Delete it 
        </button>
      
          
</div>
       
</div>
          </div>
      
        </div>
      {/* <div className="mb-5">
        <input
        className="relative float-left -ms-[1.5rem] me-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-secondary-500 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ms-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ms-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent rtl:float-right dark:border-neutral-400 dark:checked:border-primary dark:checked:bg-primary"
          type="checkbox"
          id="editable"
          checked={editable}
          onChange={event => setEditable(event.target.checked)}
        />
        <label htmlFor="editable">editable</label>
      </div> */}
      <EditorContent editor={editor} />
    </div>
  );
}

export default ReaderTipTap;

"use client";
import React, { useEffect, useState, Component } from "react";
import dynamic from "next/dynamic";
import { DatePicker, Upload, Select } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useUser } from "@clerk/nextjs";
import { waveform } from "ldrs";

const Tiptap = dynamic(() => import("./TipTap"), { ssr: false });


async function fetchUserIdByEmail(email) {
  const response = await fetch(`http://localhost:1337/api/users?filters[email][$eq]=${email}`);
  const users = await response.json();
  console.log(users[0])
    return users[0].id;  
   
}
function Todo() {
  waveform.register();

  const { isLoaded, isSignedIn, user } = useUser();
  const [hasLoggedUser, setHasLoggedUser] = useState(true);
  const [isTiptapLoaded, setIsTiptapLoaded] = useState(false);
  

 const [Description , setArticleDescription] =useState("")
   const [articleName, setArticleName] = useState("");
  const [selectValue, handleSelectChange] = useState(null);
   const [dateData, handleDateChange] = useState(null);
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [imageId, setImageId] = useState(null);

   const handleContentChange = (newContent) => {
    setContent(newContent);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const handleImageUpload = async () => {
    if (!file) return;

    setIsUploading(true);

     

    const formData = new FormData();
    formData.append('files', file);

    try {
      const response = await fetch('http://localhost:1337/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Image upload failed');
      }

      const result = await response.json();
      setImageId(result[0]); // Save the uploaded image ID
      console.log('Image uploaded successfully:', result[0]);
    } catch (error) {
      console.error('Error uploading image:', error);
    } finally {
      setIsUploading(false);
    }
  };




  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!articleName || !content || !selectValue || !dateData) {
      alert("Please fill in all fields.");
      return;
    }

    const userId = await fetchUserIdByEmail(user.primaryEmailAddress.emailAddress);

    const article = {
      data: {
        Title: articleName,
        Bbody: content,
        UserName: user.fullName,
        Email: user.primaryEmailAddress.emailAddress,
        Type: selectValue,
        Description_Of_The_Research:Description,

        DateOfSubmitting: dateData.$d, 
        ImagesOfResearch:imageId,
        isPublished : false,   
        users_permissions_user: userId 
      },
    };
    console.log(article);

 
    try {
      const response = await fetch("http://localhost:1337/api/articles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(article),
      });

      if (!response.ok) {
        throw new Error("Failed to create article");
      }

      alert("Article created successfully!");
    } catch (error) {
      console.error("Error creating article:", error);
    }
  };

   useEffect(() => {
    import("./TipTap").then(() => {
      setIsTiptapLoaded(true);
    });
  }, []);

  if (!isTiptapLoaded) {
    return (
      
       <div className="flex justify-center h-screen w-full items-center">  <l-waveform size="35" stroke="3.5" speed="1" color="black"></l-waveform></div>
      
    );
  }

  return (
    <div className="flex justify-center"    >
      <form
        suppressHydrationWarning
        className="max-w-3xl w-full grid place-items-center pt-10 mb-10
        "
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col ml-3 rounded-tl-md mb-2 rounded-tr-md align-top p-14 px-4 py-3 justify-start rounded-bt-md border-b border-r border-t border-l border-gray-700 text-black items-start w-full gap-3 font-medium text-[16px] pt-4 rounded-bl-md rounded-br-md outline-none">
          <h1 className=" ">Article Post</h1>

          <div className=" ">
            <label className=" " htmlFor="articleName">
              Article Name:
            </label>
            <input
              className="border border-t-gray-700 border-gray-700 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
              type="text"
              id="articleName"
              value={articleName}
              onChange={(e) => setArticleName(e.target.value)}
              placeholder="Article Name"
            />
            
          </div>
          <div className="flex align-top">  <label className="mr-1 mb-2" htmlFor="Description">
               Description  :
            </label>
            <textarea
              className="border border-t-gray-700 border-gray-700 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
               id="Description"
              value={Description}
              onChange={(e) => setArticleDescription(e.target.value)}
              placeholder="  Description  :"
            /></div>
          <div className="ml-2 mb-6">
            <label className="mr-1 mb-2" htmlFor="datePicker">
              Date Of Edition:
            </label>
            <DatePicker onChange={handleDateChange} />
          </div>
          <div className="flex ml-2 ">
            <label className="mr-2 mb-2" htmlFor="selectType">
              Type
            </label>
            <Select
              className="w-[400px]"
              onChange={handleSelectChange}
              placeholder="Select article type"
            >
              <Select.Option value="Physics">Physics</Select.Option>
              <Select.Option value="Chemistry">Chemistry</Select.Option>
              <Select.Option value="Biology">Biology</Select.Option>
              <Select.Option value="Earth Sciences">
                Earth Sciences
              </Select.Option>
              <Select.Option value="Environmental Sciences">
                Environmental Sciences
              </Select.Option>
              <Select.Option value="Astronomy and Astrophysics">
                Astronomy and Astrophysics
              </Select.Option>
              <Select.Option value="Mathematics">Mathematics</Select.Option>
              <Select.Option value="Computer Science">
                Computer Science
              </Select.Option>
              <Select.Option value="Statistics">Statistics</Select.Option>
              <Select.Option value="Mechanical Engineering">
                Mechanical Engineering
              </Select.Option>
              <Select.Option value="Electrical Engineering">
                Electrical Engineering
              </Select.Option>
              <Select.Option value="Civil Engineering">
                Civil Engineering
              </Select.Option>
              <Select.Option value="Computer Engineering">
                Computer Engineering
              </Select.Option>
              <Select.Option value="Aerospace Engineering">
                Aerospace Engineering
              </Select.Option>
              <Select.Option value="Chemical Engineering">
                Chemical Engineering
              </Select.Option>
              <Select.Option value="Medicine">Medicine</Select.Option>
              <Select.Option value="Pharmacology">Pharmacology</Select.Option>
              <Select.Option value="Public Health">Public Health</Select.Option>
              <Select.Option value="Nursing">Nursing</Select.Option>
              <Select.Option value="Dentistry">Dentistry</Select.Option>
              <Select.Option value="Veterinary Science">
                Veterinary Science
              </Select.Option>
            </Select>
          </div>
          
          <div className="flex">
           <input type="file"   onChange={handleFileChange} />
        <button className="hidden rounded-md mr-5 bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-600/75 sm:block" onClick={handleImageUpload} disabled={isUploading}>
          {isUploading ? 'Uploading...' : 'Upload Image'}
        </button>
        </div>
        </div>
      
        <Tiptap

          content={content}
          onChange={(newContent) => handleContentChange(newContent)}
        />
 
        
      </form>
    </div>
  );
}

export default Todo;

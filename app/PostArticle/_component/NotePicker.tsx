"use client";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Tiptap from "./TipTap";
 import { DatePicker, Upload, Form, Select } from "antd";
import { PlusOutlined } from "@ant-design/icons";
 const   Todo = () => {
  const [formData, setFormData] = useState(null);
  const [articleName, setArticleName] = useState("");
  const [SelectValue, handleSelectChange] = useState(null);
  const [articlePicture, ArticleCover] = useState(null);
  const [Datedata, handleChange] = useState(null);

 
 
  const [content, setContent] = useState<string>("");

  const handleContentChange = (reason: any) => {
    setContent(reason);
  };
  const handleSubmit = async(e:any) =>{
    e.preventDefault();

    console.log(content)



  }
// All u gotta do Now is check the if THe Strapi accepts this Body It sure maybe does idk 


  // const handleSubmit = async (e: any) => {
  //   e.preventDefault();
  //   console.log(content)
  //   const Article = {
  //     data:{
        
        

  //     Title: articleName,
  //     Body:  content,

  //     type:{data :{Type:SelectValue}} ,
  //     articlePicture: articlePicture,
  //     DateOfSubmitting: Datedata.$d,
  //     id: uuidv4(),
    
  //    }};

 
     
  //   setFormData(Article);
   
    
 
   
 
  //    if (Article) {
    
  //     try {
  //       const response = await  fetch("http://localhost:1337/api/articles", {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },

  //         body: JSON.stringify(Article),
  //       });
    
  //       if (!response.ok) {
  //         throw new Error('Failed to create article');
  //       }
    
  //       console.log('Article created successfully!');
  //     } catch (error) {
  //       console.error('Error creating article:', error);
  //     }
  //   };
  //   }

 
  return (
    <div>
      <form
        suppressHydrationWarning
        onSubmit={handleSubmit}
        className="max-w-3xl  w-full grid place-items-center  pt-10 mb-10"
      >
        <div className=" 
  flex flex-col ml-3 p-14 px-4 py-3 justify-start rounded-bt-md border-b border-r border-t border-l border-gray-700 text-black items-start w-full gap-3 font-medium text-[16px] pt-4 rounded-bl-md rounded-br-md outline-none">
          <h1 className="mb-2 ml-2">Article Post</h1>

          <div className="ml-2 mb-6">
            <label className="mr-1 mb-2" htmlFor="articleName">
              Article Name:
            </label>
            <input
              className="border border-t-gray-700 border-gray-700 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
              type="text"
              id="articleName"
              value={articleName}
              onChange={(e) => setArticleName(e.target.value)}
              required
              placeholder="Article Name"
            />
          </div>
          <div className="ml-2 mb-6">
            <label className="mr-1 mb-2" htmlFor="articleName">
              Date time:
            </label>

            <DatePicker onChange={handleChange} />
          </div>
          <div className="flex ml-2 ">
            <label className="mr-2 mb-2"  htmlFor="articleName">
              Type
            </label>

            <Select className="w-[400px]" onChange={handleSelectChange}>
              <Select.Option value="Physics">Physics</Select.Option>
              <Select.Option value="Chemistry">Chemistry</Select.Option>
              <Select.Option value="Biology">Biology</Select.Option>
              <Select.Option value="Earth Sciences ">
                Earth Sciences{" "}
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
                {" "}
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

          <Upload
            onChange={ArticleCover}
            className="ml-3"
            action="/upload.do"
            listType="picture-card"
          >
            <button
              style={{
                border: 0,
                background: "none",
              }}
              type="button"
            >
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Cover For Article
              </div>
            </button>
          </Upload>
         
        </div>

        <Tiptap
          content={content}
          onChange={(newContent: string) => handleContentChange(newContent)}
        />
      </form>
    </div>
  );
};

export default Todo;

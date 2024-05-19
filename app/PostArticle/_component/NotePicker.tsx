"use client";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import dynamic from "next/dynamic";
import { DatePicker, Upload, Select } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { mirage } from 'ldrs'
import { useUser } from "@clerk/nextjs";

const Tiptap = dynamic(() => import("./TipTap"), { ssr: false });

function Todo() {
  const { isLoaded, isSignedIn, user } = useUser();
  const [hasLoggedUser, setHasLoggedUser] = useState(false);
  const [isTiptapLoaded, setIsTiptapLoaded] = useState(false);

  useEffect(() => {
    if (!hasLoggedUser && isLoaded && isSignedIn) {
      console.log(user);
      setHasLoggedUser(true);
    }
  }, [isLoaded, isSignedIn, hasLoggedUser]);
  mirage.register()

  const [formData, setFormData] = useState(null);
  const [articleName, setArticleName] = useState("");
  const [selectValue, handleSelectChange] = useState(null);
  const [articlePicture, setArticlePicture] = useState(null);
  const [dateData, handleDateChange] = useState(null);
  const [content, setContent] = useState("");

  const handleContentChange = (newContent) => {
    setContent(newContent);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!articleName || !content || !selectValue || !dateData) {
      alert("Please fill in all fields.");
      return;
    }

    const article = {
      data: {
        Title: articleName,
        Bbody: content,
        UserName: user.fullName,
        Email: user.primaryEmailAddress.emailAddress,
        Type: selectValue,
        articlePicture: articlePicture,
        DateOfSubmitting: dateData.$d, // assuming dateData is a moment object
        id: uuidv4(),
        publishedAt: null,
      },
    };

    setFormData(article);

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

  // Check if Tiptap is loaded
  useEffect(() => {
    import("./TipTap").then(() => {
      setIsTiptapLoaded(true);
    });
  }, []);

  if (!isTiptapLoaded) {
    return <div className="flex flex-center justify-center mt-10 mb-10">
          
    
     <l-mirage
      size="150"
      speed="2.5" 
      color="black" 
    ></l-mirage>
      </div>
  }

  return (
    <div>
      <form
        suppressHydrationWarning
        className="max-w-3xl w-full grid place-items-center pt-10 mb-10"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col ml-3 p-14 px-4 py-3 justify-start rounded-bt-md border-b border-r border-t border-l border-gray-700 text-black items-start w-full gap-3 font-medium text-[16px] pt-4 rounded-bl-md rounded-br-md outline-none">
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
            <label className="mr-1 mb-2" htmlFor="datePicker">
              Date Of Edition:
            </label>
            <DatePicker   onChange={handleDateChange} />
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
              <Select.Option value="Earth Sciences">Earth Sciences</Select.Option>
              <Select.Option value="Environmental Sciences">Environmental Sciences</Select.Option>
              <Select.Option value="Astronomy and Astrophysics">Astronomy and Astrophysics</Select.Option>
              <Select.Option value="Mathematics">Mathematics</Select.Option>
              <Select.Option value="Computer Science">Computer Science</Select.Option>
              <Select.Option value="Statistics">Statistics</Select.Option>
              <Select.Option value="Mechanical Engineering">Mechanical Engineering</Select.Option>
              <Select.Option value="Electrical Engineering">Electrical Engineering</Select.Option>
              <Select.Option value="Civil Engineering">Civil Engineering</Select.Option>
              <Select.Option value="Computer Engineering">Computer Engineering</Select.Option>
              <Select.Option value="Aerospace Engineering">Aerospace Engineering</Select.Option>
              <Select.Option value="Chemical Engineering">Chemical Engineering</Select.Option>
              <Select.Option value="Medicine">Medicine</Select.Option>
              <Select.Option value="Pharmacology">Pharmacology</Select.Option>
              <Select.Option value="Public Health">Public Health</Select.Option>
              <Select.Option value="Nursing">Nursing</Select.Option>
              <Select.Option value="Dentistry">Dentistry</Select.Option>
              <Select.Option value="Veterinary Science">Veterinary Science</Select.Option>
            </Select>
          </div>

          <Upload
            onChange={(info) => setArticlePicture(info.file)}
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
          onChange={(newContent) => handleContentChange(newContent)}
        />

        <button
          type="submit"
          className="px-4 bg-sky-700 text-white py-2 rounded-md"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default Todo;

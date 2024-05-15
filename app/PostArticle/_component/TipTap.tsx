"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./Toolbar";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link"; // Import the Link extension
import { useState } from "react";
import {LinkModal} from "./Mondal"
 
const Tiptap = ({ onChange, content }: any) => {
  const [isLinkModalOpen, setIsLinkModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);



  const handleOpenLinkModal = (  ) => {
    setIsLinkModalOpen(true);

  };

  const handleInsertLink = (url, file,text) => {
     setIsLinkModalOpen(false);
     setSelectedFile(file);

  };
  
  const handleChange = (newContent: string) => {
    onChange(newContent);
  };
  
  const editor = useEditor({
    extensions: [StarterKit, Link,Underline],
    editorProps: {
      attributes: { 
        class:
          "flex flex-col px-4 py-3 justify-start border-b border-r border-l border-gray-700 text-gray-400 items-start w-full gap-3 font-medium text-[16px] pt-4 rounded-bl-md rounded-br-md outline-none",
      },
    },
    onUpdate: ({ editor }) => {
      handleChange(editor.getHTML());
    },
  });

  return (
    <div className="w-full px-4">
          <LinkModal isOpen={isLinkModalOpen} onClose={() => setIsLinkModalOpen(false)} onInsertLink={handleInsertLink} />

          <Toolbar
        editor={editor}
        content={content}
        onOpenLinkModal={handleOpenLinkModal} // Pass the function to open the link modal
      />      <EditorContent style={{ whiteSpace: "pre-line" }} editor={editor} />
    </div>
  );
};

export default Tiptap;
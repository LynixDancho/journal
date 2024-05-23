import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import { useState } from "react";
import Toolbar from "./Toolbar";

const Tiptap = ({ onChange, content }) => {
  const [isLinkModalOpen, setIsLinkModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleOpenLinkModal = () => {
    setIsLinkModalOpen(true);
  };

  const handleChange = (newContent) => {
    onChange(newContent);
  };

  const editor = useEditor({
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
    editorProps: {
      attributes: {
        class:
          "flex flex-col line-clamp-3 px-4 py-3 justify-start border-b border-r border-l border-gray-700 text-black items-start w-full gap-3 font-medium text-[16px] pt-4 rounded-bl-md  rounded-br-md outline-none",
      },
    },
    onUpdate: ({ editor }) => {
      const htmlContent = editor.getHTML();
     
      handleChange(htmlContent );
    },
  });

 

  return (
    <div className="w-full ml-1 px-0">
      <Toolbar editor={editor} content={content} />
      <EditorContent style={{ whiteSpace: "pre-line" }} editor={editor} />
    </div>
  );
};

export default Tiptap;

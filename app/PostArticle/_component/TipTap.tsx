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
      Image,
      Underline,
    ],
    editorProps: {
      attributes: {
        class:
          "flex flex-col px-4 py-3 justify-start border-b border-r border-l border-gray-700 text-black items-start w-full gap-3 font-medium text-[16px] pt-4 rounded-bl-md rounded-br-md outline-none",
      },
    },
    onUpdate: ({ editor }) => {
      const htmlContent = editor.getHTML();
      const jsonData = convertHtmlToJson(htmlContent);
      handleChange(jsonData);
    },
  });

  const convertHtmlToJson = (html) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const body = doc.body;
    
    const convertNode = (node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        return {
          type: 'text',
          text: node.textContent,
        };
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        const obj = {
          type: node.tagName.toLowerCase(),
          children: Array.from(node.childNodes).map(convertNode),
        };

        if (node.tagName.toLowerCase() === 'img') {
          obj.image = {
            url: node.src,
            alternativeText: node.alt,
          };
        }

        return obj;
      }
    };

    return Array.from(body.childNodes).map(convertNode);
  };

  return (
    <div className="w-full ml-1 px-2">
      <Toolbar editor={editor} content={content} />
      <EditorContent style={{ whiteSpace: "pre-line" }} editor={editor} />
    </div>
  );
};

export default Tiptap;

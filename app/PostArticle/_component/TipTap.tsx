import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import { useState } from "react";
import Toolbar from "./Toolbar";
import TurndownService from 'turndown';
import { markdownToRichtext } from 'storyblok-markdown-richtext';

const Tiptap = ({ onChange, content }) => {
  const [isLinkModalOpen, setIsLinkModalOpen] = useState(false);

  const handleOpenLinkModal = () => {
    setIsLinkModalOpen(true);
  };

  const handleChange = (newContent) => {
    onChange(newContent);
  };

  const convertHtmlToJson = (html) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const body = doc.body;

    const turndownService = new TurndownService();
    const markdownContent = turndownService.turndown(body.innerHTML);

    const richtextJson = markdownToRichtext(markdownContent);
    handleChange(richtextJson);
    console.log(richtextJson);
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
      convertHtmlToJson(htmlContent);
    },
  });

  return (
    <div className="w-full ml-1 px-2">
      <Toolbar editor={editor} content={content} />
      <EditorContent style={{ whiteSpace: "pre-line" }} editor={editor} />
    </div>
  );
};

export default Tiptap;

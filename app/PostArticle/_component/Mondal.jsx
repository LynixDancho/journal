import React, { useState } from 'react';
import Modal from 'react-modal';

export const LinkModal = ({ isOpen, onClose, onInsertLink }) => {
    const [url, setUrl] = useState('');
    const [text, setText] = useState('');
    const [file, setFile] = useState(null);
  
    const handleInsert = () => {
      onInsertLink(url, text, file);
      onClose(); // Close the modal
    };
    const handleFileUpload = () => {
        if (file instanceof Blob) {
            // Convert the file to a data URL
            const reader = new FileReader();
            reader.onload = (event) => {
              const dataUrl = event.target.result;
        
              // Insert the file as an image into the editor's content
              editor.chain().focus().setImage({ src: dataUrl }).run();
            };
            reader.readAsDataURL(file);
          } else {
            console.error('Invalid file type. Expected Blob object.');
          }
        };
    const handleFileChange = (event) => {
      const selectedFile = event.target.files[0];
      setFile(selectedFile);
    };

  return (
    
    <Modal isOpen={isOpen} onRequestClose={onClose} style={{ content: { height:500,  padding: 20 } }}>
        <div > 
      <h2>Insert Link</h2>
      <label htmlFor="link-url">URL:</label>
      <input
        type="text"
        id="link-url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="border rounded p-2 mb-2 w-full"
      />
      <label htmlFor="link-text">Link Text (Optional):</label>
      <input
        type="text"
        id="link-text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border rounded p-2 w-full"
      />
      <label htmlFor="file-upload">Upload File:</label>
      <input
        type="file"
        id="file-upload"
        onChange={handleFileChange}
        className="border rounded p-2 w-full"
      />
      <div className="flex justify-end">
        <button className="bg-gray-300 text-gray-700 px-3 py-1 rounded mr-2" onClick={onClose}>
          Cancel
        </button>
        <button className="bg-sky-500 text-white px-3 py-1 rounded" onClick={handleInsert}>
          Insert Link
        </button>
        </div>
      </div>
    </Modal>
  );
};

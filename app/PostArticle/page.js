import React from 'react'
 import NotePicker from './_component/NotePicker'
 import FroalaEditor from 'froala-editor';

   async function PostArticle() {
    useEffect(() => {
      // Initialize Froala Editor
      const editor = new FroalaEditor('#example');
      return () => {
        editor.destroy(); // Cleanup when component unmounts
      };
    }, []);
  

   return (
    <div>
       <div id="example"></div>;
  <NotePicker/>
 </div>

 
  )
}

export default PostArticle
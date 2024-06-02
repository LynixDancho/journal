import React, { useEffect, useState } from 'react';
import { useUser } from "@clerk/clerk-react";

const Comment = ({ article, User }) => {
  const [commentText, setCommentText] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [comments, setComments] = useState([]);
  const [FetchedComment, setFetchedComments] = useState([]);
  const { isSignedIn, user, isLoaded } = useUser();
const[userr , setUser] = useState()
console.log(user)
  useEffect(()=>{
    const fetchArticleData = async () => {

      const response = await fetch(`http://localhost:1337/api/comments?populate=*&filters[ArticleId][$eq]=${article.id}`);
      const commeent = await response.json();
 
      setFetchedComments(commeent.data)
    }

    fetchArticleData()
  },[])

  useEffect(()=>{
    const whatsapp = async () => {

      const response = await fetch(`http://localhost:1337/api/users?populate=*&filters[email][$eq]=${user.primaryEmailAddress.emailAddress}`);
      const commeent = await response.json();
      console.log(commeent)
      setUser(commeent)
    }

    whatsapp()
  },[])
 
   const handleCommentChange = (event) => {
    setCommentText(event.target.value);
  };

   

  const handleSubmitComment = async (event) => {
    event.preventDefault();
    if (commentText.trim()) {
      const newComment = {
        data: {
          RecieverEmail: article.attributes.Email,
          Senderusername: userr[0].username,
          RecieverUsername: article.attributes.UserName,
          State: isChecked,
          Comment: commentText,
          ArticleId: article.id,
        },
      };

      try {
        const response = await fetch('http://localhost:1337/api/comments', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newComment),
        });

        if (!response.ok) {
          throw new Error('Failed to create comment');
        }

        const responseData = await response.json();

        setComments([
          ...comments,
          {
            text: commentText,
            checked: isChecked,
            id: responseData.data.id,
          },
        ]);

        setCommentText('');
        setIsChecked(false); // Reset the checkbox status after submission

        alert('Comment sent successfully!');
      } catch (error) {
        console.error('Error creating comment:', error);
      }
    } else {
      alert('Please enter a comment.');
    }
  };

  const handleDeleteComment = async (commentId, index) => {
    try {
      const response = await fetch(`http://localhost:1337/api/comments/${commentId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) {
        throw new Error('Failed to delete comment');
      }

      const updatedComments = [...comments];
      updatedComments.splice(index, 1);
      setComments(updatedComments);
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  };

  const renderComment = (text, index) => {
    return (
      <div key={index} style={{ overflow: 'hidden', maxHeight: '90px' }}>
        {text}
      </div>
    );
  };

  return (
    <div >
      <form onSubmit={handleSubmitComment}  >
       
        <textarea
          value={commentText}
          onChange={handleCommentChange}
          className="w-full p-1 border rounded focus:outline-none"
          rows="3"
          placeholder="Write a comment..."
        />
        <button type="submit" className="ml-2 mb-3 text-blue-500">
          Comment
        </button>
      </form>

      <div>
        {comments.map((comment, index) => (
          <div key={comment.id} className="mb-2 p-2 border rounded">
            <p> Editor : {userr[0].username}</p>
            <p>{renderComment(comment.text, index)}</p>
            <p>Status: {comment.checked ? "Author has Fixed it ": "Author Did Not Fix it "}</p>
            
            <button onClick={() => handleDeleteComment(comment.id, index)} className="ml-2 text-red-500">
              Delete
            </button>
          </div>
        ))}
       
      </div>
    </div>
  );
};

export default Comment;

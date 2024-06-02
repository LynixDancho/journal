import { useState, useEffect } from 'react';
import Comment from "./Comment"; // Adjust the path based on your directory structure
import { useUser } from "@clerk/clerk-react";

function Articleinfo({ article, User }) {
  const { isSignedIn, user, isLoaded } = useUser();
  const [FetchedComment, setFetchedComments] = useState([]);
  const [users, setData] = useState();

  if (!User) {
    return (
      <div className="flex justify-center h-screen w-full items-center">
        <l-waveform size="35" stroke="3.5" speed="1" color="black"></l-waveform>
      </div>
    );
  }

  useEffect(() => {
    const fetchArticleData = async () => {
      const response = await fetch(`http://localhost:1337/api/comments?populate=*&filters[ArticleId][$eq]=${article.id}`, {
        cache: 'no-store'
      });
      const commeent = await response.json();
      setFetchedComments(commeent.data);
    };

    fetchArticleData();
  }, [article.id]);

  const renderComment = (text, index) => {
    return (
      <div key={index} style={{ overflow: 'hidden', maxHeight: '90px' }}>
        {text}
      </div>
    );
  };

  const handleDeleteComment = async (commentId, index) => {
    try {
      const response = await fetch(`http://localhost:1337/api/comments/${FetchedComment[index].id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) {
        throw new Error('Failed to delete comment');
      }

      const updatedComments = [...FetchedComment];
      updatedComments.splice(index, 1);
      setFetchedComments(updatedComments); // Update the state with the remaining comments
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  };

  if (FetchedComment) {
    console.log(FetchedComment[0]?.attributes.State);
  }

  const targetEmail = User.email;
  const [matchedUser, setMatchedUser] = useState(null);
  const [comments, setComments] = useState([]);
  const [clicked, setClicked] = useState(false);

  const addComment = () => {
    const newComment = {
      id: Date.now(),
      text: "",
      checked: false,
    };
    setComments([...comments, newComment]);
  };

  useEffect(() => {
    const getArticles = async () => {
      const response = await fetch(`/api/ClientAvatar`);
      const userr = await response.json();
      setData(userr.data);
    };
    getArticles();
  }, []);

  useEffect(() => {
    if (users) {
      const matchUserByEmail = (email) => {
        return users.find(user =>
          user.emailAddresses && user.emailAddresses.some(e => e.emailAddress === email)
        );
      };

      const matched = matchUserByEmail(targetEmail);
      setMatchedUser(matched);
    }
  }, [users, targetEmail]);

  if (!users) return (
    <div className="flex justify-center h-screen w-full items-center">
      <l-waveform size="35" stroke="3.5" speed="1" color="black"></l-waveform>
    </div>
  );

  return (
    <>
      <div className='PictureAndBio'>
        <img
          src={matchedUser?.imageUrl}
          className="avatar shadow-lg"
          alt="Avatar"
        />

        <h1 className='SubmittedBy text-xl font-bold dark:text-white'>Submitted By : {User?.username}</h1>

        <div className="mb-4 mt-4">
          <button
            onClick={addComment}
            className="p-2 bg-green-500 text-white rounded-full"
          >
            + Add Comment
          </button>
        </div>

        <div className="mt-4">
          {comments.map((comment, index) => (
            <Comment
              key={comment.id}
              article={article}
              User={User} // Pass User prop to Comment
            />
          ))}
          {FetchedComment?.map((comment, index) => (
            <div key={comment.id} className="mb-2 p-2 border rounded">
              {!comment.attributes.isEditor ? (
                               <p>Reviewer: {comment.attributes.Senderusername}</p>

              ) : (           <p>Editor: {comment.attributes.Senderusername}</p>
            ) }

              <p>{renderComment(comment.attributes.Comment, index)}</p>
              <p>Status: {comment.attributes.State ? "User has Fixed it" : "User Hasn't Fixed it"}</p>
              <button onClick={() => handleDeleteComment(comment.id, index)} className="ml-2 text-red-500">
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Articleinfo;

"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import '../this_area.css';

function Articleinfo({ article, User }) {
  const [users, setData] = useState();
  const targetEmail = User.email;
  const [matchedUser, setMatchedUser] = useState(null);
  const [FetchedComment, setFetchedComments] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const response = await fetch(`/api/ClientAvatar`);
      const userr = await response.json();
      setData(userr.data);
    };
    getArticles();
  }, []);

  const renderComment = (text, index) => (
    <div key={index} style={{ overflow: 'hidden', maxHeight: '90px' }}>
      {text}
    </div>
  );

  useEffect(() => {
    const fetchArticleData = async () => {
      const response = await fetch(`http://localhost:1337/api/comments?populate=*&filters[ArticleId][$eq]=${article.id}`, {
        cache: 'no-store'
      });
      const comment = await response.json();

      // Add isChecked property to each comment
      const commentsWithChecked = comment.data.map(comment => ({
        ...comment,
        isChecked: comment.attributes.State || false // Assuming State holds the checkbox value
      }));

      setFetchedComments(commentsWithChecked);
    };

    fetchArticleData();
  }, [article.id]);

  const handleCheckboxChange = (index) => (event) => {
    const updatedComments = [...FetchedComment];
    updatedComments[index].isChecked = event.target.checked;
    setFetchedComments(updatedComments);

    // Optionally, you can also update the state on the server
    fetch(`http://localhost:1337/api/comments/${updatedComments[index].id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: { State: updatedComments[index].isChecked } }),
    });
  };

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

  console.log(matchedUser);
  return (
    <>
      <div className='PictureAndBio'>
        {article ? (
          <img
            src={matchedUser?.imageUrl}
            className="avatar shadow-lg"
            alt="Avatar"
          />
        ) : (
          <div className='w-[200px] h-[225px] avatar bg-slate-200 rounded-lg animate-pulse'></div>
        )}
        <h1 className='SubmittedBy text-xl font-bold dark:text-white'>
          Submitted By : {User?.username}
        </h1>

        <div className='mt-5'>
          {FetchedComment?.map((comment, index) => (
             

            <div key={comment.id} className="mb-2 p-2 border rounded">
               <p>Reviewer: {comment.attributes.Senderusername}</p>
              <p>{renderComment(comment.attributes.Comment, index)}</p>
              <p>Status: {comment.isChecked ? "User has Fixed it" : "User Did Not Fix it"}</p>
              <input
                type="checkbox"
                checked={comment.isChecked}
                onChange={handleCheckboxChange(index)}
                className="mr-2"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Articleinfo;

import React, { useEffect, useState } from 'react';

function SelectReviewers({ article }) {
  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch(`http://localhost:1337/api/users?populate=*&filters[Type][$eq]=${article.attributes?.Type}`);
      const userData = await response.json();
  
      setUsers(userData);
    }
    getUsers();
  }, []);

  console.log(users)

  const handleUserSelect = (event, user) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      if (selectedUsers.length < 4) {
        setSelectedUsers(prevSelected => [...prevSelected, user]);
      } else {
        event.target.checked = false;
        alert("You can select up to four users.");
      }
    } else {
      setSelectedUsers(prevSelected => prevSelected.filter(selectedUser => selectedUser.id !== user.id));
    }
  };
  console.log(article.id)

  const handleRetrieveCheckedUsers = async () => {
    const Emails = selectedUsers.map(user => user.email).join(", "); // Join usernames into a single string
    console.log(Emails)
    const updatedArticle = {
        data: { 
            Reviewers:Emails  
        },
    };

    try {
        const response = await fetch(`http://localhost:1337/api/articles/${article.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedArticle),
        });
   
        if (!response.ok) {
            throw new Error("Failed to update article");
        }
   
        alert("Article Sent to reviewers!");
    } catch (error) {
        console.error("Error updating article:", error);
    }
};

  return (
    <div className="flex flex-col items-start w-fit justify-start min-h-fit  pl-5 pb-10  pt-10 bg-gray-100">
      <div className="mt-4">
        <p className="text-lg font-medium text-gray-700">Select up to four users:</p>
        <ul className="mt-2">
          {users.map(user => (
            <li key={user.id} className="flex items-center">
              <input
                type="checkbox"
                id={`user-${user.id}`}
                value={user.id}
                onChange={(event) => handleUserSelect(event, user)}
                className="mr-2"
              />
              <label htmlFor={`user-${user.id}`}>{user.username}</label>
            </li>
          ))}
        </ul>
      </div>

      {selectedUsers.length > 0 && (
        <div className="mt-4">
          <p className="text-lg font-medium text-gray-700">Selected Users:</p>
          <ul className="mt-2">
            {selectedUsers.map(user => (
              <li key={user.id}>{user.username}</li>
            ))}
          </ul>
        </div>
      )}
      <button onClick={handleRetrieveCheckedUsers} className="  rounded-md mr-5 bg-primary px-4 py-2.5 text-sm font-medium text-white transition hover:bg-teal-600/75 sm:block mt-5"> Assign Reviewers</button>
    </div>
  );
}

export default SelectReviewers;

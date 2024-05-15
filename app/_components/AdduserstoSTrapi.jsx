import React from "react";
import { auth, currentUser } from "@clerk/nextjs/server";

async function AdduserstoSTrapi() {
  const user = await currentUser();

  console.log(user);

  const { userId } = auth();

  if (userId) {
    const Username = `${user.firstname} ${user.lastname}`;
    console.log(Username);
    const userToCreate = {
      username: user.username ? user.username : Username,
      email: user.emailAddresses[0].emailAddress, // If applicable, use Clerk user email
      password: user.password
    };
    fetch("http://localhost:1337/api/auth/local/Register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userToCreate),
    })
      .then((response) => {
        if (response.ok) {
          console.log("User created successfully!");
        } else {
          console.error("Error creating user:", response.statusText);
        }
      })
      .catch((error) => {
        console.error("Error sending request to Strapi:", error);
      });
  }
  return <div>AdduserstoSTrapi</div>;
}

export default AdduserstoSTrapi;

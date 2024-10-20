"use client"
 import {React,useState,useEffect} from 'react'
import SelectReviewers from './SelectReviewers'
function AssignRole({article,User}) {
    const [users,setData] = useState()

    useEffect(()=>{
        const getUsers = async () =>{
          const response = await fetch(`http://localhost:1337/api/users`);
          const userr = await response.json(); 
      
          setData(userr.data);
        }
        getUsers();
      
      },[])
     
 
  return (
    <div>
      <SelectReviewers article= {article} User={User}/>
   </div> )
}

export default AssignRole
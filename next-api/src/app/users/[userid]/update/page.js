"use client";
import './../../../style.css'

import { useEffect, useState } from "react";

export default function Page({ params }) {
  let id = params.userid;
  console.log(id);
  const [name, setName] = useState("");
  const [Age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [Address, setAddress] = useState("");
  const [Aduction, setAduction] = useState("");

  useEffect(()=>{
    getUserDetails();
  },[])

  const getUserDetails=async()=>{
    let data = await fetch("http://localhost:3000/api/users/"+id);
    console.log(id)
    data = await data.json();
    console.log(data.result.name)
    setName(data.result.name)
    setAge(data.result.Age)
    setEmail(data.result.email)
    setAddress(data.result.Address)
    setAduction(data.result.Aduction)
  }

  const updateUser=async()=>{
    let result = await fetch("http://localhost:3000/api/users/"+id,{
      method:"PUT",
      body:JSON.stringify({name,Age,email,Address,Aduction})
    });
    result=await result.json();
    console.log(result);
    if(result.success){
      alert("User information updated")
    }else{
      alert("Please try vaild input")
    }
  }
  return (
    <div className='add-user'>
      <h1>Update user details</h1>
      <input className="input-field"
        type="text"
        value={name}
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
      />
      <br></br>
      <br></br>
      <input className="input-field"
        type="text"
        value={Age}
        placeholder="Enter Age"
        onChange={(e) => setAge(e.target.value)}
      />
      <br></br>
      <br></br>
      <input className="input-field"
        type="text"
        value={email}
        placeholder="Enter email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br></br>
      <br></br>
      <input className="input-field"
        type="text"
        value={Address}
        placeholder="Enter Address"
        onChange={(e) => setAddress(e.target.value)}
      />
      <br></br>
      <br></br>
      <input className="input-field"
        type="text"
        value={Aduction}
        placeholder="Enter Aduction"
        onChange={(e) => setAduction(e.target.value)}
      />
      <br></br>
      <br></br>
      <button className='btn'onClick={updateUser} >Add User</button>
    </div>
  );
}

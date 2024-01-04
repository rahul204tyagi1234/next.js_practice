"use client";
import '../style.css'

import { useState } from "react";

export default function Page() {
    const [name,setName]=useState("");
    const [Age,setAge]=useState("");
    const [email,setEmail]=useState("");
    const [Address,setAddress]=useState("");
    const [Aduction,setAduction]=useState("");

    const addUser= async()=>{
        let response= await fetch("http://localhost:3000/api/users",{
            method:"Post",
            body:JSON.stringify({name,Age,email,Address,Aduction})
        });
        // console.log(name,Age,email,Address,Aduction)
        response = await response.json();   
        if(response.success){
            alert("Your data is created")
        }else{
            alert("some error")
        }
    }
   
  return (
    <div className='add-user'>
      <h1>Add new user</h1>
      <input className="input-field" type="text" value={name} placeholder="Enter name" onChange={(e)=>setName(e.target.value)} />
      <br></br>
      <br></br>
      <input className="input-field" type="text" value={Age} placeholder="Enter Age" onChange={(e)=>setAge(e.target.value)} />
      <br></br>
      <br></br>
      <input className="input-field" type="text" value={email} placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
      <br></br>
      <br></br>
      <input className="input-field" type="text" value={Address} placeholder="Enter Address" onChange={(e)=>setAddress(e.target.value)} />
      <br></br>
      <br></br>
      <input className="input-field" type="text" value={Aduction} placeholder="Enter Aduction" onChange={(e)=>setAduction(e.target.value)} />
      <br></br>
      <br></br>
      <button className='btn' onClick={addUser}>Add User</button>
    </div>
  );
}

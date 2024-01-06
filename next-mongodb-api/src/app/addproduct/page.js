"use client"
import { useState } from "react"
import "../style.css"

export default function Page(){
    const [name,setName]=useState("");
    const [age,setAge]=useState("");
    const [gender,setGender]=useState("");
    const [salary,setSalary]=useState("");

    const addUser=async()=>{
        console.log(name,age,gender,salary);
        let result= await fetch("http://localhost:3000/api/products",{
            method:"POST",
            body:JSON.stringify({name,age,gender,salary})
        })
        result = await result.json();
        if(result.success){
            alert("New User Added")
        }
    }
    return(
        <div>
            <h1>Add product</h1>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter the name" className="input"/>
            <input type="text" value={age} onChange={(e)=>setAge(e.target.value)} placeholder="Enter the age" className="input"/>
            <input type="text" value={gender} onChange={(e)=>setGender(e.target.value)} placeholder="Enter the gender" className="input"/>
            <input type="text" value={salary} onChange={(e)=>setSalary(e.target.value)} placeholder="Enter the salary" className="input"/>
            <button className="btn" onClick={addUser}>Add User</button>
        </div>
    )
}
"use client"
import { useEffect, useState } from "react"
import "../../style.css"
import Link from "next/link";

export default function Page(props){
    const [name,setName]=useState("");
    const [age,setAge]=useState("");
    const [gender,setGender]=useState("");
    const [salary,setSalary]=useState("");

    useEffect(()=>{
        getUsersDetail();
    },[]);

    const getUsersDetail=async()=>{
        let userId=props.params.edituser
        let productDetail= await fetch("http://localhost:3000/api/products/"+userId);
        productDetail= await productDetail.json();
        if(productDetail.success){
            let result=productDetail.result;
            console.log("=======",result);
            setName(result.name);
            setAge(result.age);
            setGender(result.gender);
            setSalary(result.salary)
        }
    }

    const updateUser=async()=>{
        let userId=props.params.edituser
        let data= await fetch("http://localhost:3000/api/products/"+userId,{
            method:"PUT",
            body:JSON.stringify(({name,age,gender,salary}))
        });
        data= await data.json();
        if(data.success){
            alert("User Detail has been updated")
        }
    }

    return(
        <div>
            <h1>Update User</h1>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter the name" className="input"/>
            <input type="text" value={age} onChange={(e)=>setAge(e.target.value)} placeholder="Enter the age" className="input"/>
            <input type="text" value={gender} onChange={(e)=>setGender(e.target.value)} placeholder="Enter the gender" className="input"/>
            <input type="text" value={salary} onChange={(e)=>setSalary(e.target.value)} placeholder="Enter the salary" className="input"/>
            <button className="btn" onClick={updateUser}>Update User</button>
            <Link href={"/users"}> Go to users list</Link>
        </div>
    )
}
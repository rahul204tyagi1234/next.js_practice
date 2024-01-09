"use client"

import { useRouter } from "next/navigation";

export default function DeleteProduct(props) {
    const router=useRouter();
    const deleteUser=async()=>{
        let respose=await fetch("http://localhost:3000/api/products/"+props.id,{
            method:"DELETE"
        });
        respose=await respose.json();
        if(respose.success){
            alert("User has been deleted")
            router.refresh();
        }
    }
    return<button onClick={deleteUser}>Delete</button>
    
}
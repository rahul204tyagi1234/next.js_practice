"use client"
import Script from "next/script";

export default function Page(){
    return(
        <div>
            <Script
            src="/location.js"
            onLoad={()=>{
                console.log("location file loaded")
            }}/>
            <h1>Get user details</h1>
        </div>
    )
}
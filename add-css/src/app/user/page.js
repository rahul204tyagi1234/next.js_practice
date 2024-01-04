
'use client'
import { useState } from "react"
export default function Page(){
    const [h3Style,serH3Style]=useState({backgroundColor:"green"})
    return(
        <div>
            <h1 style={{backgroundColor:"red"}}>User page</h1>
            <h2>Heading 2 in main page</h2>
            <h3 style={h3Style}>Heading 3 in main page</h3>
            <button onClick={()=>serH3Style({backgroundColor:"aqua"})}>Update style</button>

        </div>
    )
}
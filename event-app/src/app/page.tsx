// call the event
"use client"
import {useState} from 'react'
import Image from "next/image";

export default function Home() {
  const [name,setName] =useState("Rahul")
  const names=()=>{
    setName("Tyagi")
  }
  const Mango=()=>{
    alert("it is the fruit")
  }

  const pink=(item)=>{
    alert(item)
  }
  const innerComponent=()=>{
    return(
      <h1>Inner component</h1>
    )
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Events, function and state {name}</h1>
        {/* create event */}
        <button onClick={()=>alert("Hello next js")}
          type="button"
          className='align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
  '
        >
          Click me
        </button>
        <br /><br /><br />
        <button onClick={Mango}
          type="button"
          className='align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
  '
        >
          Click me
        </button>
        <br /><br /><br />
        <button onClick={()=>pink("color")}
          type="button"
          className='align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
  '
        >
          Click me
        </button>

        <br /><br /><br />
        <button onClick={()=>names()}
          type="button"
          className='align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
  '
        >
          Click me
        </button>
        {/* <innerComponent /> */}
        {/* {innerComponent()} */}
      </div>
      <div>
        <button>click me</button>
      </div>
    </main>
  );
}

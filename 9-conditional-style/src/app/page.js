"use client"
import style from './style.module.css'
import { useState } from 'react'
import Image from 'next/image'

export default function Home() {
  const [color,setColor]=useState("red")
  return (
    <main>
      <div>
        <h1 className={color=='red'?style.red:style.green}>Conditional style in Next.js</h1>
        <button onClick={()=>setColor("green")}>Update color</button>
      </div>
    </main>
  )
}

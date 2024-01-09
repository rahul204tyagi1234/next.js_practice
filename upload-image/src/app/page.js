"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState();
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(file);
    const data= new FormData();
    data.set('file',file);
    const result=await fetch('api/upload',{
      method:"POST",
      body:data
    });
    console.log(result);
  };
  return (
    <main>
      <div>
        <h1>Upload Image without Library</h1>
        <form onSubmit={onSubmit}>
          <input
            type="file"
            name="file"
            onChange={(e) => setFile(e.target.files?.[0])}
          />
          <button type="submit">Upload image</button>
        </form>
      </div>
    </main>
  );
}

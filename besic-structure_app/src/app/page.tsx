"use client"
import Link from 'next/link';
import Image from 'next/image'
import {useRouter} from 'next/navigation'

//Linking and navigation 

export default function Home() {
  const router=useRouter();
  const navigate=(name:any)=>{
    router.push(name);
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Hello Rahul</h1>
        <Link href="/login">Go to login page</Link>
        <br /><br /><br />
        <Link href="/about">Go to about page</Link>
        <br /><br /><br />
        <button onClick={()=>router.push("/login")}>Go to login page</button>
        <br /><br /><br />
        <button onClick={()=>navigate("/about")}>Go to about page</button>
      </div>
    </main>
  )
}

"use client"
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
    <h1>Fatch Data in Client component</h1>
    <Link href="/productlist">Go to product list</Link>
    </main>
  )
}

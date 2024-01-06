import { API_BASE_URL } from '@/config/constants';
import Image from 'next/image'

export default function Home() {
  console.log(process.env.CUSTOM_MODE);
  return (
    <main>
      {
        process.env.NODE_ENV=="development"?
        <h1>You are mode in development</h1>
        :
        <h1>You are mode in production </h1>
      }
      <div>
        <h1>Environment variables in Next.js</h1>
      </div>
      <h1>{API_BASE_URL}</h1>
      
    </main>
  )
}

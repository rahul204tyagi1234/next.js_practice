import other from './other.module.css'
import custom from './custom.module.css'
import outside from './style/outside.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div>
        <h1 className={custom.main}>CSS modules in Next.js</h1>
        <h2 className={other.main}>Hii , Rahul Tyagi</h2>
        <h3 className={outside.main}>Hii , Rahul Tyagi</h3>
      </div>
    </main>
  )
}

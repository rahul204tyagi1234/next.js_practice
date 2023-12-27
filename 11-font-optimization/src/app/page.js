import { Roboto } from 'next/font/google'
import Image from 'next/image'

const roboto = Roboto({
  weight:'100',
  subsets:['latin'],
  display:'swap'
})

export default function Home() {
  return (
    <main>
      <div>
        <h1> Font Optimization in Next.js </h1>
        {/* <h1 style={{fontFamily:'Roboto',fontWeight:100}}> Font Optimization in Next.js </h1> */}
        <h1 className={roboto.className}> Font with next js feature</h1>
      </div>
    </main>
  )
}

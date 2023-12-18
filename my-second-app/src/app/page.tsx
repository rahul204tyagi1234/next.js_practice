import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* use new component */}
      <User name="Tyagi" />
      {/* reuse component  */}
      <User name="Anand" />
      {/* reuse component  */}
      <User name="Pradip" />
      {/* reuse component  */}
      <User name="Chandan" />
      {/* reuse component  */}
      <Employee />
     
    <h1>Welcome To Home page</h1>

    <div>
      Rahul tyagi
    </div>
    </main>

    
    
  )
}

// create a new component

const User=(props)=>{
  return(
    <div>
      <h2>User name is {props.name}</h2>
    </div>
  )
}

const Employee=()=>{
  return(
    <div>
      <h2>Employee name is rahul </h2>
    </div> 
  )
}

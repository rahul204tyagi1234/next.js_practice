import Image from "next/image";
import profile from "../../public/vercel.svg";
import user from "../../public/next.svg";
export default function Home() {
  return (
    <main>
      <div>
        <h1>Image Optimigation in Next.js </h1>
        <Image src={user} width={500} height={500} />
        <img src={profile.src}/>
        <Image
        src="https://cdn.pixabay.com/photo/2023/12/08/09/13/vine-8437282_1280.jpg"
        width={1900}
        height={900}/>
      </div>
    </main>
  );
}

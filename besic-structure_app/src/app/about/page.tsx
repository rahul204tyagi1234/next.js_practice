"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();

  return (
    <div>
      <h1 className="heading">Welcome to about page</h1>
      <button onClick={() => router.push("/")}>Go to home page</button>
      <br />
      <br />
      <br />
      <Link href="/">Go to home page</Link>
      <br />
      <br />
      <br />
      <Link href="/about/aboutcollage">Go to About collage page</Link>
      <br />
      <br />
      <br />
      <Link href="/about/aboutstudent">Go to About student page</Link>
    </div>
  );
};
export default About;

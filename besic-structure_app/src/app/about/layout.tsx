"use client";
import Link from "next/link";
import "./about.css";
import { usePathname } from "next/navigation";
export default function Leyout({ children }: any) {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div>
      <ul className="login-menu">
        <li>
          <h3>About Navbar</h3>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/about/aboutstudent"> About Student</Link>
        </li>
        <li>
          <Link href="/about/aboutcollege"> About College</Link>
        </li>
      </ul>

      {children}
    </div>
  );
}

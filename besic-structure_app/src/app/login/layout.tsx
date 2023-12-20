"use client"
import Link from "next/link"
import './login.css'
import { usePathname } from "next/navigation"
export default function Leyout({children}:any){
    const pathname =usePathname();
    console.log(pathname);
    return(
        <div>
            {
                pathname!=="/login/loginteacher"?
                <ul className="login-menu">
                <li>
                    <h3>Login Navbar</h3>
                </li>
                <li>
                    <Link href="/login">Login</Link>
                </li>
                <li>
                    <Link href="/login/loginstudent"> Student Login</Link>
                </li>
                <li>
                    <Link href="/login/loginteacher"> Teacher Login</Link>
                </li>
            </ul>
               
                :null
            }
           
                {children}
        </div>
    )

}
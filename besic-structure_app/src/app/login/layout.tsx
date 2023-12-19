import Link from "next/link"
export default function Leyout({children}:any){
    return(
        <div>
            {/* <h1>Hello </h1>   */}
            <ul>
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
                {children}
        </div>
    )

}
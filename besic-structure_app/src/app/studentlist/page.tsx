"use client"
import Link from "next/link";

export default function StudentList(){
    return(
        <div>
            <h1>Student List</h1>
            <ul>
                <li>
                    <Link href="/studentlist/Rahul">Rahul</Link>
                </li>
                <li>
                  <Link href="/studentlist/Anand">Anand</Link>

                </li>
                <li>
                  <Link href="/studentlist/Anish">Anish</Link>

                </li>
                <li>
                  <Link href="/studentlist/Pradip">Pradip</Link>

                </li>
                <li>
                  <Link href="/studentlist/Asish">Asish</Link>

                </li>
            </ul>
        </div>
    )
}
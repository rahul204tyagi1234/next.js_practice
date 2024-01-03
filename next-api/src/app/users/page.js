import Link from "next/link";

async function getUsers(){
    let data = await fetch("http://localhost:3000/api/users");
    data = await data.json();
    return data;
}
export default async function Page(){
    const users = await getUsers();
    console.log(users);
    return(
        <div>
            <h1>User page </h1>
            {
                users.map((item)=>(
                    <Link href={`users/${item.userid}`}>{item.name}</Link>
                ))
            }
        </div>
    )
}
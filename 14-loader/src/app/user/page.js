
async function userList(){
    let data = await fetch("https://dummyjson.com/users");
    data= await data.json();
    return data.users;
}


export default async function Page(){

    let users= await userList();
    return(
        <div>
            <h1>Loader in Next.js</h1>
            {
                users.map((item)=>(
                    <div>
                        <h2>User Name : {item.firstName}</h2>
                        <h3>User Age : {item.age}</h3>
                    </div>
                ))
            }
        </div>
    )
}
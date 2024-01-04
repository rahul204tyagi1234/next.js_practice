
async function getUser(userid){
    let data = await fetch(`http://localhost:3000/api/users/${userid}`);
    data = await data.json();
    return data.result;
}
export default async function Page({params}){
    console.log(params);
    const user = await getUser(params.userid);
    console.log(user);
    return(
        <div>
            <h1>User Detail</h1>
            <h4>Id : {user.userid}</h4>
            <h4>Name : {user.name}</h4>
            <h4>Age : {user.Age}</h4>
            <h4>Email : {user.email}</h4>
            <h4>Address : {user.Address}</h4>
            <h4>Aduction : {user.Aduction}</h4>
           
        </div>
    )
}